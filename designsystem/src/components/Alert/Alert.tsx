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
        destructive:
          'border-l-destructive/70 border-destructive/15 bg-destructive-soft text-destructive',
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
