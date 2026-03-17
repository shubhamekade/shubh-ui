'use client';

import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/utils/cn';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  maxWidth?: string;
  disabled?: boolean;
}

const placementStyles = {
  top:    'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left:   'right-full top-1/2 -translate-y-1/2 mr-2',
  right:  'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowStyles = {
  top:    'top-full left-1/2 -translate-x-1/2 border-t-foreground border-x-transparent border-b-transparent border-4',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-foreground border-x-transparent border-t-transparent border-4',
  left:   'left-full top-1/2 -translate-y-1/2 border-l-foreground border-y-transparent border-r-transparent border-4',
  right:  'right-full top-1/2 -translate-y-1/2 border-r-foreground border-y-transparent border-l-transparent border-4',
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  delay = 200,
  className,
  maxWidth = '200px',
  disabled = false,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay, disabled]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-2.5 py-1.5 text-xs font-medium text-background bg-foreground rounded-md shadow-lg whitespace-nowrap animate-fade-in pointer-events-none',
            placementStyles[placement],
            className
          )}
          style={{ maxWidth }}
        >
          {content}
          <span className={cn('absolute border', arrowStyles[placement])} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;