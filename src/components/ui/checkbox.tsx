"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tick01Icon, MinusSignIcon } from "hugeicons-react";

// LuckyUI Checkbox - Rounded checkbox with smooth animations
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, indeterminate, onCheckedChange, checked, defaultChecked, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    
    // Use controlled value if provided, otherwise use internal state
    const checkedValue = checked !== undefined ? checked : isChecked;

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (checked === undefined) {
        setIsChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={inputRef}
          checked={checkedValue}
          onChange={handleChange}
          className={cn(
            "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-input bg-background ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary hover:border-primary/50",
            className
          )}
          {...props}
        />
        <Tick01Icon 
          className={cn(
            "absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none transition-opacity duration-200",
            checkedValue && !indeterminate ? "opacity-100" : "opacity-0"
          )}
          strokeWidth={3}
        />
        {indeterminate && (
          <MinusSignIcon 
            className="absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none" 
            strokeWidth={3}
          />
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
