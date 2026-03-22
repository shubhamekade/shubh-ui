import { forwardRef, type HTMLAttributes } from 'react';
import { Bell, Search, User, Menu, X } from 'lucide-react';

import { cn } from '../../../utils/cn';

export interface TopbarProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  onSearchChange?: (query: string) => void;
  onMenuToggle?: () => void;
  menuOpen?: boolean;
  notifications?: number;
  onNotifications?: () => void;
  onProfile?: () => void;
  profileImage?: string;
  userName?: string;
}

const Topbar = forwardRef<HTMLElement, TopbarProps>(
  (
    {
      className,
      title = 'Dashboard',
      onSearchChange,
      onMenuToggle,
      menuOpen = false,
      notifications = 0,
      onNotifications,
      onProfile,
      profileImage,
      userName,
      ...props
    },
    ref
  ) => (
    <header
      ref={ref}
      className={cn('w-full border-b border-white/20 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-border/70 dark:bg-card/70 sm:px-6', className)}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Menu toggle + Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="rounded-xl p-2 transition-colors hover:bg-muted lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        </div>

        {/* Center: Search */}
        {onSearchChange && (
          <div className="hidden md:flex flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-10 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/25"
              />
            </div>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button
            onClick={onNotifications}
            className="relative rounded-xl p-2 transition-colors hover:bg-muted"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            )}
          </button>

          {/* Profile */}
          <button
            onClick={onProfile}
            className="flex items-center gap-2 rounded-xl p-1.5 transition-colors hover:bg-muted"
            aria-label="Profile menu"
          >
            {profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profileImage}
                alt={userName || 'User'}
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <User className="h-5 w-5 text-muted-foreground" />
            )}
            {userName && (
              <span className="hidden text-sm font-medium text-foreground sm:inline">
                {userName}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
);

Topbar.displayName = 'Topbar';

export default Topbar;
