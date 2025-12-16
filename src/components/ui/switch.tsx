"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

// LuckyUI Switch - Like Flutter's LuckySwitch with smooth animations
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    size?: "sm" | "default" | "lg";
  }
>(({ className, size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: {
      root: "h-5 w-9",
      thumb: "h-4 w-4 data-[state=checked]:translate-x-4",
    },
    default: {
      root: "h-7 w-12",
      thumb: "h-6 w-6 data-[state=checked]:translate-x-5",
    },
    lg: {
      root: "h-8 w-14",
      thumb: "h-7 w-7 data-[state=checked]:translate-x-6",
    },
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#B3B3FF] data-[state=unchecked]:bg-input",
        sizeClasses[size].root,
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-background ring-0 transition-all duration-200 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary",
          sizeClasses[size].thumb
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
