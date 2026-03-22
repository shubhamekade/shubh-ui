import React from 'react';
import { cn } from '@/utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: React.ReactNode;
  labelAlign?: 'left' | 'center' | 'right';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: 'thin' | 'medium' | 'thick';
}

const variantMap = { solid: 'border-solid', dashed: 'border-dashed', dotted: 'border-dotted' };
const thicknessMap = { thin: 'border-t', medium: 'border-t-2', thick: 'border-t-4' };

const Divider: React.FC<DividerProps> = ({
  className,
  orientation = 'horizontal',
  label,
  labelAlign = 'center',
  variant = 'solid',
  thickness = 'thin',
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('mx-2 inline-block w-px self-stretch bg-border', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div role="separator" className={cn('flex items-center gap-3 w-full', className)} {...props}>
        {labelAlign !== 'left' && (
          <div
            className={cn('flex-1 border-border', variantMap[variant], thicknessMap[thickness])}
          />
        )}
        <span className="shrink-0 whitespace-nowrap text-xs font-medium text-muted-foreground">
          {label}
        </span>
        {labelAlign !== 'right' && (
          <div
            className={cn('flex-1 border-border', variantMap[variant], thicknessMap[thickness])}
          />
        )}
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={cn(
        'my-0 w-full border-border',
        variantMap[variant],
        thicknessMap[thickness],
        className
      )}
      {...props}
    />
  );
};

Divider.displayName = 'Divider';
export default Divider;
