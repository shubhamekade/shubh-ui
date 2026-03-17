import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const progressTrackVariants = cva('w-full overflow-hidden rounded-full bg-muted', {
  variants: {
    size: {
      xs: 'h-1',
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
      xl: 'h-6',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressTrackVariants> {
  value: number;
  max?: number;
  color?: 'primary' | 'success' | 'warning' | 'destructive' | 'navy';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
}

const colorMap = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  destructive: 'bg-destructive',
  navy: 'bg-navy',
};

const Progress: React.FC<ProgressProps> = ({
  className,
  size,
  value,
  max = 100,
  color = 'primary',
  showLabel = false,
  label,
  animated = false,
  striped = false,
  ...props
}) => {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('w-full', className)} {...props}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-[#1e1e1e]">{label}</span>
          {showLabel && (
            <span className="text-xs text-[#808080] tabular-nums">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        className={progressTrackVariants({ size })}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `Progress: ${Math.round(pct)}%`}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
            colorMap[color],
            striped && 'bg-stripes',
            animated && 'animate-pulse'
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

Progress.displayName = 'Progress';
export default Progress;
