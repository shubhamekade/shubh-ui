'use client';

import React, { useState, useMemo } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
import Badge from '@/components/Badge/Badge';

import Checkbox from '@/components/Checkbox/Checkbox';
import Tag from '@/components/Tag/Tag';
import Avatar from '@/components/Avatar/Avatar';
import Pagination from '@/components/Pagination/Pagination';
import Skeleton from '@/components/Skeleton/Skeleton';
import Dropdown from '@/components/Dropdown/Dropdown';
import { useShowcaseTheme } from '../context/ThemeContext';

interface ListItem {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'active' | 'draft' | 'archived' | 'review';
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  author: { name: string; initials: string };
  date: string;
  views: number;
}

const ALL_ITEMS: ListItem[] = [
  {
    id: '1',
    name: 'Design System Documentation',
    description: 'Comprehensive guide for all UI components and patterns used across products.',
    category: 'Design',
    status: 'active',
    priority: 'high',
    tags: ['UI', 'Docs'],
    author: { name: 'Alice J.', initials: 'AJ' },
    date: 'Mar 10, 2026',
    views: 1240,
  },
  {
    id: '2',
    name: 'API Integration Guide',
    description: 'Step-by-step instructions for integrating third-party APIs into the platform.',
    category: 'Engineering',
    status: 'active',
    priority: 'high',
    tags: ['API', 'Backend'],
    author: { name: 'Bob M.', initials: 'BM' },
    date: 'Mar 8, 2026',
    views: 876,
  },
  {
    id: '3',
    name: 'Q1 Marketing Campaign',
    description: 'Campaign assets and copy for the first quarter product launch.',
    category: 'Marketing',
    status: 'draft',
    priority: 'medium',
    tags: ['Campaign', 'Copy'],
    author: { name: 'Carol W.', initials: 'CW' },
    date: 'Mar 5, 2026',
    views: 342,
  },
  {
    id: '4',
    name: 'User Research Report',
    description: 'Findings from 50 user interviews conducted in February 2026.',
    category: 'Research',
    status: 'review',
    priority: 'medium',
    tags: ['UX', 'Research'],
    author: { name: 'David L.', initials: 'DL' },
    date: 'Mar 3, 2026',
    views: 589,
  },
  {
    id: '5',
    name: 'Onboarding Flow Redesign',
    description: 'Revised onboarding experience based on drop-off analysis.',
    category: 'Design',
    status: 'active',
    priority: 'high',
    tags: ['UX', 'Onboarding'],
    author: { name: 'Eva C.', initials: 'EC' },
    date: 'Feb 28, 2026',
    views: 2100,
  },
  {
    id: '6',
    name: 'Performance Audit 2026',
    description: 'Lighthouse and Core Web Vitals audit for all major pages.',
    category: 'Engineering',
    status: 'archived',
    priority: 'low',
    tags: ['Performance', 'SEO'],
    author: { name: 'Frank N.', initials: 'FN' },
    date: 'Feb 20, 2026',
    views: 430,
  },
  {
    id: '7',
    name: 'Brand Guidelines v3',
    description: 'Updated brand identity guidelines including new color palette and typography.',
    category: 'Design',
    status: 'active',
    priority: 'medium',
    tags: ['Brand', 'Design'],
    author: { name: 'Alice J.', initials: 'AJ' },
    date: 'Feb 15, 2026',
    views: 3200,
  },
  {
    id: '8',
    name: 'Security Compliance Checklist',
    description: 'SOC 2 compliance requirements and implementation checklist.',
    category: 'Engineering',
    status: 'review',
    priority: 'high',
    tags: ['Security', 'Compliance'],
    author: { name: 'Bob M.', initials: 'BM' },
    date: 'Feb 10, 2026',
    views: 654,
  },
];

const STATUS_CONFIG: Record<
  string,
  { variant: 'success' | 'secondary' | 'warning' | 'info'; label: string }
> = {
  active: { variant: 'success', label: 'Active' },
  draft: { variant: 'secondary', label: 'Draft' },
  archived: { variant: 'secondary', label: 'Archived' },
  review: { variant: 'warning', label: 'In Review' },
};

