import { forwardRef, useMemo, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  name?: string;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
  fallback?: string;
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
};

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, name, size = "md", shape = "circle", fallback, alt, src, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    const initials = useMemo(() => {
      if (fallback) return fallback;
      if (!name) return "?";
      const parts = name.trim().split(/\s+/);
      return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
    }, [fallback, name]);

    const sharedClasses = cn(
      "inline-flex items-center justify-center overflow-hidden bg-slate-100 font-medium text-slate-700",
      sizeClasses[size],
      shape === "circle" ? "rounded-full" : "rounded-md",
      className
    );

    if (!src || hasError) {
      return <span className={sharedClasses} aria-label={alt ?? name ?? "avatar"}>{initials.toUpperCase()}</span>;
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt ?? name ?? "avatar"}
        onError={() => setHasError(true)}
        className={sharedClasses}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
