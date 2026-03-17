'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from "@/utils/cn";

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
  right:  'right-0 top-0 h-full animate-slide-in-right',
  left:   'left-0 top-0 h-full animate-slide-in-left',
  top:    'top-0 left-0 w-full animate-slide-in-bottom',
  bottom: 'bottom-0 left-0 w-full',
};

const sizeStyles = {
  right:  { sm: 'w-72', md: 'w-96', lg: 'w-[480px]', full: 'w-full' },
  left:   { sm: 'w-72', md: 'w-96', lg: 'w-[480px]', full: 'w-full' },
  top:    { sm: 'h-48', md: 'h-64', lg: 'h-80', full: 'h-full' },
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
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose, closeOnEsc]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={closeOnOverlay ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute bg-white shadow-modal flex flex-col',
          placementStyles[placement],
          sizeStyles[placement][size],
          className
        )}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-5 border-b border-[#d7d7d7] shrink-0">
            <div>
              {title && <h2 className="text-base font-semibold text-[#1e1e1e]">{title}</h2>}
              {description && <p className="text-sm text-[#808080] mt-0.5">{description}</p>}
            </div>
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="p-1 rounded-md text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
          {children}
        </div>
        {footer && (
          <div className="shrink-0 flex items-center justify-end gap-2 p-5 border-t border-[#d7d7d7]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Drawer.displayName = 'Drawer';
export default Drawer;
