import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loading01Icon } from "hugeicons-react";

// LuckyUI Button Styles - Mobile-first with tap animation
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        // LuckyUI Primary - Bold filled button
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
        // LuckyUI Secondary - Subtle filled button
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
        // LuckyUI Destructive - Error actions
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        // LuckyUI Outline - Border only
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground rounded-xl",
        // LuckyUI Ghost - No background
        ghost: 
          "hover:bg-accent hover:text-accent-foreground rounded-xl",
        // LuckyUI Link - Text only with underline
        link: 
          "text-primary underline-offset-4 hover:underline",
        // LuckyUI Success
        success:
          "bg-success text-success-foreground hover:bg-success/90 rounded-xl",
        // LuckyUI Warning
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/90 rounded-xl",
        // LuckyUI Info
        info:
          "bg-info text-info-foreground hover:bg-info/90 rounded-xl",
      },
      size: {
        // LuckyUI sizes - optimized for mobile touch targets
        default: "h-12 px-6 py-3 text-base rounded-xl",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-lg rounded-xl",
        xl: "h-16 px-10 py-5 text-xl rounded-2xl",
        // Icon buttons - circular LuckyUI style
        icon: "h-12 w-12 rounded-xl",
        "icon-sm": "h-10 w-10 rounded-lg",
        "icon-lg": "h-14 w-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loading01Icon className="animate-spin" size={20} />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

// LuckyUI Text Button - Minimal style like Flutter's LuckyTextButton
const TextButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }
>(({ className, loading, children, disabled, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-2 text-[#80A7FF] font-medium transition-all duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-5",
      className
    )}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? (
      <>
        <Loading01Icon className="animate-spin" size={20} />
        <span>Loading...</span>
      </>
    ) : (
      children
    )}
  </button>
));
TextButton.displayName = "TextButton";

// LuckyUI Icon Button - Circular icon-only button
const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "ghost" | "outline";
    size?: "sm" | "default" | "lg";
  }
>(({ className, variant = "ghost", size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-10 w-10",
    default: "h-12 w-12",
    lg: "h-14 w-14",
  };
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-transparent hover:bg-accent",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-5",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
IconButton.displayName = "IconButton";

export { Button, buttonVariants, TextButton, IconButton };
