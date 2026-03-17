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
        'bg-slate-900 text-white transition-all duration-200 flex flex-col',
        collapsed ? 'w-20' : 'w-64',
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h1 className={cn('font-bold transition-all', collapsed ? 'text-xs' : 'text-lg')}>
          {collapsed ? 'UI' : '@shubh/ui'}
        </h1>
        <button
          onClick={onToggle}
          className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigation.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => onNavigate?.(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left',
                activeItem === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted/10'
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
                      'w-full flex items-center gap-3 px-3 py-1.5 rounded text-xs transition-colors text-left',
                      activeItem === child.id
                        ? 'bg-primary/80 text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted/10'
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
      {children && <div className="border-t border-border p-4">{children}</div>}
    </aside>
  )
);

AdminSidebar.displayName = 'AdminSidebar';

export default AdminSidebar;
