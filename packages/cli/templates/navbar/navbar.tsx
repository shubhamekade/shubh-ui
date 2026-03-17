import { cn } from "@/utils/cn";

export interface NavbarProps {
  title?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

export default function Navbar({ title, leftContent, rightContent, className }: NavbarProps) {
  return (
    <header className={cn("flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4", className)}>
      <div className="flex items-center gap-3">
        {leftContent}
        {title ? <h1 className="text-sm font-semibold text-slate-900">{title}</h1> : null}
      </div>
      <div className="flex items-center gap-2">{rightContent}</div>
    </header>
  );
}
