import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export const alertVariants = cva(
  'relative flex gap-3 rounded-xl border-l-2 border border-transparent p-4 text-sm transition-all duration-150',
  {
    variants: {
      variant: {
        info: 'border-l-primary/70 border-primary/10 bg-accent text-accent-foreground',
        success: 'border-l-success/70 border-success/15 bg-success-soft text-success',
        warning: 'border-l-warning/70 border-warning/15 bg-warning-soft text-warning-foreground',
        destructive: 'border-l-destructive/70 border-destructive/15 bg-destructive-soft text-destructive',
        navy: 'border-l-sidebar-border border-sidebar-border/50 bg-sidebar text-sidebar-foreground',
        neutral: 'border-l-border/80 border-border/60 bg-muted/60 text-foreground',
      },
    },
    defaultVariants: { variant: 'info' },
  }
);

const iconMap = {
  info: <Info className="h-4 w-4 shrink-0 mt-0.5" />,
  success: <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />,
  destructive: <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />,
  navy: <Info className="h-4 w-4 shrink-0 mt-0.5" />,
  neutral: <Info className="h-4 w-4 shrink-0 mt-0.5" />,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  className,
  variant = 'info',
  title,
  dismissible,
  onDismiss,
  icon,
  action,
  children,
  ...props
}) => (
  <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
    <span>{icon ?? iconMap[variant!]}</span>
    <div className="flex-1">
      {title && <p className="font-semibold mb-0.5">{title}</p>}
      {children && <div className="leading-relaxed">{children}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
    {dismissible && (
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss alert"
        className="shrink-0 rounded-lg p-1 text-current opacity-60 transition-opacity hover:bg-foreground/5 hover:opacity-100"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    )}
  </div>
);

Alert.displayName = 'Alert';
export default Alert;
import { AlertCircle, CheckCircle2, InfoIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/utils/cn";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
}

const typeConfig = {
  info: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-900",
    icon: <InfoIcon className="h-5 w-5 text-blue-600" />,
  },
  success: {
    bg: "bg-green-50 border-green-200",
    text: "text-green-900",
    icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
  },
  warning: {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-900",
    icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
  },
  error: {
    bg: "bg-red-50 border-red-200",
    text: "text-red-900",
    icon: <AlertCircle className="h-5 w-5 text-red-600" />,
  },
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  description,
  icon,
  onClose,
  closeable = false,
  className,
  children,
  ...props
}) => {
  const config = typeConfig[type];

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        config.bg,
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0 pt-0.5">
        {icon || config.icon}
      </div>
      <div className="flex-1">
        {title && (
          <h3 className={cn("font-semibold", config.text)}>
            {title}
          </h3>
        )}
        {description && (
          <p className={cn("text-sm mt-1", config.text)}>
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
      {closeable && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-slate-400 hover:text-slate-600"
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

Alert.displayName = "Alert";
export default Alert;
export type { AlertProps };
