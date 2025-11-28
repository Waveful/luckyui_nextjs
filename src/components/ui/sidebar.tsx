"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

// LuckyUI Sidebar Context
interface SidebarContextValue {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(
  undefined
);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// LuckyUI Sidebar Variants
const sidebarVariants = cva(
  "flex flex-col bg-card border-border transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "border-r",
        floating: "m-3 rounded-2xl border",
        inset: "bg-secondary/30",
      },
      side: {
        left: "",
        right: "border-l border-r-0",
      },
    },
    defaultVariants: {
      variant: "default",
      side: "left",
    },
  }
);

// LuckyUI Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

function SidebarProvider({
  children,
  defaultExpanded = true,
}: SidebarProviderProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, isMobile }}>
      {children}
    </SidebarContext.Provider>
  );
}

// LuckyUI Sidebar Root
interface SidebarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: boolean;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, variant, side, collapsible = true, children, ...props }, ref) => {
    const { expanded } = useSidebar();

    return (
      <aside
        ref={ref}
        className={cn(
          sidebarVariants({ variant, side }),
          expanded ? "w-64" : "w-16",
          "h-full relative flex-shrink-0",
          className
        )}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";

// LuckyUI Sidebar Header
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 p-4 border-b border-border",
        !expanded && "justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarHeader.displayName = "SidebarHeader";

// LuckyUI Sidebar Content - Scrollable area
const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 scrollbar-thin", className)}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarContent.displayName = "SidebarContent";

// LuckyUI Sidebar Footer
const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        "p-3 border-t border-border mt-auto",
        !expanded && "flex justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarFooter.displayName = "SidebarFooter";

// LuckyUI Sidebar Group
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, label, children, ...props }, ref) => {
    const { expanded } = useSidebar();

    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {label && expanded && (
          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {label}
          </div>
        )}
        {!expanded && label && (
          <div className="h-px bg-border mx-3 my-2" />
        )}
        <div className="space-y-1">{children}</div>
      </div>
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";

// LuckyUI Sidebar Item
interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ className, icon, active, badge, children, ...props }, ref) => {
    const { expanded } = useSidebar();

    return (
      <button
        ref={ref}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
          "hover:bg-accent text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "active:scale-[0.98]",
          active && "bg-primary/10 text-primary font-medium",
          !expanded && "justify-center px-0",
          className
        )}
        {...props}
      >
        {icon && (
          <span className={cn("flex-shrink-0", "[&_svg]:w-5 [&_svg]:h-5")}>
            {icon}
          </span>
        )}
        {expanded && (
          <>
            <span className="flex-1 text-left text-sm truncate">{children}</span>
            {badge && <span className="flex-shrink-0">{badge}</span>}
          </>
        )}
      </button>
    );
  }
);
SidebarItem.displayName = "SidebarItem";

// LuckyUI Sidebar Toggle Button
const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { expanded, setExpanded } = useSidebar();

  return (
    <button
      ref={ref}
      onClick={() => setExpanded(!expanded)}
      className={cn(
        "absolute -right-3 top-6 z-10",
        "flex items-center justify-center",
        "h-6 w-6 rounded-full",
        "bg-background border border-border",
        "hover:bg-accent transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      {expanded ? (
        <ArrowLeft01Icon className="h-3.5 w-3.5" />
      ) : (
        <ArrowRight01Icon className="h-3.5 w-3.5" />
      )}
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

// LuckyUI Sidebar Separator
const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("h-px bg-border mx-3 my-3", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

// LuckyUI Inset Content - For layouts with sidebar
const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarInset.displayName = "SidebarInset";

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInset,
  useSidebar,
};

