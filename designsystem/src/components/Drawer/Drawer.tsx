'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from '@/motion';

import { cn } from '@/utils/cn';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

const placementStyles = {
  right: 'right-0 top-0 h-full animate-slide-in-right',
  left: 'left-0 top-0 h-full animate-slide-in-left',
  top: 'top-0 left-0 w-full animate-slide-in-bottom',
  bottom: 'bottom-0 left-0 w-full',
};

const sizeStyles = {
  right: { sm: 'w-72', md: 'w-96', lg: 'w-[480px]', full: 'w-full' },
  left: { sm: 'w-72', md: 'w-96', lg: 'w-[480px]', full: 'w-full' },
  top: { sm: 'h-48', md: 'h-64', lg: 'h-80', full: 'h-full' },
  bottom: { sm: 'h-48', md: 'h-64', lg: 'h-80', full: 'h-full' },
};

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  placement = 'right',
  size = 'md',
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
}) => {
  useEffect(() => {
    if (!closeOnEsc) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose, closeOnEsc]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <motion.div
            className="absolute inset-0 bg-overlay/50 backdrop-blur-md"
            onClick={closeOnOverlay ? onClose : undefined}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.div
            className={cn(
              'absolute flex flex-col border border-border/60 bg-surface/95 backdrop-blur-xl shadow-modal',
              placementStyles[placement],
              sizeStyles[placement][size],
              className
            )}
            initial={
              placement === 'right'
                ? { opacity: 0, x: 48 }
                : placement === 'left'
                  ? { opacity: 0, x: -48 }
                  : placement === 'top'
                    ? { opacity: 0, y: -36 }
                    : { opacity: 0, y: 36 }
            }
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={
              placement === 'right'
                ? { opacity: 0, x: 48 }
                : placement === 'left'
                  ? { opacity: 0, x: -48 }
                  : placement === 'top'
                    ? { opacity: 0, y: -36 }
                    : { opacity: 0, y: 36 }
            }
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {(title || showCloseButton) && (
              <div className="flex shrink-0 items-center justify-between border-b border-border/80 p-6">
                <div>
                  {title && <h2 className="text-base font-semibold text-foreground">{title}</h2>}
                  {description && <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>}
                </div>
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close drawer"
                    className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">{children}</div>
            {footer && (
              <div className="flex shrink-0 items-center justify-end gap-2 border-t border-border/80 p-6">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

Drawer.displayName = 'Drawer';
export default Drawer;
