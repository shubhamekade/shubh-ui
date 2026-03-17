import { cn } from "@/utils/cn";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <nav className={cn("flex items-center justify-between gap-3", className)} aria-label="Pagination">
      <button
        type="button"
        onClick={() => canGoPrev && onPageChange(page - 1)}
        disabled={!canGoPrev}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-slate-600">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => canGoNext && onPageChange(page + 1)}
        disabled={!canGoNext}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}
