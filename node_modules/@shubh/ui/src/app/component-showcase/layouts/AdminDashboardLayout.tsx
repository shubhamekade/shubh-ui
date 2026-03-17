'use client';

import React, { useState } from 'react';
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import Button from '@/components/Button/Button';
import Badge from '@/components/Badge/Badge';
import Avatar from '@/components/Avatar/Avatar';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Alert from '@/components/Alert/Alert';
import Dropdown from '@/components/Dropdown/Dropdown';
import Pagination from '@/components/Pagination/Pagination';
import { useShowcaseTheme } from '../context/ThemeContext';

interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

interface TableRow {
  id: string;
  user: { name: string; email: string; initials: string };
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  role: string;
  orders: number;
  revenue: string;
  joined: string;
}

const STATS: StatCard[] = [
  { label: 'Total Revenue', value: '$84,254', change: '+12.5%', trend: 'up', icon: <ChartBarIcon className="h-5 w-5" />, color: 'text-blue-600 bg-blue-50' },
  { label: 'Active Users', value: '3,842', change: '+8.2%', trend: 'up', icon: <UsersIcon className="h-5 w-5" />, color: 'text-green-600 bg-green-50' },
  { label: 'New Orders', value: '1,293', change: '-3.1%', trend: 'down', icon: <ShoppingCartIcon className="h-5 w-5" />, color: 'text-amber-600 bg-amber-50' },
  { label: 'Open Tickets', value: '47', change: '+5.4%', trend: 'up', icon: <DocumentTextIcon className="h-5 w-5" />, color: 'text-purple-600 bg-purple-50' },
];

const TABLE_DATA: TableRow[] = [
  { id: '001', user: { name: 'Alice Johnson', email: 'alice@example.com', initials: 'AJ' }, status: 'active', role: 'Admin', orders: 24, revenue: '$4,200', joined: 'Jan 12, 2024' },
  { id: '002', user: { name: 'Bob Martinez', email: 'bob@example.com', initials: 'BM' }, status: 'inactive', role: 'Editor', orders: 8, revenue: '$980', joined: 'Mar 5, 2024' },
  { id: '003', user: { name: 'Carol White', email: 'carol@example.com', initials: 'CW' }, status: 'pending', role: 'Viewer', orders: 0, revenue: '$0', joined: 'Jun 20, 2024' },
  { id: '004', user: { name: 'David Lee', email: 'david@example.com', initials: 'DL' }, status: 'active', role: 'Editor', orders: 41, revenue: '$7,850', joined: 'Feb 28, 2024' },
  { id: '005', user: { name: 'Eva Chen', email: 'eva@example.com', initials: 'EC' }, status: 'suspended', role: 'Viewer', orders: 3, revenue: '$120', joined: 'Aug 1, 2024' },
  { id: '006', user: { name: 'Frank Nguyen', email: 'frank@example.com', initials: 'FN' }, status: 'active', role: 'Admin', orders: 67, revenue: '$12,400', joined: 'Dec 10, 2023' },
];

const STATUS_BADGE: Record<string, { variant: 'success' | 'secondary' | 'warning' | 'destructive'; label: string }> = {
  active:    { variant: 'success',     label: 'Active' },
  inactive:  { variant: 'secondary',   label: 'Inactive' },
  pending:   { variant: 'warning',     label: 'Pending' },
  suspended: { variant: 'destructive', label: 'Suspended' },
};

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon className="h-4 w-4" /> },
  { id: 'users',     label: 'Users',     icon: <UsersIcon className="h-4 w-4" /> },
  { id: 'analytics', label: 'Analytics', icon: <ChartBarIcon className="h-4 w-4" /> },
  { id: 'orders',    label: 'Orders',    icon: <ShoppingCartIcon className="h-4 w-4" /> },
  { id: 'reports',   label: 'Reports',   icon: <DocumentTextIcon className="h-4 w-4" /> },
  { id: 'settings',  label: 'Settings',  icon: <CogIcon className="h-4 w-4" /> },
];

