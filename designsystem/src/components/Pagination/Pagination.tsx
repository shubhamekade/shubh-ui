'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface PaginationProps {
  total: number;
  page: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  showPageSize?: boolean;
  showTotal?: boolean;
  showFirstLast?: boolean;
  siblingCount?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

function generatePages(current: number, total: number, siblings = 1): (number | '...')[] {
  const pages: (number | '...')[] = [];
  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);

  if (leftSibling > 2) {
    pages.push(1);
    pages.push('...');
  } else for (let i = 1; i < leftSibling; i++) pages.push(i);

  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);

  if (rightSibling < total - 1) {
    pages.push('...');
    pages.push(total);
  } else for (let i = rightSibling + 1; i <= total; i++) pages.push(i);

  return pages;
}

const sizeMap = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-8 w-8 text-sm',
  lg: 'h-9 w-9 text-base',
};

const Pagination: React.FC<PaginationProps> = ({
  total = 0,
  page,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSize = false,
  showTotal = true,
  showFirstLast = false,
  siblingCount = 1,
  className,
  size = 'md',
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = generatePages(page, totalPages, siblingCount);
  const btnClass = cn(
    'inline-flex items-center justify-center rounded-md border border-border font-medium transition-all duration-100',
    'hover:bg-accent hover:border-primary hover:text-accent-foreground',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-inherit',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
    sizeMap[size]
  );

  return (
    <div className={cn('flex items-center flex-wrap gap-3', className)}>
      {showTotal && (
        <span className="text-sm text-muted-foreground tabular-nums">
          {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total.toLocaleString()}
        </span>
      )}
      <div className="flex items-center gap-1 ml-auto">
        {showFirstLast && (
          <button
            type="button"
            onClick={() => onPageChange(1)}
            disabled={page === 1}
            className={btnClass}
            aria-label="First page"
          >
            <ChevronsLeft className="h-3.5 w-3.5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={btnClass}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {pages.map((p, i) =>
          p === '...' ? (
            <span
              key={`ellipsis-${i}`}
              className={cn(
                'inline-flex items-center justify-center text-muted-foreground',
                sizeMap[size]
              )}
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p as number)}
              aria-current={page === p ? 'page' : undefined}
              className={cn(
                btnClass,
                page === p &&
                  'bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground hover:border-primary/90'
              )}
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={btnClass}
          aria-label="Next page"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
        {showFirstLast && (
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            disabled={page === totalPages}
            className={btnClass}
            aria-label="Last page"
          >
            <ChevronsRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {showPageSize && onPageSizeChange && (
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="h-8 pl-2 pr-6 text-sm border border-border rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background text-foreground"
          aria-label="Rows per page"
        >
          {pageSizeOptions.map((s) => (
            <option key={s} value={s}>
              {s} / page
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
