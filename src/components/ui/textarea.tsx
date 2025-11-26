import * as React from "react";
import { cn } from "@/lib/utils";

// LuckyUI Textarea - Matches LuckyTextField style
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  heading?: string;
  description?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, heading, description, ...props }, ref) => {
    const textareaElement = (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    // If heading or description is provided, wrap in LuckyUI style
    if (heading || description) {
      return (
        <div className="space-y-2">
          {heading && (
            <label className="text-sm font-medium leading-none text-foreground">
              {heading}
            </label>
          )}
          {textareaElement}
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

    return textareaElement;
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
