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
        'h-full border-r border-sidebar-border bg-sidebar px-2 py-3 text-sidebar-foreground transition-all duration-200',
        collapsed ? 'w-[60px]' : 'w-60',
        className
      )}
      {...props}
    >
      <nav aria-label="Sidebar navigation" className="flex h-full flex-col gap-0.5">
        {children}
      </nav>
    </aside>
  )
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
