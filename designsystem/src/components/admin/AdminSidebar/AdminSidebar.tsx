import { forwardRef, type HTMLAttributes } from 'react';
import { Menu, X } from 'lucide-react';

import { cn } from '../../../utils/cn';

export interface AdminSidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  onToggle?: () => void;
  navigation?: NavItem[];
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavItem[];
}

const AdminSidebar = forwardRef<HTMLElement, AdminSidebarProps>(
  (
    {
      className,
      collapsed = false,
      onToggle,
      navigation = [],
      activeItem,
      onNavigate,
      children,
      ...props
    },
    ref
  ) => (
    <aside
      ref={ref}
      className={cn(
        'flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200',
        collapsed ? 'w-20' : 'w-64',
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-sidebar-border p-4">
        <h1 className={cn('font-bold transition-all', collapsed ? 'text-xs' : 'text-lg')}>
          {collapsed ? 'UI' : '@shubh/ui'}
        </h1>
        <button
          onClick={onToggle}
          className="rounded-xl p-2 transition-colors hover:bg-sidebar-accent"
          aria-label={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navigation.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => onNavigate?.(item.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                activeItem === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
              )}
            >
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
            {item.children && !collapsed && (
              <div className="ml-3 mt-1 space-y-1">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onNavigate?.(child.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs transition-colors',
                      activeItem === child.id
                        ? 'bg-primary/80 text-primary-foreground'
                        : 'text-sidebar-foreground/65 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                    )}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      {children && <div className="border-t border-sidebar-border p-4">{children}</div>}
    </aside>
  )
);

AdminSidebar.displayName = 'AdminSidebar';

export default AdminSidebar;
