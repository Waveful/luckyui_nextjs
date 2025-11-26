'use strict';

var React10 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var hugeiconsReact = require('hugeicons-react');
var LabelPrimitive = require('@radix-ui/react-label');
var SwitchPrimitives = require('@radix-ui/react-switch');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ToastPrimitives = require('@radix-ui/react-toast');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var TooltipPrimitive = require('@radix-ui/react-tooltip');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React10__namespace = /*#__PURE__*/_interopNamespace(React10);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
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
var buttonVariants = classVarianceAuthority.cva(
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
var Button = React10__namespace.forwardRef(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ React10__namespace.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: disabled || loading,
        ...props
      },
      loading ? /* @__PURE__ */ React10__namespace.createElement(React10__namespace.Fragment, null, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Loading01Icon, { className: "animate-spin", size: 20 }), /* @__PURE__ */ React10__namespace.createElement("span", null, "Loading...")) : children
    );
  }
);
Button.displayName = "Button";
var TextButton = React10__namespace.forwardRef(({ className, loading, children, disabled, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
  loading ? /* @__PURE__ */ React10__namespace.createElement(React10__namespace.Fragment, null, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Loading01Icon, { className: "animate-spin", size: 20 }), /* @__PURE__ */ React10__namespace.createElement("span", null, "Loading...")) : children
));
TextButton.displayName = "TextButton";
var IconButton = React10__namespace.forwardRef(({ className, variant = "ghost", size = "default", ...props }, ref) => {
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
  return /* @__PURE__ */ React10__namespace.createElement(
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
var Input = React10__namespace.forwardRef(
  ({ className, type, error, icon, iconPosition = "left", heading, description, ...props }, ref) => {
    const inputElement = /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative" }, icon && iconPosition === "left" && /* @__PURE__ */ React10__namespace.createElement("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon), /* @__PURE__ */ React10__namespace.createElement(
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
    ), icon && iconPosition === "right" && /* @__PURE__ */ React10__namespace.createElement("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon));
    if (heading || description) {
      return /* @__PURE__ */ React10__namespace.createElement("div", { className: "space-y-2" }, heading && /* @__PURE__ */ React10__namespace.createElement("label", { className: "text-sm font-medium leading-none text-foreground" }, heading), inputElement, description && /* @__PURE__ */ React10__namespace.createElement("p", { className: cn(
        "text-sm",
        error ? "text-destructive" : "text-muted-foreground"
      ) }, description));
    }
    return inputElement;
  }
);
Input.displayName = "Input";
var SearchBar = React10__namespace.forwardRef(
  ({ className, onSearch, icon, onChange, ...props }, ref) => {
    const handleChange = (e) => {
      onChange == null ? void 0 : onChange(e);
      onSearch == null ? void 0 : onSearch(e.target.value);
    };
    return /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative" }, /* @__PURE__ */ React10__namespace.createElement("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5" }, icon || /* @__PURE__ */ React10__namespace.createElement(
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
      /* @__PURE__ */ React10__namespace.createElement("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ React10__namespace.createElement("path", { d: "m21 21-4.3-4.3" })
    )), /* @__PURE__ */ React10__namespace.createElement(
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
var Textarea = React10__namespace.forwardRef(
  ({ className, error, heading, description, ...props }, ref) => {
    const textareaElement = /* @__PURE__ */ React10__namespace.createElement(
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
      return /* @__PURE__ */ React10__namespace.createElement("div", { className: "space-y-2" }, heading && /* @__PURE__ */ React10__namespace.createElement("label", { className: "text-sm font-medium leading-none text-foreground" }, heading), textareaElement, description && /* @__PURE__ */ React10__namespace.createElement("p", { className: cn(
        "text-sm",
        error ? "text-destructive" : "text-muted-foreground"
      ) }, description));
    }
    return textareaElement;
  }
);
Textarea.displayName = "Textarea";
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React10__namespace.forwardRef(({ className, children, required, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  children,
  required && /* @__PURE__ */ React10__namespace.createElement("span", { className: "text-destructive ml-1" }, "*")
));
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Checkbox = React10__namespace.forwardRef(
  ({ className, indeterminate, onCheckedChange, checked, defaultChecked, ...props }, ref) => {
    const inputRef = React10__namespace.useRef(null);
    const [isChecked, setIsChecked] = React10__namespace.useState(defaultChecked ?? false);
    const checkedValue = checked !== void 0 ? checked : isChecked;
    React10__namespace.useImperativeHandle(ref, () => inputRef.current);
    React10__namespace.useEffect(() => {
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
    return /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative inline-flex items-center" }, /* @__PURE__ */ React10__namespace.createElement(
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
    ), /* @__PURE__ */ React10__namespace.createElement(
      hugeiconsReact.Tick01Icon,
      {
        className: cn(
          "absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none transition-opacity duration-200",
          checkedValue && !indeterminate ? "opacity-100" : "opacity-0"
        ),
        strokeWidth: 3
      }
    ), indeterminate && /* @__PURE__ */ React10__namespace.createElement(
      hugeiconsReact.MinusSignIcon,
      {
        className: "absolute h-3.5 w-3.5 left-[3px] top-[3px] text-primary-foreground pointer-events-none",
        strokeWidth: 3
      }
    ));
  }
);
Checkbox.displayName = "Checkbox";
var RadioGroupContext = React10__namespace.createContext(null);
var RadioGroup = React10__namespace.forwardRef(
  ({ className, value, defaultValue, onValueChange, name = "radio-group", orientation = "vertical", children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React10__namespace.useState(defaultValue || "");
    const currentValue = value !== void 0 ? value : internalValue;
    const handleChange = React10__namespace.useCallback(
      (newValue) => {
        if (value === void 0) {
          setInternalValue(newValue);
        }
        onValueChange == null ? void 0 : onValueChange(newValue);
      },
      [value, onValueChange]
    );
    return /* @__PURE__ */ React10__namespace.createElement(RadioGroupContext.Provider, { value: { name, value: currentValue, onChange: handleChange } }, /* @__PURE__ */ React10__namespace.createElement(
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
var RadioGroupItem = React10__namespace.forwardRef(
  ({ className, value, id, ...props }, ref) => {
    const context = React10__namespace.useContext(RadioGroupContext);
    if (!context) {
      throw new Error("RadioGroupItem must be used within a RadioGroup");
    }
    const isChecked = context.value === value;
    const handleChange = () => {
      context.onChange(value);
    };
    return /* @__PURE__ */ React10__namespace.createElement("label", { className: "relative inline-flex items-center cursor-pointer" }, /* @__PURE__ */ React10__namespace.createElement(
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
    ), /* @__PURE__ */ React10__namespace.createElement(
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
var Switch = React10__namespace.forwardRef(({ className, size = "default", ...props }, ref) => {
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
  return /* @__PURE__ */ React10__namespace.createElement(
    SwitchPrimitives__namespace.Root,
    {
      className: cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#B3CAFF] data-[state=unchecked]:bg-input",
        sizeClasses[size].root,
        className
      ),
      ...props,
      ref
    },
    /* @__PURE__ */ React10__namespace.createElement(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "pointer-events-none block rounded-full bg-background ring-0 transition-all duration-200 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary",
          sizeClasses[size].thumb
        )
      }
    )
  );
});
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Slider = React10__namespace.forwardRef(
  ({ className, showValue, value, defaultValue = 50, variant = "primary", onValueChange, min = 0, max = 100, ...props }, ref) => {
    const [internalValue, setInternalValue] = React10__namespace.useState(Number(defaultValue));
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
    return /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative flex items-center gap-4" }, /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative flex-1" }, /* @__PURE__ */ React10__namespace.createElement(
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
    )), showValue && /* @__PURE__ */ React10__namespace.createElement("span", { className: "text-sm font-semibold text-foreground min-w-[3ch] text-right" }, currentValue));
  }
);
Slider.displayName = "Slider";
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React10__namespace.forwardRef(({ className, children, error, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.Trigger,
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
  /* @__PURE__ */ React10__namespace.createElement(SelectPrimitive__namespace.Icon, { asChild: true }, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.ArrowDown01Icon, { className: "h-5 w-5 opacity-50" }))
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-2",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.ArrowUp01Icon, { className: "h-5 w-5" })
));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-2",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.ArrowDown01Icon, { className: "h-5 w-5" })
));
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React10__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.Content,
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
  /* @__PURE__ */ React10__namespace.createElement(SelectScrollUpButton, null),
  /* @__PURE__ */ React10__namespace.createElement(
    SelectPrimitive__namespace.Viewport,
    {
      className: cn(
        "p-2",
        position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )
    },
    children
  ),
  /* @__PURE__ */ React10__namespace.createElement(SelectScrollDownButton, null)
)));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.Label,
  {
    ref,
    className: cn("py-2 pl-10 pr-3 text-sm font-semibold text-muted-foreground", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React10__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React10__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Tick01Icon, { className: "h-5 w-5 text-primary" }))),
  /* @__PURE__ */ React10__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children)
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  SelectPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-2 my-2 h-px bg-border", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Card = React10__namespace.forwardRef(({ className, hover, gradient, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-card border border-border",
    outline: "bg-transparent border border-border",
    filled: "bg-secondary border-0"
  };
  return /* @__PURE__ */ React10__namespace.createElement(
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
var CardHeader = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-5", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
var CardDescription = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement("div", { ref, className: cn("p-5 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "div",
  {
    ref,
    className: cn("flex items-center p-5 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var Separator2 = React10__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, label, ...props }, ref) => {
    if (label) {
      return /* @__PURE__ */ React10__namespace.createElement("div", { className: "flex items-center gap-4 my-4" }, /* @__PURE__ */ React10__namespace.createElement(
        SeparatorPrimitive__namespace.Root,
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
      ), /* @__PURE__ */ React10__namespace.createElement("span", { className: "text-sm text-muted-foreground font-medium" }, label), /* @__PURE__ */ React10__namespace.createElement(
        SeparatorPrimitive__namespace.Root,
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
    return /* @__PURE__ */ React10__namespace.createElement(
      SeparatorPrimitive__namespace.Root,
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
Separator2.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Tabs = TabsPrimitive__namespace.Root;
var TabsUnderlineContext = React10__namespace.createContext(null);
var TabsList = React10__namespace.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = React10__namespace.useState({});
  const [activeValue, setActiveValue] = React10__namespace.useState();
  const triggersRef = React10__namespace.useRef(/* @__PURE__ */ new Map());
  const listRef = React10__namespace.useRef(null);
  const updateIndicator = React10__namespace.useCallback(() => {
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
  const registerTrigger = React10__namespace.useCallback((value, element) => {
    if (element) {
      triggersRef.current.set(value, element);
    } else {
      triggersRef.current.delete(value);
    }
    updateIndicator();
  }, [updateIndicator]);
  React10__namespace.useEffect(() => {
    updateIndicator();
    const observer = new MutationObserver(updateIndicator);
    triggersRef.current.forEach((element) => {
      observer.observe(element, { attributes: true, attributeFilter: ["data-state"] });
    });
    return () => observer.disconnect();
  }, [updateIndicator, props.children]);
  React10__namespace.useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);
  const variantClasses = {
    default: "bg-secondary/50 rounded-xl p-1",
    pills: "gap-2",
    underline: "gap-4"
  };
  const setRefs = React10__namespace.useCallback((node) => {
    listRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);
  return /* @__PURE__ */ React10__namespace.createElement(TabsUnderlineContext.Provider, { value: { registerTrigger, activeValue } }, /* @__PURE__ */ React10__namespace.createElement(
    TabsPrimitive__namespace.List,
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
    variant === "underline" && /* @__PURE__ */ React10__namespace.createElement(
      "span",
      {
        className: "absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-out",
        style: indicatorStyle
      }
    )
  ));
});
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React10__namespace.forwardRef(({ className, variant = "default", value, ...props }, ref) => {
  const context = React10__namespace.useContext(TabsUnderlineContext);
  const triggerRef = React10__namespace.useRef(null);
  React10__namespace.useEffect(() => {
    if (context && value) {
      context.registerTrigger(value, triggerRef.current);
      return () => context.registerTrigger(value, null);
    }
  }, [context, value]);
  const setRefs = React10__namespace.useCallback((node) => {
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
  return /* @__PURE__ */ React10__namespace.createElement(
    TabsPrimitive__namespace.Trigger,
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
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-fade-in",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var badgeVariants = classVarianceAuthority.cva(
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
  return /* @__PURE__ */ React10__namespace.createElement("div", { className: cn(badgeVariants({ variant, size }), className), ...props });
}
function RedDot({ className, pulse, count: count2, ...props }) {
  if (count2 !== void 0 && count2 > 0) {
    return /* @__PURE__ */ React10__namespace.createElement(
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
  return /* @__PURE__ */ React10__namespace.createElement(
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
var Avatar = React10__namespace.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizeClasses = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-8 w-8 text-xs",
    default: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
    "2xl": "h-20 w-20 text-xl"
  };
  return /* @__PURE__ */ React10__namespace.createElement(
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
var AvatarImage = React10__namespace.forwardRef(({ className, alt, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "img",
  {
    ref,
    alt,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
var AvatarGroup = React10__namespace.forwardRef(
  ({ className, max = 4, children, ...props }, ref) => {
    const childArray = React10__namespace.Children.toArray(children);
    const excess = childArray.length - max;
    const visibleChildren = max ? childArray.slice(0, max) : childArray;
    return /* @__PURE__ */ React10__namespace.createElement(
      "div",
      {
        ref,
        className: cn("flex -space-x-3", className),
        ...props
      },
      visibleChildren.map((child, index) => /* @__PURE__ */ React10__namespace.createElement("div", { key: index, className: "relative ring-2 ring-background rounded-full" }, child)),
      excess > 0 && /* @__PURE__ */ React10__namespace.createElement(Avatar, { className: "ring-2 ring-background" }, /* @__PURE__ */ React10__namespace.createElement(AvatarFallback, { className: "bg-muted text-muted-foreground text-xs" }, "+", excess))
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";
var Table = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative w-full overflow-auto" }, /* @__PURE__ */ React10__namespace.createElement(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
)));
Table.displayName = "Table";
var TableHeader = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
var TableRow = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
var TableHead = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
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
var TableCell = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var alertVariants = classVarianceAuthority.cva(
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
var Alert = React10__namespace.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "h5",
  {
    ref,
    className: cn("mb-1 font-semibold leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed opacity-90", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var Progress = React10__namespace.forwardRef(
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
    return /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative" }, showLabel && /* @__PURE__ */ React10__namespace.createElement("div", { className: "flex justify-between mb-2" }, /* @__PURE__ */ React10__namespace.createElement("span", { className: "text-sm font-medium text-foreground" }, "Progress"), /* @__PURE__ */ React10__namespace.createElement("span", { className: "text-sm font-medium text-muted-foreground" }, Math.round(percentage), "%")), /* @__PURE__ */ React10__namespace.createElement(
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
      /* @__PURE__ */ React10__namespace.createElement(
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
var Loading = React10__namespace.forwardRef(
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
    return /* @__PURE__ */ React10__namespace.createElement(
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
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  ToastPrimitives__namespace.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
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
var Toast = React10__namespace.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React10__namespace.createElement(
    ToastPrimitives__namespace.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  ToastPrimitives__namespace.Action,
  {
    ref,
    className: cn(
      "inline-flex h-10 shrink-0 items-center justify-center rounded-xl border-0 bg-transparent px-4 text-sm font-medium transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:hover:bg-white/20 group-[.success]:hover:bg-white/20",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  ToastPrimitives__namespace.Close,
  {
    ref,
    className: cn(
      "absolute right-3 top-3 rounded-lg p-1.5 opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Cancel01Icon, { size: 18 })
));
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  ToastPrimitives__namespace.Title,
  {
    ref,
    className: cn("text-base font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  ToastPrimitives__namespace.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
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
  const [state, setState] = React10__namespace.useState(memoryState);
  React10__namespace.useEffect(() => {
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
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React10__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(DialogPortal, null, /* @__PURE__ */ React10__namespace.createElement(DialogOverlay, { className: "flex items-center justify-center" }), /* @__PURE__ */ React10__namespace.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center" }, /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "z-50 grid w-full max-w-lg gap-5 border border-border bg-background p-6 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out rounded-2xl mx-4 max-h-[90vh] overflow-y-auto",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React10__namespace.createElement(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-xl p-2 opacity-70 transition-all hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none" }, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Cancel01Icon, { size: 20 }), /* @__PURE__ */ React10__namespace.createElement("span", { className: "sr-only" }, "Close"))
))));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React10__namespace.createElement(
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
}) => /* @__PURE__ */ React10__namespace.createElement(
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
var DialogTitle = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
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
var SheetContent = React10__namespace.forwardRef(({ side = "bottom", className, children, showHandle = true, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(SheetPortal, null, /* @__PURE__ */ React10__namespace.createElement(SheetOverlay, null), /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Content,
  {
    ref,
    className: cn(sheetVariants({ side }), "p-6", className),
    ...props
  },
  side === "bottom" && showHandle && /* @__PURE__ */ React10__namespace.createElement("div", { className: "absolute top-3 left-1/2 -translate-x-1/2" }, /* @__PURE__ */ React10__namespace.createElement("div", { className: "w-12 h-1.5 rounded-full bg-muted-foreground/30" })),
  side !== "bottom" && /* @__PURE__ */ React10__namespace.createElement(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-xl p-2 opacity-70 transition-all hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none" }, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Cancel01Icon, { size: 20 }), /* @__PURE__ */ React10__namespace.createElement("span", { className: "sr-only" }, "Close")),
  /* @__PURE__ */ React10__namespace.createElement("div", { className: side === "bottom" ? "pt-4" : "" }, children)
)));
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React10__namespace.createElement(
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
}) => /* @__PURE__ */ React10__namespace.createElement(
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
var SheetTitle = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-xl font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var SheetDescription = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React10__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.SubTrigger,
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
  /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.ArrowRight01Icon, { className: "ml-auto h-5 w-5" })
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-popover p-2 text-popover-foreground data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React10__namespace.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(DropdownMenuPrimitive__namespace.Portal, null, /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.Content,
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
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React10__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.Item,
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
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React10__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React10__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.Tick01Icon, { className: "h-5 w-5 text-primary" }))),
  children
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React10__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-3 pl-10 pr-3 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React10__namespace.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" }, /* @__PURE__ */ React10__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.CircleIcon, { className: "h-3 w-3 fill-primary text-primary" }))),
  children
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React10__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.Label,
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React10__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-2 my-2 h-px bg-border", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React10__namespace.createElement(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React10__namespace.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ React10__namespace.createElement(
  TooltipPrimitive__namespace.Content,
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
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var PopoverContext = React10__namespace.createContext(null);
var usePopover = () => {
  const context = React10__namespace.useContext(PopoverContext);
  if (!context) {
    throw new Error("Popover components must be used within a Popover");
  }
  return context;
};
var Popover = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React10__namespace.useState(defaultOpen);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = React10__namespace.useCallback(
    (newOpen) => {
      if (controlledOpen === void 0) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange == null ? void 0 : onOpenChange(newOpen);
    },
    [controlledOpen, onOpenChange]
  );
  return /* @__PURE__ */ React10__namespace.createElement(PopoverContext.Provider, { value: { open, setOpen } }, /* @__PURE__ */ React10__namespace.createElement("div", { className: "relative inline-block" }, children));
};
var PopoverTrigger = React10__namespace.forwardRef(({ className, onClick, children, ...props }, ref) => {
  const { open, setOpen } = usePopover();
  return /* @__PURE__ */ React10__namespace.createElement(
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
var PopoverContent = React10__namespace.forwardRef(({ className, align = "center", side = "bottom", sideOffset = 8, ...props }, ref) => {
  const { open } = usePopover();
  if (!open) return null;
  return /* @__PURE__ */ React10__namespace.createElement(
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
var AccordionContext = React10__namespace.createContext(null);
var Accordion = React10__namespace.forwardRef(
  ({ className, type = "single", defaultValue, collapsible = true, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React10__namespace.useState(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      }
      return [];
    });
    const toggle = React10__namespace.useCallback(
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
    return /* @__PURE__ */ React10__namespace.createElement(AccordionContext.Provider, { value: { openItems, toggle, type } }, /* @__PURE__ */ React10__namespace.createElement("div", { ref, className: cn("space-y-2", className), ...props }, children));
  }
);
Accordion.displayName = "Accordion";
var AccordionItem = React10__namespace.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return /* @__PURE__ */ React10__namespace.createElement(
      "div",
      {
        ref,
        "data-value": value,
        className: cn("rounded-xl border border-border overflow-hidden", className),
        ...props
      },
      React10__namespace.Children.map(children, (child) => {
        if (React10__namespace.isValidElement(child)) {
          return React10__namespace.cloneElement(child, { value });
        }
        return child;
      })
    );
  }
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React10__namespace.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const context = React10__namespace.useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");
    const isOpen = value ? context.openItems.includes(value) : false;
    return /* @__PURE__ */ React10__namespace.createElement(
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
      /* @__PURE__ */ React10__namespace.createElement(hugeiconsReact.ArrowDown01Icon, { className: "h-5 w-5 shrink-0 transition-transform duration-200 text-muted-foreground" })
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React10__namespace.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const context = React10__namespace.useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");
    const isOpen = value ? context.openItems.includes(value) : false;
    return /* @__PURE__ */ React10__namespace.createElement(
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
      /* @__PURE__ */ React10__namespace.createElement("div", { className: "px-4 pb-4 pt-0 text-muted-foreground" }, children)
    );
  }
);
AccordionContent.displayName = "AccordionContent";
var CollapsibleContext = React10__namespace.createContext(null);
var Collapsible = React10__namespace.forwardRef(
  ({ className, defaultOpen = false, open: controlledOpen, onOpenChange, children, ...props }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React10__namespace.useState(defaultOpen);
    const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
    const setOpen = React10__namespace.useCallback(
      (newOpen) => {
        if (controlledOpen === void 0) {
          setUncontrolledOpen(newOpen);
        }
        onOpenChange == null ? void 0 : onOpenChange(newOpen);
      },
      [controlledOpen, onOpenChange]
    );
    return /* @__PURE__ */ React10__namespace.createElement(CollapsibleContext.Provider, { value: { open, setOpen } }, /* @__PURE__ */ React10__namespace.createElement(
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
var CollapsibleTrigger = React10__namespace.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const context = React10__namespace.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");
  return /* @__PURE__ */ React10__namespace.createElement(
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
var CollapsibleContent = React10__namespace.forwardRef(({ className, children, ...props }, ref) => {
  const context = React10__namespace.useContext(CollapsibleContext);
  if (!context) throw new Error("CollapsibleContent must be used within Collapsible");
  if (!context.open) return null;
  return /* @__PURE__ */ React10__namespace.createElement(
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
var ScrollArea = React10__namespace.forwardRef(({ className, children, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ React10__namespace.createElement(
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
var ScrollBar = React10__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ React10__namespace.createElement(
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
var AspectRatio = React10__namespace.forwardRef(
  ({ className, ratio = 1, style, children, ...props }, ref) => {
    return /* @__PURE__ */ React10__namespace.createElement(
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
      /* @__PURE__ */ React10__namespace.createElement("div", { className: "absolute inset-0" }, children)
    );
  }
);
AspectRatio.displayName = "AspectRatio";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React10__namespace.useState(value);
  React10__namespace.useEffect(() => {
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
  const callbackRef = React10__namespace.useRef(callback);
  const timeoutRef = React10__namespace.useRef();
  React10__namespace.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  React10__namespace.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return React10__namespace.useCallback(
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
  const [storedValue, setStoredValue] = React10__namespace.useState(() => {
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
  const setValue = React10__namespace.useCallback(
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
  const [matches, setMatches] = React10__namespace.useState(false);
  React10__namespace.useEffect(() => {
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
var ThemeProviderContext = React10__namespace.createContext(
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
  const [theme, setTheme] = React10__namespace.useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React10__namespace.useState("light");
  React10__namespace.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setTheme(stored);
    }
  }, [storageKey]);
  React10__namespace.useEffect(() => {
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
  React10__namespace.useEffect(() => {
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
  const value = React10__namespace.useMemo(
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
  return /* @__PURE__ */ React10__namespace.createElement(ThemeProviderContext.Provider, { ...props, value }, children);
}
function useTheme() {
  const context = React10__namespace.useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarGroup = AvatarGroup;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent;
exports.CollapsibleTrigger = CollapsibleTrigger;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Label = Label;
exports.Loading = Loading;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.RedDot = RedDot;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.SearchBar = SearchBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator2;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Skeleton = Skeleton;
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonCard = SkeletonCard;
exports.SkeletonText = SkeletonText;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.TextButton = TextButton;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.capitalize = capitalize;
exports.cn = cn;
exports.debounce = debounce;
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.generateId = generateId;
exports.isClient = isClient;
exports.isServer = isServer;
exports.sleep = sleep;
exports.throttle = throttle;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toast = toast;
exports.truncate = truncate;
exports.useDebounce = useDebounce;
exports.useDebouncedCallback = useDebouncedCallback;
exports.useIsDesktop = useIsDesktop;
exports.useIsMobile = useIsMobile;
exports.useIsTablet = useIsTablet;
exports.useLocalStorage = useLocalStorage;
exports.useMediaQuery = useMediaQuery;
exports.useTheme = useTheme;
exports.useToast = useToast;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map