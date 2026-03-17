import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '../../utils/cn';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, sticky = false, children, ...props }, ref) => (
    <header
      ref={ref}
      role="banner"
      className={cn(
        'w-full border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:px-6',
        sticky && 'sticky top-0 z-40',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        {children}
      </div>
    </header>
  )
);

Navbar.displayName = 'Navbar';

export default Navbar;
