import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  maxItems?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />,
  showHome = false,
  maxItems,
  className,
  size = 'md',
}) => {
  const allItems = showHome
    ? [{ label: 'Home', href: '/', icon: <Home className="h-3.5 w-3.5" /> }, ...items]
    : items;

  const displayed =
    maxItems && allItems.length > maxItems
      ? [allItems[0], { label: '…', href: undefined }, ...allItems.slice(-2)]
      : allItems;

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center', className)}>
      <ol className={cn('flex items-center gap-1.5 flex-wrap', sizeMap[size])}>
        {displayed.map((item, i) => {
          const isLast = i === displayed.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && separator}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-foreground flex items-center gap-1"
                >
                  {item.icon}
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span className="text-muted-foreground flex items-center gap-1">
                  {item.icon}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
export default Breadcrumb;
