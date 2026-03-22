import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface DashboardShellProps extends HTMLAttributes<HTMLDivElement> {
  sidebar?: ReactNode;
  header?: ReactNode;
  aside?: ReactNode;
  contentClassName?: string;
}

const DashboardShell = forwardRef<HTMLDivElement, DashboardShellProps>(
  ({ className, sidebar, header, aside, children, contentClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid min-h-screen grid-cols-1 bg-background text-foreground lg:grid-cols-[18rem_minmax(0,1fr)]', className)}
        {...props}
      >
        {sidebar ? (
          <aside className="hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
            {sidebar}
          </aside>
        ) : null}
        <div className="flex min-w-0 flex-col">
          {header ? (
            <header className="sticky top-0 z-30 border-b border-border bg-background/88 backdrop-blur-xl">
              {header}
            </header>
          ) : null}
          <div className={cn('grid flex-1 grid-cols-1 gap-2xl px-4 py-2xl sm:px-6 xl:grid-cols-[minmax(0,1fr)_20rem]', contentClassName)}>
            <main className="min-w-0">{children}</main>
            {aside ? <aside className="hidden xl:block">{aside}</aside> : null}
          </div>
        </div>
      </div>
    );
  }
);

DashboardShell.displayName = 'DashboardShell';

export { DashboardShell };
export default DashboardShell;