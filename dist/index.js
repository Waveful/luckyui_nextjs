import * as React14 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loading01Icon, Tick01Icon, MinusSignIcon, ArrowDown01Icon, ArrowUp01Icon, ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon, CircleIcon } from 'hugeicons-react';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}
function formatDate(date, options, locale = "en-US") {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}
function truncate(str, length) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 11)}`;
}
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
var isClient = typeof window !== "undefined";
var isServer = typeof window === "undefined";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
}
function toCamelCase(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : "").replace(/^(.)/, (char) => char.toLowerCase());
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        // LuckyUI Primary - Bold filled button
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
        // LuckyUI Secondary - Subtle filled button
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
        // LuckyUI Destructive - Error actions
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        // LuckyUI Outline - Border only
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground rounded-xl",
        // LuckyUI Ghost - No background
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        // LuckyUI Link - Text only with underline
        link: "text-primary underline-offset-4 hover:underline",
        // LuckyUI Success
        success: "bg-success text-success-foreground hover:bg-success/90 rounded-xl",
        // LuckyUI Warning
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 rounded-xl",
        // LuckyUI Info
        info: "bg-info text-info-foreground hover:bg-info/90 rounded-xl"
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
        "icon-lg": "h-14 w-14 rounded-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React14.forwardRef(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React14.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: disabled || loading,
        ...props
      },
      loading ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement(Loading01Icon, { className: "animate-spin", size: 20 }), /* @__PURE__ */ React14.createElement("span", null, "Loading...")) : children
    );
  }
);
Button.displayName = "Button";
var TextButton = React14.forwardRef(({ className, loading, children, disabled, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "button",
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center gap-2 text-[#80A7FF] font-medium transition-all duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-5",
      className
    ),
    disabled: disabled || loading,
    ...props
  },
  loading ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement(Loading01Icon, { className: "animate-spin", size: 20 }), /* @__PURE__ */ React14.createElement("span", null, "Loading...")) : children
));
TextButton.displayName = "TextButton";
var IconButton = React14.forwardRef(({ className, variant = "ghost", size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-10 w-10",
    default: "h-12 w-12",
    lg: "h-14 w-14"
  };
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-transparent hover:bg-accent"
  };
  return /* @__PURE__ */ React14.createElement(
    "button",
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-5",
        sizeClasses[size],
        variantClasses[variant],
        className
      ),
      ...props
    }
  );
});
IconButton.displayName = "IconButton";
var Input = React14.forwardRef(
  ({ className, type, error, icon, iconPosition = "left", heading, description, ...props }, ref) => {
    const inputElement = /* @__PURE__ */ React14.createElement("div", { className: "relative" }, icon && iconPosition === "left" && /* @__PURE__ */ React14.createElement("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon), /* @__PURE__ */ React14.createElement(
      "input",
      {
        type,
        className: cn(
          "flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          icon && iconPosition === "left" && "pl-12",
          icon && iconPosition === "right" && "pr-12",
          error && "border-destructive focus-visible:ring-destructive",
          className
        ),
        ref,
        ...props
      }
    ), icon && iconPosition === "right" && /* @__PURE__ */ React14.createElement("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon));
    if (heading || description) {
      return /* @__PURE__ */ React14.createElement("div", { className: "space-y-2" }, heading && /* @__PURE__ */ React14.createElement("label", { className: "text-sm font-medium leading-none text-foreground" }, heading), inputElement, description && /* @__PURE__ */ React14.createElement("p", { className: cn(
        "text-sm",
        error ? "text-destructive" : "text-muted-foreground"
      ) }, description));
    }
    return inputElement;
  }
);
Input.displayName = "Input";
var SearchBar = React14.forwardRef(
  ({ className, onSearch, icon, onChange, ...props }, ref) => {
    const handleChange = (e) => {
      onChange == null ? void 0 : onChange(e);
      onSearch == null ? void 0 : onSearch(e.target.value);
    };
    return /* @__PURE__ */ React14.createElement("div", { className: "relative" }, /* @__PURE__ */ React14.createElement("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon || /* @__PURE__ */ React14.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      /* @__PURE__ */ React14.createElement("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ React14.createElement("path", { d: "m21 21-4.3-4.3" })
    )), /* @__PURE__ */ React14.createElement(
      "input",
      {
        type: "search",
        className: cn(
          "flex h-12 w-full rounded-full border border-input bg-secondary/50 pl-12 pr-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          className
        ),
        ref,
        onChange: handleChange,
        ...props
      }
    ));
  }
);
SearchBar.displayName = "SearchBar";
var Textarea = React14.forwardRef(
  ({ className, error, heading, description, ...props }, ref) => {
    const textareaElement = /* @__PURE__ */ React14.createElement(
      "textarea",
      {
        className: cn(
          "flex min-h-[120px] w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
          error && "border-destructive focus-visible:ring-destructive",
          className
        ),
        ref,
        ...props
      }
    );
    if (heading || description) {
      return /* @__PURE__ */ React14.createElement("div", { className: "space-y-2" }, heading && /* @__PURE__ */ React14.createElement("label", { className: "text-sm font-medium leading-none text-foreground" }, heading), textareaElement, description && /* @__PURE__ */ React14.createElement("p", { className: cn(
        "text-sm",
        error ? "text-destructive" : "text-muted-foreground"
      ) }, description));
    }
    return textareaElement;
  }
);
Textarea.displayName = "Textarea";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React14.forwardRef(({ className, children, required, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  children,
  required && /* @__PURE__ */ React14.createElement("span", { className: "text-destructive ml-1" }, "*")
));
Label.displayName = LabelPrimitive.Root.displayName;
var Checkbox = React14.forwardRef(
  ({ className, indeterminate, onCheckedChange, checked, defaultChecked, ...props }, ref) => {
    const inputRef = React14.useRef(null);
    const [isChecked, setIsChecked] = React14.useState(defaultChecked ?? false);
    const checkedValue = checked !== void 0 ? checked : isChecked;
    React14.useImperativeHandle(ref, () => inputRef.current);
    React14.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);
    const handleChange = (e) => {
      const newChecked = e.target.checked;
      if (checked === void 0) {
        setIsChecked(newChecked);
      }
      onCheckedChange == null ? void 0 : onCheckedChange(newChecked);
    };
    return /* @__PURE__ */ React14.createElement("div", { className: "relative inline-flex items-center" }, /* @__PURE__ */ React14.createElement(
      "input",
      {
        type: "checkbox",
        ref: inputRef,
        checked: checkedValue,
        onChange: handleChange,
        className: cn(
          "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-input bg-background ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary hover:border-primary/50",
          className
        ),
        ...props
      }
    ), /* @__PURE__ */ React14.createElement(
      Tick01Icon,
      {
        className: cn(
          "absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none transition-opacity duration-200",
          checkedValue && !indeterminate ? "opacity-100" : "opacity-0"
        ),
        strokeWidth: 3
      }
    ), indeterminate && /* @__PURE__ */ React14.createElement(
      MinusSignIcon,
      {
        className: "absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none",
        strokeWidth: 3
      }
    ));
  }
);
Checkbox.displayName = "Checkbox";
var RadioGroupContext = React14.createContext(null);
var RadioGroup = React14.forwardRef(
  ({ className, value, defaultValue, onValueChange, name = "radio-group", orientation = "vertical", children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React14.useState(defaultValue || "");
    const currentValue = value !== void 0 ? value : internalValue;
    const handleChange = React14.useCallback(
      (newValue) => {
        if (value === void 0) {
          setInternalValue(newValue);
        }
        onValueChange == null ? void 0 : onValueChange(newValue);
      },
      [value, onValueChange]
    );
    return /* @__PURE__ */ React14.createElement(RadioGroupContext.Provider, { value: { name, value: currentValue, onChange: handleChange } }, /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        role: "radiogroup",
        className: cn(
          orientation === "vertical" ? "grid gap-3" : "flex flex-wrap gap-4",
          className
        ),
        ...props
      },
      children
    ));
  }
);
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = React14.forwardRef(
  ({ className, value, id, ...props }, ref) => {
    const context = React14.useContext(RadioGroupContext);
    if (!context) {
      throw new Error("RadioGroupItem must be used within a RadioGroup");
    }
    const isChecked = context.value === value;
    const handleChange = () => {
      context.onChange(value);
    };
    return /* @__PURE__ */ React14.createElement("label", { className: "relative inline-flex items-center cursor-pointer" }, /* @__PURE__ */ React14.createElement(
      "input",
      {
        type: "radio",
        ref,
        id,
        name: context.name,
        value,
        checked: isChecked,
        onChange: handleChange,
        className: cn(
          "peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-input bg-background ring-offset-background transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:border-primary hover:border-primary/50",
          className
        ),
        ...props
      }
    ), /* @__PURE__ */ React14.createElement(
      "div",
      {
        className: cn(
          "absolute h-2.5 w-2.5 left-[5px] top-1/2 -translate-y-1/2 rounded-full bg-primary pointer-events-none transition-all duration-200",
          isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )
      }
    ));
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
var Switch = React14.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: {
      root: "h-5 w-9",
      thumb: "h-4 w-4 data-[state=checked]:translate-x-4"
    },
    default: {
      root: "h-7 w-12",
      thumb: "h-6 w-6 data-[state=checked]:translate-x-5"
    },
    lg: {
      root: "h-8 w-14",
      thumb: "h-7 w-7 data-[state=checked]:translate-x-6"
    }
  };
  return /* @__PURE__ */ React14.createElement(
    SwitchPrimitives.Root,
    {
      className: cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#B3CAFF] data-[state=unchecked]:bg-input",
        sizeClasses[size].root,
        className
      ),
      ...props,
      ref
    },
    /* @__PURE__ */ React14.createElement(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block rounded-full bg-background ring-0 transition-all duration-200 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary",
          sizeClasses[size].thumb
        )
      }
    )
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;
var Slider = React14.forwardRef(
  ({ className, showValue, value, defaultValue = 50, variant = "primary", onValueChange, min = 0, max = 100, ...props }, ref) => {
    const [internalValue, setInternalValue] = React14.useState(Number(defaultValue));
    const currentValue = value !== void 0 ? Number(value) : internalValue;
    const minVal = Number(min);
    const maxVal = Number(max);
    const percentage = (currentValue - minVal) / (maxVal - minVal) * 100;
    const handleChange = (e) => {
      const newValue = Number(e.target.value);
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onValueChange == null ? void 0 : onValueChange(newValue);
    };
    const variantClasses = {
      default: "[&::-webkit-slider-thumb]:bg-foreground",
      primary: "[&::-webkit-slider-thumb]:bg-primary",
      success: "[&::-webkit-slider-thumb]:bg-success"
    };
    const filledColors = {
      default: "hsl(var(--foreground))",
      primary: "hsl(var(--primary))",
      success: "hsl(var(--success))"
    };
    const unfilledColors = {
      default: "hsl(var(--foreground) / 0.2)",
      primary: "hsl(var(--primary) / 0.2)",
      success: "hsl(var(--success) / 0.2)"
    };
    return /* @__PURE__ */ React14.createElement("div", { className: "relative flex items-center gap-4" }, /* @__PURE__ */ React14.createElement("div", { className: "relative flex-1" }, /* @__PURE__ */ React14.createElement(
      "input",
      {
        type: "range",
        ref,
        value: currentValue,
        min,
        max,
        onChange: handleChange,
        style: {
          background: `linear-gradient(to right, ${filledColors[variant]} 0%, ${filledColors[variant]} ${percentage}%, ${unfilledColors[variant]} ${percentage}%, ${unfilledColors[variant]} 100%)`
        },
        className: cn(
          "h-3 w-full cursor-pointer appearance-none rounded-full",
          "[&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:active:scale-95",
          "[&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          variantClasses[variant],
          className
        ),
        ...props
      }
    )), showValue && /* @__PURE__ */ React14.createElement("span", { className: "text-sm font-semibold text-foreground min-w-[3ch] text-right" }, currentValue));
  }
);
Slider.displayName = "Slider";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React14.forwardRef(({ className, children, error, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-12 w-full items-center justify-between rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 transition-all duration-200",
      error && "border-destructive focus:ring-destructive",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React14.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React14.createElement(ArrowDown01Icon, { className: "h-5 w-5 opacity-50" }))
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-2",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React14.createElement(ArrowUp01Icon, { className: "h-5 w-5" })
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-2",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React14.createElement(ArrowDown01Icon, { className: "h-5 w-5" })
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React14.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ React14.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React14.createElement(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props
  },
  /* @__PURE__ */ React14.createElement(SelectScrollUpButton, null),
  /* @__PURE__ */ React14.createElement(
    SelectPrimitive.Viewport,
    {
      className: cn(
        "p-2",
        position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )
    },
    children
  ),
  /* @__PURE__ */ React14.createElement(SelectScrollDownButton, null)
)));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-2 pl-10 pr-3 text-sm font-semibold text-muted-foreground", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React14.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React14.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React14.createElement(Tick01Icon, { className: "h-5 w-5 text-primary" }))),
  /* @__PURE__ */ React14.createElement(SelectPrimitive.ItemText, null, children)
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-2 my-2 h-px bg-border", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Card = React14.forwardRef(({ className, hover, gradient, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-card border border-border",
    outline: "bg-transparent border border-border",
    filled: "bg-secondary border-0"
  };
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "rounded-2xl text-card-foreground transition-all duration-200",
        variantClasses[variant],
        hover && "hover:-translate-y-1 cursor-pointer",
        gradient && "bg-gradient-to-br from-card to-card/80",
        className
      ),
      ...props
    }
  );
});
Card.displayName = "Card";
var CardHeader = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-5", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "h3",
  {
    ref,
    className: cn(
      "text-xl font-semibold leading-tight tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement("div", { ref, className: cn("p-5 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    ref,
    className: cn("flex items-center p-5 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var Separator2 = React14.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, label, ...props }, ref) => {
    if (label) {
      return /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-4 my-4" }, /* @__PURE__ */ React14.createElement(
        SeparatorPrimitive.Root,
        {
          ref,
          decorative,
          orientation: "horizontal",
          className: cn(
            "shrink-0 bg-border h-[1px] flex-1",
            className
          ),
          ...props
        }
      ), /* @__PURE__ */ React14.createElement("span", { className: "text-sm text-muted-foreground font-medium" }, label), /* @__PURE__ */ React14.createElement(
        SeparatorPrimitive.Root,
        {
          decorative,
          orientation: "horizontal",
          className: cn(
            "shrink-0 bg-border h-[1px] flex-1",
            className
          )
        }
      ));
    }
    return /* @__PURE__ */ React14.createElement(
      SeparatorPrimitive.Root,
      {
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        ),
        ...props
      }
    );
  }
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;
var Tabs = TabsPrimitive.Root;
var TabsUnderlineContext = React14.createContext(null);
var TabsList = React14.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = React14.useState({});
  const [activeValue, setActiveValue] = React14.useState();
  const triggersRef = React14.useRef(/* @__PURE__ */ new Map());
  const listRef = React14.useRef(null);
  const updateIndicator = React14.useCallback(() => {
    if (variant !== "underline" || !listRef.current) return;
    const activeButton = Array.from(triggersRef.current.values()).find(
      (btn) => btn.getAttribute("data-state") === "active"
    );
    if (activeButton) {
      const listRect = listRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setIndicatorStyle({
        width: buttonRect.width,
        transform: `translateX(${buttonRect.left - listRect.left}px)`
      });
      setActiveValue(activeButton.getAttribute("data-value") || void 0);
    }
  }, [variant]);
  const registerTrigger = React14.useCallback((value, element) => {
    if (element) {
      triggersRef.current.set(value, element);
    } else {
      triggersRef.current.delete(value);
    }
    updateIndicator();
  }, [updateIndicator]);
  React14.useEffect(() => {
    updateIndicator();
    const observer = new MutationObserver(updateIndicator);
    triggersRef.current.forEach((element) => {
      observer.observe(element, { attributes: true, attributeFilter: ["data-state"] });
    });
    return () => observer.disconnect();
  }, [updateIndicator, props.children]);
  React14.useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);
  const variantClasses = {
    default: "bg-secondary/50 rounded-xl p-1",
    pills: "gap-2",
    underline: "gap-4"
  };
  const setRefs = React14.useCallback((node) => {
    listRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);
  return /* @__PURE__ */ React14.createElement(TabsUnderlineContext.Provider, { value: { registerTrigger, activeValue } }, /* @__PURE__ */ React14.createElement(
    TabsPrimitive.List,
    {
      ref: setRefs,
      className: cn(
        "inline-flex items-center justify-start text-muted-foreground relative",
        variantClasses[variant],
        className
      ),
      ...props
    },
    props.children,
    variant === "underline" && /* @__PURE__ */ React14.createElement(
      "span",
      {
        className: "absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-out",
        style: indicatorStyle
      }
    )
  ));
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React14.forwardRef(({ className, variant = "default", value, ...props }, ref) => {
  const context = React14.useContext(TabsUnderlineContext);
  const triggerRef = React14.useRef(null);
  React14.useEffect(() => {
    if (context && value) {
      context.registerTrigger(value, triggerRef.current);
      return () => context.registerTrigger(value, null);
    }
  }, [context, value]);
  const setRefs = React14.useCallback((node) => {
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
    underline: "pb-3 px-1 data-[state=active]:text-foreground rounded-none"
  };
  return /* @__PURE__ */ React14.createElement(
    TabsPrimitive.Trigger,
    {
      ref: setRefs,
      value,
      "data-value": value,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        className
      ),
      ...props
    }
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-fade-in",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var SidebarContext = React14.createContext(
  void 0
);
function useSidebar() {
  const context = React14.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
var sidebarVariants = cva(
  "flex flex-col bg-card border-border transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "border-r",
        floating: "m-3 rounded-2xl border",
        inset: "bg-secondary/30"
      },
      side: {
        left: "",
        right: "border-l border-r-0"
      }
    },
    defaultVariants: {
      variant: "default",
      side: "left"
    }
  }
);
function SidebarProvider({
  children,
  defaultExpanded = true
}) {
  const [expanded, setExpanded] = React14.useState(defaultExpanded);
  const [isMobile, setIsMobile] = React14.useState(false);
  React14.useEffect(() => {
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
  return /* @__PURE__ */ React14.createElement(SidebarContext.Provider, { value: { expanded, setExpanded, isMobile } }, children);
}
var Sidebar = React14.forwardRef(
  ({ className, variant, side, collapsible = true, children, ...props }, ref) => {
    const { expanded } = useSidebar();
    return /* @__PURE__ */ React14.createElement(
      "aside",
      {
        ref,
        className: cn(
          sidebarVariants({ variant, side }),
          expanded ? "w-64" : "w-16",
          "h-full relative flex-shrink-0",
          className
        ),
        ...props
      },
      children
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarHeader = React14.forwardRef(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "flex items-center gap-3 p-4 border-b border-border",
        !expanded && "justify-center",
        className
      ),
      ...props
    },
    children
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarContent = React14.forwardRef(({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn("flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 scrollbar-thin", className),
      ...props
    },
    children
  );
});
SidebarContent.displayName = "SidebarContent";
var SidebarFooter = React14.forwardRef(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "p-3 border-t border-border mt-auto",
        !expanded && "flex justify-center",
        className
      ),
      ...props
    },
    children
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarGroup = React14.forwardRef(
  ({ className, label, children, ...props }, ref) => {
    const { expanded } = useSidebar();
    return /* @__PURE__ */ React14.createElement("div", { ref, className: cn("mb-4", className), ...props }, label && expanded && /* @__PURE__ */ React14.createElement("div", { className: "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" }, label), !expanded && label && /* @__PURE__ */ React14.createElement("div", { className: "h-px bg-border mx-3 my-2" }), /* @__PURE__ */ React14.createElement("div", { className: "space-y-1" }, children));
  }
);
SidebarGroup.displayName = "SidebarGroup";
var SidebarItem = React14.forwardRef(
  ({ className, icon, active, badge, children, ...props }, ref) => {
    const { expanded } = useSidebar();
    return /* @__PURE__ */ React14.createElement(
      "button",
      {
        ref,
        className: cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
          "hover:bg-accent text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "active:scale-[0.98]",
          active && "bg-primary/10 text-primary font-medium",
          !expanded && "justify-center px-0",
          className
        ),
        ...props
      },
      icon && /* @__PURE__ */ React14.createElement("span", { className: cn("flex-shrink-0", "[&_svg]:w-5 [&_svg]:h-5") }, icon),
      expanded && /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement("span", { className: "flex-1 text-left text-sm truncate" }, children), badge && /* @__PURE__ */ React14.createElement("span", { className: "flex-shrink-0" }, badge))
    );
  }
);
SidebarItem.displayName = "SidebarItem";
var SidebarTrigger = React14.forwardRef(({ className, ...props }, ref) => {
  const { expanded, setExpanded } = useSidebar();
  return /* @__PURE__ */ React14.createElement(
    "button",
    {
      ref,
      onClick: () => setExpanded(!expanded),
      className: cn(
        "absolute -right-3 top-6 z-10",
        "flex items-center justify-center",
        "h-6 w-6 rounded-full",
        "bg-background border border-border",
        "hover:bg-accent transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      ),
      ...props
    },
    expanded ? /* @__PURE__ */ React14.createElement(ArrowLeft01Icon, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ React14.createElement(ArrowRight01Icon, { className: "h-3.5 w-3.5" })
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarSeparator = React14.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn("h-px bg-border mx-3 my-3", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarInset = React14.forwardRef(({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn("flex-1 overflow-auto", className),
      ...props
    },
    children
  );
});
SidebarInset.displayName = "SidebarInset";
var badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "border text-foreground",
        success: "border-transparent bg-success text-success-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground",
        muted: "border-transparent bg-muted text-muted-foreground"
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ React14.createElement("div", { className: cn(badgeVariants({ variant, size }), className), ...props });
}
function RedDot({ className, pulse, count: count2, ...props }) {
  if (count2 !== void 0 && count2 > 0) {
    return /* @__PURE__ */ React14.createElement(
      "span",
      {
        className: cn(
          "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold px-1",
          pulse && "animate-pulse",
          className
        ),
        ...props
      },
      count2 > 99 ? "99+" : count2
    );
  }
  return /* @__PURE__ */ React14.createElement(
    "span",
    {
      className: cn(
        "absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive",
        pulse && "animate-pulse",
        className
      ),
      ...props
    }
  );
}
var Avatar = React14.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizeClasses = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-8 w-8 text-xs",
    default: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
    "2xl": "h-20 w-20 text-xl"
  };
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClasses[size],
        className
      ),
      ...props
    }
  );
});
Avatar.displayName = "Avatar";
var AvatarImage = React14.forwardRef(({ className, alt, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "img",
  {
    ref,
    alt,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-primary font-semibold",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";
var AvatarGroup = React14.forwardRef(
  ({ className, max = 4, children, ...props }, ref) => {
    const childArray = React14.Children.toArray(children);
    const excess = childArray.length - max;
    const visibleChildren = max ? childArray.slice(0, max) : childArray;
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        className: cn("flex -space-x-3", className),
        ...props
      },
      visibleChildren.map((child, index) => /* @__PURE__ */ React14.createElement("div", { key: index, className: "relative ring-2 ring-background rounded-full" }, child)),
      excess > 0 && /* @__PURE__ */ React14.createElement(Avatar, { className: "ring-2 ring-background" }, /* @__PURE__ */ React14.createElement(AvatarFallback, { className: "bg-muted text-muted-foreground text-xs" }, "+", excess))
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";
var Table = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement("div", { className: "relative w-full overflow-auto" }, /* @__PURE__ */ React14.createElement(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
)));
Table.displayName = "Table";
var TableHeader = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var alertVariants = cva(
  "relative w-full rounded-xl border-0 p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-2px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground [&>svg]:text-foreground",
        destructive: "bg-destructive/10 text-destructive [&>svg]:text-destructive",
        success: "bg-success/10 text-success [&>svg]:text-success",
        warning: "bg-warning/10 text-warning [&>svg]:text-warning",
        info: "bg-info/10 text-info [&>svg]:text-info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React14.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "h5",
  {
    ref,
    className: cn("mb-1 font-semibold leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed opacity-90", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var Progress = React14.forwardRef(
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
    const percentage = Math.min(Math.max(value / max * 100, 0), 100);
    const variantClasses = {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
      info: "bg-info"
    };
    const sizeClasses = {
      sm: "h-1.5",
      default: "h-2.5",
      lg: "h-4"
    };
    return /* @__PURE__ */ React14.createElement("div", { className: "relative" }, showLabel && /* @__PURE__ */ React14.createElement("div", { className: "flex justify-between mb-2" }, /* @__PURE__ */ React14.createElement("span", { className: "text-sm font-medium text-foreground" }, "Progress"), /* @__PURE__ */ React14.createElement("span", { className: "text-sm font-medium text-muted-foreground" }, Math.round(percentage), "%")), /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-valuenow": value,
        className: cn(
          "relative w-full overflow-hidden rounded-full bg-secondary",
          sizeClasses[size],
          className
        ),
        ...props
      },
      /* @__PURE__ */ React14.createElement(
        "div",
        {
          className: cn(
            "h-full rounded-full",
            variantClasses[variant],
            animated && "transition-all duration-500 ease-out"
          ),
          style: { width: `${percentage}%` }
        }
      )
    ));
  }
);
Progress.displayName = "Progress";
var Loading = React14.forwardRef(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-[3px]",
      default: "h-8 w-8 border-[3px]",
      lg: "h-12 w-12 border-4"
    };
    const variantClasses = {
      default: "border-transparent border-t-foreground border-r-foreground",
      primary: "border-transparent border-t-primary border-r-primary",
      secondary: "border-transparent border-t-secondary-foreground border-r-secondary-foreground"
    };
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        className: cn(
          "rounded-full animate-spin",
          sizeClasses[size],
          variantClasses[variant],
          className
        ),
        ...props
      }
    );
  }
);
Loading.displayName = "Loading";

// src/components/ui/skeleton.tsx
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "rounded-xl bg-secondary animate-pulse",
        className
      ),
      ...props
    }
  );
}
function SkeletonText({
  className,
  lines = 1,
  ...props
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-2", ...props }, Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      className: cn(
        "h-4 rounded-lg bg-secondary animate-pulse",
        i === lines - 1 ? "w-3/4" : "w-full",
        className
      )
    }
  )));
}
function SkeletonAvatar({
  className,
  size = "default",
  ...props
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12"
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "rounded-full bg-secondary animate-pulse",
        sizeClasses[size],
        className
      ),
      ...props
    }
  );
}
function SkeletonCard({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "rounded-2xl bg-secondary p-5 space-y-4 animate-pulse",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React.createElement("div", { className: "h-4 w-1/2 rounded-lg bg-muted" }),
    /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "h-3 w-full rounded-lg bg-muted" }), /* @__PURE__ */ React.createElement("div", { className: "h-3 w-3/4 rounded-lg bg-muted" }))
  );
}
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border border-border p-5 pr-10 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-toast-slide-in data-[state=closed]:animate-fade-out",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border border-border",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React14.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-10 shrink-0 items-center justify-center rounded-xl border-0 bg-transparent px-4 text-sm font-medium transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:hover:bg-white/20 group-[.success]:hover:bg-white/20",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-3 top-3 rounded-lg p-1.5 opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React14.createElement(Cancel01Icon, { size: 18 })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-base font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
var TOAST_LIMIT = 5;
var TOAST_REMOVE_DELAY = 5e3;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React14.useState(memoryState);
  React14.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toaster.tsx
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ React.createElement(ToastProvider, null, toasts.map(function({ id, title, description, action, ...props }) {
    return /* @__PURE__ */ React.createElement(Toast, { key: id, ...props }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-1" }, title && /* @__PURE__ */ React.createElement(ToastTitle, null, title), description && /* @__PURE__ */ React.createElement(ToastDescription, null, description)), action, /* @__PURE__ */ React.createElement(ToastClose, null));
  }), /* @__PURE__ */ React.createElement(ToastViewport, null));
}
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React14.createElement(DialogPortal, null, /* @__PURE__ */ React14.createElement(DialogOverlay, { className: "flex items-center justify-center" }), /* @__PURE__ */ React14.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center" }, /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "z-50 grid w-full max-w-lg gap-5 border border-border bg-background p-6 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out rounded-2xl mx-4 max-h-[90vh] overflow-y-auto",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React14.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-xl p-2 opacity-70 transition-all hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none" }, /* @__PURE__ */ React14.createElement(Cancel01Icon, { size: 20 }), /* @__PURE__ */ React14.createElement("span", { className: "sr-only" }, "Close"))
))));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-5 bg-background border-border transition-all ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-400",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b rounded-b-2xl data-[state=closed]:animate-slide-in-from-top data-[state=open]:animate-slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t rounded-t-3xl data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-slide-up",
        left: "inset-y-0 left-0 h-full w-3/4 border-r rounded-r-2xl data-[state=closed]:slide-out-to-left data-[state=open]:animate-slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l rounded-l-2xl data-[state=closed]:slide-out-to-right data-[state=open]:animate-slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "bottom"
    }
  }
);
var SheetContent = React14.forwardRef(({ side = "bottom", className, children, showHandle = true, ...props }, ref) => /* @__PURE__ */ React14.createElement(SheetPortal, null, /* @__PURE__ */ React14.createElement(SheetOverlay, null), /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(sheetVariants({ side }), "p-6", className),
    ...props
  },
  side === "bottom" && showHandle && /* @__PURE__ */ React14.createElement("div", { className: "absolute top-3 left-1/2 -translate-x-1/2" }, /* @__PURE__ */ React14.createElement("div", { className: "w-12 h-1.5 rounded-full bg-muted-foreground/30" })),
  side !== "bottom" && /* @__PURE__ */ React14.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-xl p-2 opacity-70 transition-all hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none" }, /* @__PURE__ */ React14.createElement(Cancel01Icon, { size: 20 }), /* @__PURE__ */ React14.createElement("span", { className: "sr-only" }, "Close")),
  /* @__PURE__ */ React14.createElement("div", { className: side === "bottom" ? "pt-4" : "" }, children)
)));
SheetContent.displayName = DialogPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-xl font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
var SheetDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React14.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-lg px-3 py-3 text-base outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-10",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React14.createElement(ArrowRight01Icon, { className: "ml-auto h-5 w-5" })
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-popover p-2 text-popover-foreground data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React14.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ React14.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[12rem] overflow-hidden rounded-xl border border-border bg-popover p-2 text-popover-foreground data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
      className
    ),
    ...props
  }
)));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React14.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-3 rounded-lg px-3 py-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
      inset && "pl-10",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React14.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React14.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React14.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React14.createElement(Tick01Icon, { className: "h-5 w-5 text-primary" }))),
  children
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React14.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React14.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React14.createElement(CircleIcon, { className: "h-3 w-3 fill-primary text-primary" }))),
  children
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React14.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-3 py-2 text-sm font-semibold text-muted-foreground",
      inset && "pl-10",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-2 my-2 h-px bg-border", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React14.createElement(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React14.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-lg border border-border bg-foreground px-3 py-2 text-sm text-background animate-scale-in data-[state=closed]:animate-scale-out",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var PopoverContext = React14.createContext(null);
var usePopover = () => {
  const context = React14.useContext(PopoverContext);
  if (!context) {
    throw new Error("Popover components must be used within a Popover");
  }
  return context;
};
var Popover = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React14.useState(defaultOpen);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = React14.useCallback(
    (newOpen) => {
      if (controlledOpen === void 0) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange == null ? void 0 : onOpenChange(newOpen);
    },
    [controlledOpen, onOpenChange]
  );
  return /* @__PURE__ */ React14.createElement(PopoverContext.Provider, { value: { open, setOpen } }, /* @__PURE__ */ React14.createElement("div", { className: "relative inline-block" }, children));
};
var PopoverTrigger = React14.forwardRef(({ className, onClick, children, ...props }, ref) => {
  const { open, setOpen } = usePopover();
  return /* @__PURE__ */ React14.createElement(
    "button",
    {
      ref,
      type: "button",
      "aria-expanded": open,
      onClick: (e) => {
        setOpen(!open);
        onClick == null ? void 0 : onClick(e);
      },
      className,
      ...props
    },
    children
  );
});
PopoverTrigger.displayName = "PopoverTrigger";
var PopoverContent = React14.forwardRef(({ className, align = "center", side = "bottom", sideOffset = 8, ...props }, ref) => {
  const { open } = usePopover();
  if (!open) return null;
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "absolute z-50 min-w-[12rem] overflow-hidden rounded-xl border border-border bg-popover p-4 text-popover-foreground",
        "animate-scale-in",
        side === "bottom" && "top-full mt-2",
        side === "top" && "bottom-full mb-2",
        align === "start" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "end" && "right-0",
        className
      ),
      style: { marginTop: side === "bottom" ? sideOffset : void 0, marginBottom: side === "top" ? sideOffset : void 0 },
      ...props
    }
  );
});
PopoverContent.displayName = "PopoverContent";
var AccordionContext = React14.createContext(null);
var Accordion = React14.forwardRef(
  ({ className, type = "single", defaultValue, collapsible = true, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React14.useState(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      }
      return [];
    });
    const toggle = React14.useCallback(
      (value) => {
        setOpenItems((prev) => {
          if (type === "single") {
            if (prev.includes(value)) {
              return collapsible ? [] : prev;
            }
            return [value];
          } else {
            if (prev.includes(value)) {
              return prev.filter((item) => item !== value);
            }
            return [...prev, value];
          }
        });
      },
      [type, collapsible]
    );
    return /* @__PURE__ */ React14.createElement(AccordionContext.Provider, { value: { openItems, toggle, type } }, /* @__PURE__ */ React14.createElement("div", { ref, className: cn("space-y-2", className), ...props }, children));
  }
);
Accordion.displayName = "Accordion";
var AccordionItem = React14.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        "data-value": value,
        className: cn("rounded-xl border border-border overflow-hidden", className),
        ...props
      },
      React14.Children.map(children, (child) => {
        if (React14.isValidElement(child)) {
          return React14.cloneElement(child, { value });
        }
        return child;
      })
    );
  }
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React14.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const context = React14.useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");
    const isOpen = value ? context.openItems.includes(value) : false;
    return /* @__PURE__ */ React14.createElement(
      "button",
      {
        ref,
        type: "button",
        onClick: () => value && context.toggle(value),
        "aria-expanded": isOpen,
        className: cn(
          "flex flex-1 w-full items-center justify-between p-4 font-medium transition-all hover:bg-secondary/50 [&[data-state=open]>svg]:rotate-180",
          className
        ),
        "data-state": isOpen ? "open" : "closed",
        ...props
      },
      children,
      /* @__PURE__ */ React14.createElement(ArrowDown01Icon, { className: "h-5 w-5 shrink-0 transition-transform duration-200 text-muted-foreground" })
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React14.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const context = React14.useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");
    const isOpen = value ? context.openItems.includes(value) : false;
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        className: cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up h-0",
          className
        ),
        "data-state": isOpen ? "open" : "closed",
        ...props
      },
      /* @__PURE__ */ React14.createElement("div", { className: "px-4 pb-4 pt-0 text-muted-foreground" }, children)
    );
  }
);
AccordionContent.displayName = "AccordionContent";
var CollapsibleContext = React14.createContext(null);
var Collapsible = React14.forwardRef(
  ({ className, defaultOpen = false, open: controlledOpen, onOpenChange, children, ...props }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React14.useState(defaultOpen);
    const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
    const setOpen = React14.useCallback(
      (newOpen) => {
        if (controlledOpen === void 0) {
          setUncontrolledOpen(newOpen);
        }
        onOpenChange == null ? void 0 : onOpenChange(newOpen);
      },
      [controlledOpen, onOpenChange]
    );
    return /* @__PURE__ */ React14.createElement(CollapsibleContext.Provider, { value: { open, setOpen } }, /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        "data-state": open ? "open" : "closed",
        className: cn(className),
        ...props
      },
      children
    ));
  }
);
Collapsible.displayName = "Collapsible";
var CollapsibleTrigger = React14.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const context = React14.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");
  return /* @__PURE__ */ React14.createElement(
    "button",
    {
      ref,
      type: "button",
      onClick: (e) => {
        context.setOpen(!context.open);
        onClick == null ? void 0 : onClick(e);
      },
      "aria-expanded": context.open,
      className: cn(className),
      ...props
    },
    children
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";
var CollapsibleContent = React14.forwardRef(({ className, children, ...props }, ref) => {
  const context = React14.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleContent must be used within Collapsible");
  if (!context.open) return null;
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "animate-in fade-in-0 zoom-in-95",
        className
      ),
      ...props
    },
    children
  );
});
CollapsibleContent.displayName = "CollapsibleContent";
var ScrollArea = React14.forwardRef(({ className, children, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "relative",
        orientation === "vertical" && "overflow-y-auto overflow-x-hidden",
        orientation === "horizontal" && "overflow-x-auto overflow-y-hidden",
        orientation === "both" && "overflow-auto",
        "scrollbar-thin",
        className
      ),
      ...props
    },
    children
  );
});
ScrollArea.displayName = "ScrollArea";
var ScrollBar = React14.forwardRef(({ className, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      ref,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2 flex-col border-t border-t-transparent p-[1px]",
        className
      ),
      ...props
    }
  );
});
ScrollBar.displayName = "ScrollBar";
var AspectRatio = React14.forwardRef(
  ({ className, ratio = 1, style, children, ...props }, ref) => {
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        ref,
        className: cn("relative w-full", className),
        style: {
          paddingBottom: `${1 / ratio * 100}%`,
          ...style
        },
        ...props
      },
      /* @__PURE__ */ React14.createElement("div", { className: "absolute inset-0" }, children)
    );
  }
);
AspectRatio.displayName = "AspectRatio";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React14.useState(value);
  React14.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useDebouncedCallback(callback, delay) {
  const callbackRef = React14.useRef(callback);
  const timeoutRef = React14.useRef();
  React14.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  React14.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return React14.useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
}
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React14.useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  const setValue = React14.useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );
  return [storedValue, setValue];
}
function useMediaQuery(query) {
  const [matches, setMatches] = React14.useState(false);
  React14.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event) => {
      setMatches(event.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 768px)");
}
function useIsTablet() {
  return useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
}
function useIsDesktop() {
  return useMediaQuery("(min-width: 1025px)");
}
var ThemeProviderContext = React14.createContext(
  void 0
);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "luckyui-theme",
  attribute = "class",
  enableSystem = true,
  ...props
}) {
  const [theme, setTheme] = React14.useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React14.useState("light");
  React14.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setTheme(stored);
    }
  }, [storageKey]);
  React14.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
      return;
    }
    const resolvedValue = theme === "system" ? "light" : theme;
    root.classList.add(resolvedValue);
    setResolvedTheme(resolvedValue);
  }, [theme, enableSystem]);
  React14.useEffect(() => {
    if (theme !== "system" || !enableSystem) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      setResolvedTheme(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, enableSystem]);
  const value = React14.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (newTheme) => {
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
      }
    }),
    [theme, resolvedTheme, storageKey]
  );
  return /* @__PURE__ */ React14.createElement(ThemeProviderContext.Provider, { ...props, value }, children);
}
function useTheme() {
  const context = React14.useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, IconButton, Input, Label, Loading, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, RedDot, ScrollArea, ScrollBar, SearchBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator2 as Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarItem, SidebarProvider, SidebarSeparator, SidebarTrigger, Skeleton, SkeletonAvatar, SkeletonCard, SkeletonText, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, TextButton, Textarea, ThemeProvider, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, capitalize, cn, debounce, formatCurrency, formatDate, generateId, isClient, isServer, sleep, throttle, toCamelCase, toKebabCase, toast, truncate, useDebounce, useDebouncedCallback, useIsDesktop, useIsMobile, useIsTablet, useLocalStorage, useMediaQuery, useSidebar, useTheme, useToast };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map