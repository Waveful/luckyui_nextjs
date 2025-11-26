import * as React from "react";
import { cn } from "@/lib/utils";

// LuckyUI Progress Bar - Like Flutter's LuckyProgressBar
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  showLabel?: boolean;
  size?: "sm" | "default" | "lg";
  animated?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100, 
    variant = "default", 
    showLabel, 
    size = "default",
    animated = true,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const variantClasses = {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
      info: "bg-info",
    };

    const sizeClasses = {
      sm: "h-1.5",
      default: "h-2.5",
      lg: "h-4",
    };

    return (
      <div className="relative">
        {showLabel && (
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          className={cn(
            "relative w-full overflow-hidden rounded-full bg-secondary",
            sizeClasses[size],
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "h-full rounded-full",
              variantClasses[variant],
              animated && "transition-all duration-500 ease-out"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);
Progress.displayName = "Progress";

// LuckyUI Loading Indicator - Circular loading like Flutter's LuckyLoading
interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "primary" | "secondary";
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-[3px]",
      default: "h-8 w-8 border-[3px]",
      lg: "h-12 w-12 border-4",
    };

    const variantClasses = {
      default: "border-transparent border-t-foreground border-r-foreground",
      primary: "border-transparent border-t-primary border-r-primary",
      secondary: "border-transparent border-t-secondary-foreground border-r-secondary-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full animate-spin",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Loading.displayName = "Loading";

export { Progress, Loading };
