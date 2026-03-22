declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace React {
  type ReactNode = any;
  type ReactElement = any;
  interface FC<P = any> {
    (props: P): any;
    displayName?: string;
  }
  type HTMLAttributes<T = any> = any;
  type InputHTMLAttributes<T = any> = any;
  type TextareaHTMLAttributes<T = any> = any;
  type ButtonHTMLAttributes<T = any> = any;
}

declare module 'react' {
  const React: any;
  export default React;
  export function forwardRef<T = any, P = any>(render: any): any;
  export function useState<T = any>(initial: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useRef<T = any>(initial?: T): { current: T };
  export function useId(): string;
  export function useEffect(effect: any, deps?: any[]): void;
  export function useMemo<T = any>(factory: () => T, deps?: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps?: any[]): T;
  export const memo: any;
  export type ReactNode = React.ReactNode;
  export type ReactElement = React.ReactElement;
  export type HTMLAttributes<T = any> = React.HTMLAttributes<T>;
  export type InputHTMLAttributes<T = any> = React.InputHTMLAttributes<T>;
  export type TextareaHTMLAttributes<T = any> = React.TextareaHTMLAttributes<T>;
  export type ButtonHTMLAttributes<T = any> = React.ButtonHTMLAttributes<T>;
  export interface FC<P = any> {
    (props: P): any;
    displayName?: string;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'lucide-react' {
  export const Check: any;
  export const ChevronLeft: any;
  export const ChevronRight: any;
  export const ChevronDown: any;
  export const ChevronUp: any;
  export const Home: any;
  export const X: any;
  export const User: any;
  export const UserRound: any;
  export const Search: any;
  export const Bell: any;
  export const Settings: any;
  export const LogOut: any;
  export const Menu: any;
  export const Plus: any;
  export const Minus: any;
  export const Trash: any;
  export const Edit: any;
  export const Eye: any;
  export const EyeOff: any;
  export const Calendar: any;
  export const Clock: any;
  export const Filter: any;
  export const Download: any;
  export const Upload: any;
  export const RefreshCw: any;
  export const RotateCcw: any;
  export const Info: any;
  export const AlertTriangle: any;
  export const AlertCircle: any;
  export const CheckCircle: any;
  export const CheckCircle2: any;
  export const XCircle: any;
  export const ArrowLeft: any;
  export const ArrowRight: any;
  export const ArrowUp: any;
  export const ArrowDown: any;
  export const ExternalLink: any;
  export const Copy: any;
  export const Loader2: any;
  export const Ellipsis: any;
  const allIcons: any;
  export default allIcons;
}

declare module '@heroicons/react/24/outline' {
  const icons: any;
  export = icons;
}

declare module '@heroicons/react/24/solid' {
  const icons: any;
  export = icons;
}

declare module 'class-variance-authority' {
  export const cva: any;
  export type VariantProps<T> = any;
}

declare module '@/utils/cn' {
  export const cn: (...inputs: any[]) => string;
}

declare module '@/hooks/useClickOutside' {
  export const useClickOutside: (ref: any, handler: () => void) => void;
}

declare module '@/*' {
  const mod: any;
  export default mod;
}