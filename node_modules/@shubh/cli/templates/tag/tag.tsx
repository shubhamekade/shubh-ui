import React from 'react';
import { X } from 'lucide-react';
import { cn } from "@/utils/cn";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled' | 'navy';
  color?: 'default' | 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'pink';
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}

const colorMap = {
  default: 'bg-gray-100 text-gray-700 border-gray-200',
  blue:    'bg-[#dae8ff] text-[#000080] border-[#b3d4ff]',
  green:   'bg-green-50 text-green-700 border-green-200',
  red:     'bg-red-50 text-red-700 border-red-200',
  amber:   'bg-amber-50 text-amber-700 border-amber-200',
  purple:  'bg-purple-50 text-purple-700 border-purple-200',
  pink:    'bg-pink-50 text-pink-700 border-pink-200',
};

const sizeMap = {
  sm: 'h-5 px-2 text-xs gap-1',
  md: 'h-6 px-2.5 text-xs gap-1.5',
  lg: 'h-7 px-3 text-sm gap-1.5',
};

const Tag: React.FC<TagProps> = ({
  className,
  size = 'md',
  variant = 'default',
  color = 'default',
  removable,
  onRemove,
  icon,
  children,
  ...props
}) => (
  <span
    className={cn(
      'inline-flex items-center rounded-md border font-medium transition-colors',
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
        className="shrink-0 hover:opacity-70 transition-opacity ml-0.5"
        aria-label={`Remove ${children} tag`}
      >
        <X className="h-3 w-3" />
      </button>
    )}
  </span>
);

Tag.displayName = 'Tag';
export default Tag;
