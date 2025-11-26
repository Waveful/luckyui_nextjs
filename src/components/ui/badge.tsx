import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// LuckyUI Badge - Rounded pill style like Flutter's LuckyBadge
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: 
          "border text-foreground",
        success:
          "border-transparent bg-success text-success-foreground",
        warning:
          "border-transparent bg-warning text-warning-foreground",
        info:
          "border-transparent bg-info text-info-foreground",
        muted:
          "border-transparent bg-muted text-muted-foreground",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

// LuckyUI Red Dot - Notification indicator like Flutter's LuckyRedDot
interface RedDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  pulse?: boolean;
  count?: number;
}

function RedDot({ className, pulse, count, ...props }: RedDotProps) {
  if (count !== undefined && count > 0) {
    return (
      <span
        className={cn(
          "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold px-1",
          pulse && "animate-pulse",
          className
        )}
        {...props}
      >
        {count > 99 ? "99+" : count}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive",
        pulse && "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants, RedDot };
