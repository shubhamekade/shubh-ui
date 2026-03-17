import { forwardRef, type HTMLAttributes } from "react";
import { Bell, Search, User, Menu, X } from "lucide-react";

import { cn } from "../../../utils/cn";

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
      title = "Dashboard",
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
      className={cn(
        "w-full border-b border-slate-200 bg-white px-4 py-3 sm:px-6",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Menu toggle + Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-slate-600" />
            ) : (
              <Menu className="h-5 w-5 text-slate-600" />
            )}
          </button>
          <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
        </div>

        {/* Center: Search */}
        {onSearchChange && (
          <div className="hidden md:flex flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button
            onClick={onNotifications}
            className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-slate-600" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            )}
          </button>

          {/* Profile */}
          <button
            onClick={onProfile}
            className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Profile menu"
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt={userName || "User"}
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <User className="h-5 w-5 text-slate-600" />
            )}
            {userName && (
              <span className="hidden sm:inline text-sm text-slate-700 font-medium">
                {userName}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
);

Topbar.displayName = "Topbar";

export default Topbar;