const PRIORITY_CONFIG: Record<string, { color: string; label: string }> = {
  high: { color: 'bg-red-100 text-red-700', label: 'High' },
  medium: { color: 'bg-amber-100 text-amber-700', label: 'Medium' },
  low: { color: 'bg-gray-100 text-gray-600', label: 'Low' },
};

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon className="h-4 w-4" /> },
  { id: 'users', label: 'Users', icon: <UsersIcon className="h-4 w-4" /> },
  { id: 'analytics', label: 'Analytics', icon: <ChartBarIcon className="h-4 w-4" /> },
  { id: 'documents', label: 'Documents', icon: <DocumentTextIcon className="h-4 w-4" /> },
  { id: 'settings', label: 'Settings', icon: <CogIcon className="h-4 w-4" /> },
];

const PAGE_SIZE = 5;

export default function ListViewLayout() {
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('documents');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const filtered = useMemo(() => {
    return ALL_ITEMS.filter((item) => {
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchCat = categoryFilter === 'all' || item.category === categoryFilter;
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchSearch && matchCat && matchStatus;
    });
  }, [search, categoryFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === paginated.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paginated.map((i) => i.id)));
    }
  };

  const simulateLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  // Theme-derived classes
  const pageBg = isNavy ? 'bg-[#00001a]' : 'bg-gray-50';
  const topbarBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const topbarText = isNavy ? 'text-white/80' : 'text-gray-500';
  const topbarHover = isNavy
    ? 'hover:text-white hover:bg-white/10'
    : 'hover:text-gray-700 hover:bg-gray-100';
  const topbarTitle = isNavy ? 'text-white' : 'text-gray-800';
  const pageTitle = isNavy ? 'text-white' : 'text-gray-900';
  const pageSubtitle = isNavy ? 'text-white/50' : 'text-gray-500';
  const cardBg = isNavy ? 'bg-[#000040] border-white/10' : 'bg-white border-gray-200';
  const listHeaderBg = isNavy ? 'bg-[#000060]/50' : 'bg-gray-50/50';
  const listHeaderBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const listHeaderText = isNavy ? 'text-white/40' : 'text-gray-500';
  const listRowDivide = isNavy ? 'divide-white/5' : 'divide-gray-50';
  const listRowHover = isNavy ? 'hover:bg-white/5' : 'hover:bg-gray-50/60';
  const listRowSelected = isNavy ? 'bg-blue-900/30' : 'bg-blue-50/60';
  const itemName = isNavy ? 'text-white' : 'text-gray-900';
  const itemDesc = isNavy ? 'text-white/50' : 'text-gray-500';
  const itemMeta = isNavy ? 'text-white/30' : 'text-gray-400';
  const categoryPill = isNavy ? 'text-white/60 bg-white/10' : 'text-gray-600 bg-gray-100';
  const authorText = isNavy ? 'text-white/60' : 'text-gray-600';
  const emptyIcon = isNavy ? 'text-white/20' : 'text-gray-300';
  const emptyTitle = isNavy ? 'text-white/50' : 'text-gray-500';
  const emptyDesc = isNavy ? 'text-white/30' : 'text-gray-400';
  const paginationBorder = isNavy ? 'border-white/10' : 'border-gray-100';
  const paginationText = isNavy ? 'text-white/40' : 'text-gray-500';
  const dropdownRowBtn = isNavy
    ? 'text-white/40 hover:text-white/80 hover:bg-white/10'
    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100';

  return (
    <div className={cn('flex h-screen overflow-hidden font-sans', pageBg)}>
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col bg-[#000040] text-white flex-shrink-0 transition-all duration-300 overflow-hidden',
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
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                activeNav === item.id
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/8'
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

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className={cn('h-14 border-b flex items-center px-4 gap-3 shrink-0', topbarBg)}>
          <button
            onClick={() => setSidebarCollapsed((v) => !v)}
            className={cn('p-1.5 rounded-md transition-colors', topbarText, topbarHover)}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <h1 className={cn('text-sm font-semibold', topbarTitle)}>Documents</h1>
          </div>
          <button
            className={cn('p-1.5 rounded-md transition-colors relative', topbarText, topbarHover)}
          >
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <Avatar initials="SA" size="sm" />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className={cn('text-xl font-bold', pageTitle)}>All Documents</h2>
              <p className={cn('text-sm mt-0.5', pageSubtitle)}>
                {filtered.length} document{filtered.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<ArrowDownTrayIcon className="h-3.5 w-3.5" />}
              >
                Export
              </Button>
              <Button variant="primary" size="sm" leftIcon={<PlusIcon className="h-3.5 w-3.5" />}>
                New Document
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex-1 min-w-48 max-w-xs">
              <Input
                placeholder="Search documents…"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                leftElement={<MagnifyingGlassIcon className="h-4 w-4" />}
                clearable
                onClear={() => handleSearch('')}
              />
            </div>
            <div className="w-40">
              <Select
                value={categoryFilter}
                onChange={(value) => {
                  setCategoryFilter(Array.isArray(value) ? (value[0] ?? 'all') : value);
                  setCurrentPage(1);
                }}
                options={[
                  { value: 'all', label: 'All Categories' },
                  { value: 'Design', label: 'Design' },
                  { value: 'Engineering', label: 'Engineering' },
                  { value: 'Marketing', label: 'Marketing' },
                  { value: 'Research', label: 'Research' },
                ]}
              />
            </div>
            <div className="w-36">
              <Select
                value={statusFilter}
                onChange={(value) => {
                  setStatusFilter(Array.isArray(value) ? (value[0] ?? 'all') : value);
                  setCurrentPage(1);
                }}
                options={[
                  { value: 'all', label: 'All Statuses' },
                  { value: 'active', label: 'Active' },
                  { value: 'draft', label: 'Draft' },
                  { value: 'review', label: 'In Review' },
                  { value: 'archived', label: 'Archived' },
                ]}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<FunnelIcon className="h-3.5 w-3.5" />}
              onClick={simulateLoad}
            >
              Reload
            </Button>
            {selected.size > 0 && (
              <div className="flex items-center gap-2 ml-auto">
                <Badge variant="primary" size="sm">
                  {selected.size} selected
                </Badge>
                <Button variant="outline" size="sm">
                  Bulk Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* List */}
          <div className={cn('rounded-lg border overflow-hidden', cardBg)}>
            {/* List Header */}
            <div
              className={cn(
                'flex items-center gap-3 px-5 py-3 border-b',
                listHeaderBg,
                listHeaderBorder
              )}
            >
              <Checkbox
                checked={selected.size === paginated.length && paginated.length > 0}
                indeterminate={selected.size > 0 && selected.size < paginated.length}
                onChange={toggleAll}
                size="sm"
              />
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wide flex-1',
                  listHeaderText
                )}
              >
                Document
              </span>
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wide w-24 hidden md:block',
                  listHeaderText
                )}
              >
                Category
              </span>
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wide w-24 hidden lg:block',
                  listHeaderText
                )}
              >
                Status
              </span>
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wide w-20 hidden xl:block',
                  listHeaderText
                )}
              >
                Priority
              </span>
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wide w-24 hidden lg:block',
                  listHeaderText
                )}
              >
                Author
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide w-8" />
            </div>

            {/* Skeleton Loading */}
            {isLoading ? (
              <div className={cn('divide-y', listRowDivide)}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-4">
                    <Skeleton variant="rect" className="w-4 h-4 rounded" />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="text" className="h-4 w-48" />
                      <Skeleton variant="text" className="h-3 w-72" />
                    </div>
                    <Skeleton
                      variant="rect"
                      className="w-20 h-5 rounded-full hidden md:block"
                    />
                    <Skeleton
                      variant="rect"
                      className="w-16 h-5 rounded-full hidden lg:block"
                    />
                    <Skeleton
                      variant="rect"
                      className="w-16 h-5 rounded-full hidden xl:block"
                    />
                    <Skeleton variant="circle" className="w-7 h-7 hidden lg:block" />
                    <Skeleton variant="rect" className="w-6 h-6 rounded" />
                  </div>
                ))}
              </div>
            ) : paginated.length === 0 ? (
              <div className="py-16 text-center">
                <MagnifyingGlassIcon className={cn('h-10 w-10 mx-auto mb-3', emptyIcon)} />
                <p className={cn('text-sm font-medium', emptyTitle)}>No documents found</p>
                <p className={cn('text-xs mt-1', emptyDesc)}>
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className={cn('divide-y', listRowDivide)}>
                {paginated.map((item) => {
                  const statusInfo = STATUS_CONFIG[item.status];
                  const priorityInfo = PRIORITY_CONFIG[item.priority];
                  const isSelected = selected.has(item.id);

                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'flex items-center gap-3 px-5 py-4 transition-colors',
                        isSelected ? listRowSelected : listRowHover
                      )}
                    >
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleSelect(item.id)}
                        size="sm"
                      />

                      {/* Main Info */}
                      <div className="flex-1 min-w-0">
                        <p className={cn('text-sm font-medium truncate mb-0.5', itemName)}>
                          {item.name}
                        </p>
                        <p className={cn('text-xs truncate mb-1.5', itemDesc)}>
                          {item.description}
                        </p>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {item.tags.map((tag) => (
                            <Tag key={tag} size="sm" color="blue">
                              {tag}
                            </Tag>
                          ))}
                          <span className={cn('text-xs ml-1', itemMeta)}>
                            {item.views.toLocaleString('en-US')} views · {item.date}
                          </span>
                        </div>
                      </div>

                      {/* Category */}
                      <div className="w-24 hidden md:block">
                        <span className={cn('text-xs px-2 py-0.5 rounded-full', categoryPill)}>
                          {item.category}
                        </span>
                      </div>

                      {/* Status */}
                      <div className="w-24 hidden lg:block">
                        <Badge variant={statusInfo.variant} size="sm" dot>
                          {statusInfo.label}
                        </Badge>
                      </div>

                      {/* Priority */}
                      <div className="w-20 hidden xl:block">
                        <span
                          className={cn(
                            'text-xs px-2 py-0.5 rounded-full font-medium',
                            priorityInfo.color
                          )}
                        >
                          {priorityInfo.label}
                        </span>
                      </div>

                      {/* Author */}
                      <div className="w-24 hidden lg:flex items-center gap-1.5">
                        <Avatar initials={item.author.initials} size="xs" />
                        <span className={cn('text-xs truncate', authorText)}>
                          {item.author.name}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="w-8">
                        <Dropdown
                          trigger={
                            <button
                              className={cn('p-1 rounded-md transition-colors', dropdownRowBtn)}
                            >
                              <EllipsisVerticalIcon className="h-4 w-4" />
                            </button>
                          }
                          items={[
                            {
                              id: `view-${item.id}`,
                              label: 'View',
                              icon: <EyeIcon className="h-3.5 w-3.5" />,
                              onClick: () => {},
                            },
                            {
                              id: `edit-${item.id}`,
                              label: 'Edit',
                              icon: <PencilIcon className="h-3.5 w-3.5" />,
                              onClick: () => {},
                            },
                            { id: `sep-${item.id}`, separator: true },
                            {
                              id: `del-${item.id}`,
                              label: 'Delete',
                              icon: <TrashIcon className="h-3.5 w-3.5" />,
                              onClick: () => {},
                              danger: true,
                            },
                          ]}
                          align="right"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && filtered.length > 0 && (
              <div
                className={cn(
                  'px-5 py-3.5 border-t flex items-center justify-between',
                  paginationBorder
                )}
              >
                <p className={cn('text-xs', paginationText)}>
                  Showing {Math.min((currentPage - 1) * PAGE_SIZE + 1, filtered.length)}–
                  {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length}
                </p>
                <Pagination
                  page={currentPage}
                  total={filtered.length}
                  pageSize={PAGE_SIZE}
                  onPageChange={setCurrentPage}
                  size="sm"
                  showTotal={false}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
