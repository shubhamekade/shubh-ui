import React from 'react';
import { cn } from '@/utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circle' | 'rect' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rect',
  width,
  height,
  lines = 1,
  animated = true,
  style,
  ...props
}) => {
  const base = cn(
    'rounded-md bg-gray-200',
    animated && 'animate-pulse',
    className
  );

  if (variant === 'text' && lines > 1) {
    return (
      <div className="flex flex-col gap-2" {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(base, 'h-4')}
            style={{ width: i === lines - 1 ? '75%' : '100%' }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        base,
        variant === 'circle' && 'rounded-full',
        variant === 'text' && 'h-4',
      )}
      style={{
        width:  width  ? (typeof width  === 'number' ? `${width}px`  : width)  : undefined,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
};

const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('p-4 border border-[#d7d7d7] rounded-lg space-y-3', className)}>
    <div className="flex items-center gap-3">
      <Skeleton variant="circle" width={40} height={40} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="60%" height={16} />
        <Skeleton variant="text" width="40%" height={12} />
      </div>
    </div>
    <Skeleton variant="text" lines={3} />
    <div className="flex gap-2 pt-1">
      <Skeleton width={80} height={32} />
      <Skeleton width={80} height={32} />
    </div>
  </div>
);

SkeletonCard.displayName = 'SkeletonCard';
Skeleton.displayName = 'Skeleton';

export { SkeletonCard };
export default Skeleton;