export default function AdminDashboardLayout() {
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [currentPage, setCurrentPage] = useState(1);
  const [alertVisible, setAlertVisible] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Admin', href: '#' },
    { label: 'Dashboard' },
  ];

  // Theme-derived classes
  const pageBg = isNavy ? 'bg-[#00001a]' : 'bg-gray-50';
  const topbarBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const topbarText = isNavy ? 'text-white/80' : 'text-gray-500';
  const topbarHover = isNavy ? 'hover:text-white hover:bg-white/10' : 'hover:text-gray-700 hover:bg-gray-100';
  const topbarUserText = isNavy ? 'text-white/90' : 'text-gray-700';
  const notifPanelBg = isNavy ? 'bg-[#000060] border-white/10 shadow-xl' : 'bg-white border-gray-200 shadow-lg';
  const notifTitle = isNavy ? 'text-white' : 'text-gray-800';
  const notifItem = isNavy ? 'border-white/10 text-white/60' : 'border-gray-100 text-gray-600';
  const cardBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const cardTitle = isNavy ? 'text-white' : 'text-gray-900';
  const cardDesc = isNavy ? 'text-white/50' : 'text-gray-500';
  const statLabel = isNavy ? 'text-white/50' : 'text-gray-500';
  const statValue = isNavy ? 'text-white' : 'text-gray-900';
  const statVsMonth = isNavy ? 'text-white/40' : 'text-gray-400';
  const tableHeadBg = isNavy ? 'bg-[#000060]' : 'bg-gray-50';
  const tableHeadText = isNavy ? 'text-white/50' : 'text-gray-500';
  const tableHeadBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const tableRowHover = isNavy ? 'hover:bg-white/5' : 'hover:bg-gray-50/60';
  const tableRowDivide = isNavy ? 'divide-white/5' : 'divide-gray-50';
  const tableCellText = isNavy ? 'text-white/80' : 'text-gray-700';
  const tableCellMuted = isNavy ? 'text-white/40' : 'text-gray-400';
  const tableCellBold = isNavy ? 'text-white' : 'text-gray-900';
  const tableEmailText = isNavy ? 'text-white/40' : 'text-gray-400';
  const paginationBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const paginationText = isNavy ? 'text-white/40' : 'text-gray-500';
  const cardBorderBottom = isNavy ? 'border-white/10' : 'border-gray-100';
  const pageTitle = isNavy ? 'text-white' : 'text-gray-900';
  const pageSubtitle = isNavy ? 'text-white/50' : 'text-gray-500';
  const dropdownRowBtn = isNavy ? 'text-white/40 hover:text-white/80 hover:bg-white/10' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100';

  return (
    <div className={cn('flex h-screen overflow-hidden font-sans', pageBg)}>
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col flex-shrink-0 transition-all duration-300 overflow-hidden',
          isNavy ? 'bg-[#000040] text-white' : 'bg-[#000040] text-white',
          sidebarCollapsed ? 'w-16' : 'w-56'
        )}
      >
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 h-14">
          <div className="w-7 h-7 rounded-md bg-[#000080] flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">DS</span>
          </div>
          {!sidebarCollapsed && (
            <span className="font-semibold text-sm text-white truncate">AdminPanel</span>
          )}
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                activeNav === item.id
                  ? 'bg-white/15 text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/8'
              )}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span className="shrink-0">{item.icon}</span>
              {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="px-4 py-3 border-t border-white/10">
          <div className={cn('flex items-center gap-2.5', sidebarCollapsed && 'justify-center')}>
            <Avatar initials="SA" size="sm" />
            {!sidebarCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-medium text-white truncate">Super Admin</p>
                <p className="text-xs text-white/40 truncate">admin@company.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className={cn('h-14 border-b flex items-center px-4 gap-3 shrink-0', topbarBg)}>
          <button
            onClick={() => setSidebarCollapsed(v => !v)}
            className={cn('p-1.5 rounded-md transition-colors', topbarText, topbarHover)}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>

          <div className="flex-1" />

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(v => !v)}
              className={cn('relative p-1.5 rounded-md transition-colors', topbarText, topbarHover)}
              aria-label="Notifications"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {notifOpen && (
              <div className={cn('absolute right-0 top-10 w-72 rounded-lg border z-50 p-3', notifPanelBg)}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn('text-sm font-semibold', notifTitle)}>Notifications</span>
                  <button onClick={() => setNotifOpen(false)} className={cn(topbarText, topbarHover, 'rounded p-0.5')}>
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
                {['New user registered', 'Server alert: CPU 92%', 'Monthly report ready'].map((n, i) => (
                  <div key={i} className={cn('flex items-start gap-2 py-2 border-t', notifItem)}>
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <p className="text-xs">{n}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Dropdown */}
          <Dropdown
            trigger={
              <button className={cn('flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors', topbarHover)}>
                <Avatar initials="SA" size="sm" />
                <span className={cn('text-sm font-medium hidden sm:block', topbarUserText)}>Super Admin</span>
                <ChevronDownIcon className={cn('h-3.5 w-3.5', topbarText)} />
              </button>
            }
            items={[
              { id: 'profile', label: 'My Profile', onClick: () => {} },
              { id: 'settings', label: 'Account Settings', onClick: () => {} },
              { id: 'sep1', separator: true },
              { id: 'signout', label: 'Sign Out', onClick: () => {} },
            ]}
          />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Page Title */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className={cn('text-xl font-bold', pageTitle)}>Dashboard Overview</h1>
              <p className={cn('text-sm mt-0.5', pageSubtitle)}>Welcome back, Super Admin. Here's what's happening.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" leftIcon={<FunnelIcon className="h-3.5 w-3.5" />}>
                Filter
              </Button>
              <Button variant="primary" size="sm" leftIcon={<ArrowDownTrayIcon className="h-3.5 w-3.5" />}>
                Export
              </Button>
            </div>
          </div>

          {/* Alert */}
          {alertVisible && (
            <div className="mb-5">
              <Alert
                variant="info"
                title="System Update Scheduled"
                description="Maintenance window is set for Sunday, 2:00–4:00 AM UTC. Expect brief downtime."
                dismissible
                onDismiss={() => setAlertVisible(false)}
              />
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {STATS.map(stat => (
              <div key={stat.label} className={cn('rounded-lg border p-4', cardBg)}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className={cn('text-xs font-medium uppercase tracking-wide', statLabel)}>{stat.label}</p>
                    <p className={cn('text-2xl font-bold mt-1', statValue)}>{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.trend === 'up'
                        ? <ArrowTrendingUpIcon className="h-3.5 w-3.5 text-green-500" />
                        : <ArrowTrendingDownIcon className="h-3.5 w-3.5 text-red-500" />
                      }
                      <span className={cn('text-xs font-medium', stat.trend === 'up' ? 'text-green-500' : 'text-red-500')}>
                        {stat.change}
                      </span>
                      <span className={cn('text-xs', statVsMonth)}>vs last month</span>
                    </div>
                  </div>
                  <div className={cn('p-2.5 rounded-lg', stat.color)}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Table */}
          <div className={cn('rounded-lg border overflow-hidden', cardBg)}>
            <div className={cn('px-5 py-4 border-b flex items-center justify-between', cardBorderBottom)}>
              <div>
                <p className={cn('text-base font-semibold', cardTitle)}>User Management</p>
                <p className={cn('text-xs mt-0.5', cardDesc)}>Manage all registered users and their permissions</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default" size="sm">{TABLE_DATA.length} users</Badge>
                <Button variant="primary" size="sm">Add User</Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={cn('border-b', tableHeadBg, tableHeadBorder)}>
                    <th className={cn('text-left px-5 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>User</th>
                    <th className={cn('text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>Status</th>
                    <th className={cn('text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>Role</th>
                    <th className={cn('text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>Orders</th>
                    <th className={cn('text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>Revenue</th>
                    <th className={cn('text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide', tableHeadText)}>Joined</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className={cn('divide-y', tableRowDivide)}>
                  {TABLE_DATA.map(row => {
                    const statusInfo = STATUS_BADGE[row.status];
                    return (
                      <tr key={row.id} className={cn('transition-colors', tableRowHover)}>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-3">
                            <Avatar
                              initials={row.user.initials}
                              size="sm"
                              status={row.status === 'active' ? 'online' : row.status === 'inactive' ? 'offline' : undefined}
                            />
                            <div>
                              <p className={cn('font-medium text-sm', tableCellBold)}>{row.user.name}</p>
                              <p className={cn('text-xs', tableEmailText)}>{row.user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <Badge variant={statusInfo.variant} size="sm" dot>
                            {statusInfo.label}
                          </Badge>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={cn('text-sm', tableCellText)}>{row.role}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={cn('text-sm tabular-nums', tableCellText)}>{row.orders}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={cn('text-sm font-medium tabular-nums', tableCellBold)}>{row.revenue}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={cn('text-xs', tableCellMuted)}>{row.joined}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <Dropdown
                            trigger={
                              <button className={cn('p-1 rounded-md transition-colors', dropdownRowBtn)}>
                                <EllipsisVerticalIcon className="h-4 w-4" />
                              </button>
                            }
                            items={[
                              { id: `view-${row.id}`, label: 'View Profile', icon: <EyeIcon className="h-3.5 w-3.5" />, onClick: () => {} },
                              { id: `edit-${row.id}`, label: 'Edit User', icon: <PencilIcon className="h-3.5 w-3.5" />, onClick: () => {} },
                              { id: `sep-${row.id}`, separator: true },
                              { id: `del-${row.id}`, label: 'Delete User', icon: <TrashIcon className="h-3.5 w-3.5" />, onClick: () => {}, danger: true },
                            ]}
                            align="right"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className={cn('px-5 py-3.5 border-t flex items-center justify-between', paginationBorder)}>
              <p className={cn('text-xs', paginationText)}>Showing 1–6 of 248 users</p>
              <Pagination
                currentPage={currentPage}
                totalPages={42}
                onPageChange={setCurrentPage}
                size="sm"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
