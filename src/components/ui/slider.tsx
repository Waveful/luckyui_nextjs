"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// LuckyUI Slider - Mobile-friendly slider control
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  showValue?: boolean;
  variant?: "default" | "primary" | "success";
  onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, showValue, value, defaultValue = 50, variant = "primary", onValueChange, min = 0, max = 100, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(Number(defaultValue));
    const currentValue = value !== undefined ? Number(value) : internalValue;
    
    // Calculate percentage for the filled portion
    const minVal = Number(min);
    const maxVal = Number(max);
    const percentage = ((currentValue - minVal) / (maxVal - minVal)) * 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const variantClasses = {
      default: "[&::-webkit-slider-thumb]:bg-foreground",
      primary: "[&::-webkit-slider-thumb]:bg-primary",
      success: "[&::-webkit-slider-thumb]:bg-success",
    };

    // Filled color based on variant using CSS variables
    const filledColors = {
      default: "hsl(var(--foreground))",
      primary: "hsl(var(--primary))",
      success: "hsl(var(--success))",
    };

    const unfilledColors = {
      default: "hsl(var(--foreground) / 0.2)",
      primary: "hsl(var(--primary) / 0.2)",
      success: "hsl(var(--success) / 0.2)",
    };

    return (
      <div className="relative flex items-center gap-4">
        <div className="relative flex-1">
          <input
            type="range"
            ref={ref}
            value={currentValue}
            min={min}
            max={max}
            onChange={handleChange}
            style={{
              background: `linear-gradient(to right, ${filledColors[variant]} 0%, ${filledColors[variant]} ${percentage}%, ${unfilledColors[variant]} ${percentage}%, ${unfilledColors[variant]} 100%)`,
            }}
            className={cn(
              "h-3 w-full cursor-pointer appearance-none rounded-full",
              "[&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:active:scale-95",
              "[&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              variantClasses[variant],
              className
            )}
            {...props}
          />
        </div>
        {showValue && (
          <span className="text-sm font-semibold text-foreground min-w-[3ch] text-right">
            {currentValue}
          </span>
        )}
      </div>
    );
  }
);
Slider.displayName = "Slider";

export { Slider };
