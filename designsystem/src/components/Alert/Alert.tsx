import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export const alertVariants = cva(
  'relative flex gap-3 rounded-lg border p-4 text-sm',
  {
    variants: {
      variant: {
        info:        'bg-accent border-primary/20 text-accent-foreground',
        success:     'bg-green-50 border-green-200 text-green-800',
        warning:     'bg-amber-50 border-amber-200 text-amber-800',
        destructive: 'bg-red-50 border-red-200 text-red-800',
        navy:        'bg-navy border-navy-medium text-white',
        neutral:     'bg-muted border-border text-foreground',
      },
    },
    defaultVariants: { variant: 'info' },
  }
);

const iconMap = {
  info:        <Info className="h-4 w-4 shrink-0 mt-0.5" />,
  success:     <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />,
  warning:     <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />,
  destructive: <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />,
  navy:        <Info className="h-4 w-4 shrink-0 mt-0.5" />,
  neutral:     <Info className="h-4 w-4 shrink-0 mt-0.5" />,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
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
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    <span>{icon ?? iconMap[variant!]}</span>
    <div className="flex-1">
      {title && <p className="font-semibold mb-0.5">{title}</p>}
      {children && <p className="leading-relaxed">{children}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
    {dismissible && (
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss alert"
        className="shrink-0 p-0.5 rounded opacity-60 hover:opacity-100 transition-opacity"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    )}
  </div>
);

Alert.displayName = 'Alert';
export default Alert;