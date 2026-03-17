import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '../../utils/cn';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, children, ...props }, ref) => (
    <aside
      ref={ref}
      role="complementary"
      className={cn(
        'h-full border-r border-slate-200 bg-white px-3 py-4',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
      {...props}
    >
      <nav aria-label="Sidebar navigation" className="flex h-full flex-col gap-1">
        {children}
      </nav>
    </aside>
  )
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
