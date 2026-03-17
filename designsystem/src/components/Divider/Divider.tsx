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
        className={cn('inline-block self-stretch w-px bg-[#d7d7d7] mx-2', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn('flex items-center gap-3 w-full', className)}
        {...props}
      >
        {labelAlign !== 'left' && (
          <div className={cn('flex-1 border-[#d7d7d7]', variantMap[variant], thicknessMap[thickness])} />
        )}
        <span className="text-xs text-[#808080] font-medium whitespace-nowrap shrink-0">{label}</span>
        {labelAlign !== 'right' && (
          <div className={cn('flex-1 border-[#d7d7d7]', variantMap[variant], thicknessMap[thickness])} />
        )}
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={cn(
        'border-[#d7d7d7] w-full my-0',
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