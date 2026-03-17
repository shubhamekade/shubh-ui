import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

import { cn } from "../../../utils/cn";

export interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | null;
  trendPercent?: number;
  trendLabel?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

const variantStyles = {
  default:
    "bg-card border-border text-card-foreground",
  primary:
    "bg-accent border-primary/20 text-accent-foreground",
  success:
    "bg-green-50 border-green-200 text-green-900",
  warning:
    "bg-amber-50 border-amber-200 text-amber-900",
  danger:
    "bg-red-50 border-red-200 text-red-900",
};

const iconBgVariants = {
  default: "bg-muted",
  primary: "bg-accent",
  success: "bg-green-100",
  warning: "bg-amber-100",
  danger: "bg-red-100",
};

const trendColorVariants = {
  up: "text-green-600",
  down: "text-red-600",
};

const StatsCard = forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      className,
      title,
      value,
      subtitle,
      icon,
      trend,
      trendPercent,
      trendLabel,
      variant = "default",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border p-6 transition-shadow hover:shadow-md",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: Icon + Text */}
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {trend && trendPercent && (
            <div className={cn("mt-2 flex items-center gap-1 text-sm font-medium", trendColorVariants[trend])}>
              {trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{trendPercent}%</span>
              {trendLabel && <span className="text-muted-foreground">{trendLabel}</span>}
            </div>
          )}
        </div>

        {/* Right: Icon */}
        {icon && (
          <div
            className={cn(
              "rounded-lg p-3",
              iconBgVariants[variant]
            )}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  )
);

StatsCard.displayName = "StatsCard";

export default StatsCard;
