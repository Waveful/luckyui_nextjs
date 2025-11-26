"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// LuckyUI Radio Group - Like Flutter's LuckyRadios with circular indicators
interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  orientation?: "horizontal" | "vertical";
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue, onValueChange, name = "radio-group", orientation = "vertical", children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [value, onValueChange]
    );

    return (
      <RadioGroupContext.Provider value={{ name, value: currentValue, onChange: handleChange }}>
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            orientation === "vertical" ? "grid gap-3" : "flex flex-wrap gap-4",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  value: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, id, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);

    if (!context) {
      throw new Error("RadioGroupItem must be used within a RadioGroup");
    }

    const isChecked = context.value === value;

    const handleChange = () => {
      context.onChange(value);
    };

    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="radio"
          ref={ref}
          id={id}
          name={context.name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          className={cn(
            "peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-input bg-background ring-offset-background transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:border-primary hover:border-primary/50",
            className
          )}
          {...props}
        />
        {/* Inner filled circle for checked state */}
        <div
          className={cn(
            "absolute h-2.5 w-2.5 left-[5px] top-1/2 -translate-y-1/2 rounded-full bg-primary pointer-events-none transition-all duration-200",
            isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        />
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
