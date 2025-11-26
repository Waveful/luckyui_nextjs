import { cn } from "@/lib/utils";

// LuckyUI Skeleton - Loading placeholder with shimmer effect
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-secondary animate-pulse",
        className
      )}
      {...props}
    />
  );
}

// LuckyUI Skeleton variants for common use cases
function SkeletonText({
  className,
  lines = 1,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <div className="space-y-2" {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 rounded-lg bg-secondary animate-pulse",
            i === lines - 1 ? "w-3/4" : "w-full",
            className
          )}
        />
      ))}
    </div>
  );
}

function SkeletonAvatar({
  className,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "default" | "lg" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-secondary animate-pulse",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

function SkeletonCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-secondary p-5 space-y-4 animate-pulse",
        className
      )}
      {...props}
    >
      <div className="h-4 w-1/2 rounded-lg bg-muted" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded-lg bg-muted" />
        <div className="h-3 w-3/4 rounded-lg bg-muted" />
      </div>
    </div>
  );
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard };
