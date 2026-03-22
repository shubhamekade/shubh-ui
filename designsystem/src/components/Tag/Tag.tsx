import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled' | 'navy';
  color?: 'default' | 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'pink';
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}

const colorMap = {
  default: 'border-border/80 bg-muted/60 text-foreground',
  blue: 'border-info/20 bg-info-soft text-info',
  green: 'border-success/20 bg-success-soft text-success',
  red: 'border-destructive/20 bg-destructive-soft text-destructive',
  amber: 'border-warning/20 bg-warning-soft text-warning-foreground',
  purple: 'border-primary/20 bg-accent text-accent-foreground',
  pink: 'border-border/60 bg-secondary text-secondary-foreground',
};

const sizeMap = {
  sm: 'h-5 px-1.5 text-[10px] gap-1 tracking-wide',
  md: 'h-6 px-2 text-xs gap-1',
  lg: 'h-7 px-2.5 text-xs gap-1.5',
};

const Tag: React.FC<TagProps> = ({
  className,
  size = 'md',
  variant: _variant = 'default',
  color = 'default',
  removable,
  onRemove,
  icon,
  children,
  ...props
}) => (
  <span
    className={cn(
      'inline-flex items-center rounded-xl border font-medium transition-colors',
      sizeMap[size],
      colorMap[color],
      className
    )}
    {...props}
  >
    {icon && <span className="shrink-0">{icon}</span>}
    <span>{children}</span>
    {removable && (
      <button
        type="button"
        onClick={onRemove}
        className="ml-0.5 shrink-0 rounded-md p-0.5 transition-opacity hover:bg-foreground/5 hover:opacity-70"
        aria-label={`Remove ${children} tag`}
      >
        <X className="h-3 w-3" />
      </button>
    )}
  </span>
);

Tag.displayName = 'Tag';
export default Tag;
