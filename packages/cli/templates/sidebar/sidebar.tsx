import { cn } from "@/utils/cn";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  collapsed?: boolean;
  className?: string;
}

export default function Sidebar({ items, activeItem, onItemClick, collapsed = false, className }: SidebarProps) {
  return (
    <aside className={cn("h-full border-r border-slate-200 bg-white", collapsed ? "w-16" : "w-64", className)}>
      <nav className="space-y-1 p-3">
        {items.map((item) => {
          const active = item.id === activeItem;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onItemClick?.(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm",
                active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
              {!collapsed ? <span className="truncate">{item.label}</span> : null}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
