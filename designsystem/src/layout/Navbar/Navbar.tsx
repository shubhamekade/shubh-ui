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
        'w-full border-b border-border/60 bg-surface/80 px-4 py-0 backdrop-blur-xl sm:px-6',
        sticky && 'sticky top-0 z-40',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4">
        {children}
      </div>
    </header>
  )
);

Navbar.displayName = 'Navbar';

export default Navbar;
