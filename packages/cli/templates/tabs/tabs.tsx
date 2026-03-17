import { useState } from "react";
import { cn } from "@/utils/cn";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
}: TabsProps) {
  const firstEnabled = items.find((item) => !item.disabled)?.id;
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabled ?? "");
  const activeValue = value ?? internalValue;

  const onSelect = (next: string) => {
    if (value === undefined) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  const activeTab = items.find((item) => item.id === activeValue) ?? items[0];

  return (
    <div className={cn("w-full", className)}>
      <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1" role="tablist" aria-orientation="horizontal">
        {items.map((item) => {
          const active = item.id === activeValue;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              disabled={item.disabled}
              onClick={() => onSelect(item.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition",
                active ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4" role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
}
