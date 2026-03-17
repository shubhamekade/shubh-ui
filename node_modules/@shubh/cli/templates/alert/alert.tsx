import React from "react";
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
