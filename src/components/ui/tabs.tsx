"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// LuckyUI Tabs - Like Flutter's LuckyTabBar with underline indicator
const Tabs = TabsPrimitive.Root;

// Context to share underline indicator state
interface TabsUnderlineContextValue {
  registerTrigger: (value: string, element: HTMLButtonElement | null) => void;
  activeValue: string | undefined;
}

const TabsUnderlineContext = React.createContext<TabsUnderlineContextValue | null>(null);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: "default" | "pills" | "underline";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({});
  const [activeValue, setActiveValue] = React.useState<string | undefined>();
  const triggersRef = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const updateIndicator = React.useCallback(() => {
    if (variant !== "underline" || !listRef.current) return;
    
    const activeButton = Array.from(triggersRef.current.values()).find(
      (btn) => btn.getAttribute("data-state") === "active"
    );
    
    if (activeButton) {
      const listRect = listRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      setIndicatorStyle({
        width: buttonRect.width,
        transform: `translateX(${buttonRect.left - listRect.left}px)`,
      });
      setActiveValue(activeButton.getAttribute("data-value") || undefined);
    }
  }, [variant]);

  const registerTrigger = React.useCallback((value: string, element: HTMLButtonElement | null) => {
    if (element) {
      triggersRef.current.set(value, element);
    } else {
      triggersRef.current.delete(value);
    }
    updateIndicator();
  }, [updateIndicator]);

  // Update indicator on mount and when children change
  React.useEffect(() => {
    updateIndicator();
    
    // Use MutationObserver to detect data-state changes
    const observer = new MutationObserver(updateIndicator);
    triggersRef.current.forEach((element) => {
      observer.observe(element, { attributes: true, attributeFilter: ["data-state"] });
    });
    
    return () => observer.disconnect();
  }, [updateIndicator, props.children]);

  // Update on resize
  React.useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const variantClasses = {
    default: "bg-secondary/50 rounded-xl p-1",
    pills: "gap-2",
    underline: "gap-4",
  };

  const setRefs = React.useCallback((node: HTMLDivElement | null) => {
    listRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);

  return (
    <TabsUnderlineContext.Provider value={{ registerTrigger, activeValue }}>
      <TabsPrimitive.List
        ref={setRefs}
        className={cn(
          "inline-flex items-center justify-start text-muted-foreground relative",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {props.children}
        {variant === "underline" && (
          <span
            className="absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-out"
            style={indicatorStyle}
          />
        )}
      </TabsPrimitive.List>
    </TabsUnderlineContext.Provider>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: "default" | "pills" | "underline";
  }
>(({ className, variant = "default", value, ...props }, ref) => {
  const context = React.useContext(TabsUnderlineContext);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (context && value) {
      context.registerTrigger(value, triggerRef.current);
      return () => context.registerTrigger(value, null);
    }
  }, [context, value]);

  const setRefs = React.useCallback((node: HTMLButtonElement | null) => {
    triggerRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);

  const variantClasses = {
    default: "rounded-lg px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground",
    pills: "rounded-full px-4 py-2 bg-secondary text-muted-foreground data-[state=active]:bg-neutral-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-neutral-900",
    underline: "pb-3 px-1 data-[state=active]:text-foreground rounded-none",
  };

  return (
    <TabsPrimitive.Trigger
      ref={setRefs}
      value={value}
      data-value={value}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-fade-in",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
