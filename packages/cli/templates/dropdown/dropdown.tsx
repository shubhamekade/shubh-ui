import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface DropdownItem {
  id: string;
  label: string;
  onSelect?: () => void;
  disabled?: boolean;
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
}

export default function Dropdown({ trigger, items, align = "left", className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={rootRef} className={cn("relative inline-block", className)}>
      <button type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-haspopup="menu">
        {trigger}
      </button>

      {open ? (
        <div
          role="menu"
          className={cn(
            "absolute z-50 mt-2 min-w-40 rounded-md border border-slate-200 bg-white p-1 shadow-lg",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                item.onSelect?.();
                setOpen(false);
              }}
              className={cn(
                "block w-full rounded px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
