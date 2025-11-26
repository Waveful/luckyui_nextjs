import * as React from "react";
import { cn } from "@/lib/utils";

// LuckyUI TextField Props - matches Flutter's LuckyTextField
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  heading?: string;
  description?: string;
}

// LuckyUI TextField Component - Mobile-first design
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, iconPosition = "left", heading, description, ...props }, ref) => {
    const inputElement = (
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            icon && iconPosition === "left" && "pl-12",
            icon && iconPosition === "right" && "pr-12",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5">
            {icon}
          </div>
        )}
      </div>
    );

    // If heading or description is provided, wrap in LuckyUI TextField style
    if (heading || description) {
      return (
        <div className="space-y-2">
          {heading && (
            <label className="text-sm font-medium leading-none text-foreground">
              {heading}
            </label>
          )}
          {inputElement}
          {description && (
            <p className={cn(
              "text-sm",
              error ? "text-destructive" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
        </div>
      );
    }

    return inputElement;
  }
);
Input.displayName = "Input";

// LuckyUI SearchBar Component - matches Flutter's LuckySearchBar
export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onSearch?: (value: string) => void;
  icon?: React.ReactNode;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, icon, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onSearch?.(e.target.value);
    };

    return (
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5">
          {icon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          )}
        </div>
        <input
          type="search"
          className={cn(
            "flex h-12 w-full rounded-full border border-input bg-secondary/50 pl-12 pr-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            className
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { Input, SearchBar };
