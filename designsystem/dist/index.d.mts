import * as React$1 from 'react';
import React__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, HTMLAttributes, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "destructive" | "navy" | "success" | "warning" | "link" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
    fullWidth?: boolean | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
}

declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: "default" | "error" | "success";
    size?: "sm" | "md" | "lg";
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    clearable?: boolean;
    onClear?: () => void;
    error?: string | boolean;
    success?: string;
    hint?: string;
    label?: string;
    required?: boolean;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const inputVariants: (props?: ({
    variant?: "success" | "default" | "error" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

declare const cardVariants: (props?: ({
    variant?: "primary" | "outline" | "ghost" | "navy" | "default" | "elevated" | "outlined" | "filled" | "accent" | null | undefined;
    padding?: "sm" | "md" | "lg" | "xl" | "none" | null | undefined;
    hoverable?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React__default.ReactNode;
    footer?: React__default.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnOverlay?: boolean;
    closeOnEsc?: boolean;
    showCloseButton?: boolean;
    className?: string;
}
declare const Modal: React__default.FC<ModalProps>;

interface TableColumn<T = Record<string, unknown>> {
    key: string;
    header: React__default.ReactNode;
    cell?: (row: T, index: number) => React__default.ReactNode;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
}
interface TableProps<T = Record<string, unknown>> {
    columns: TableColumn<T>[];
    data: T[];
    keyExtractor: (row: T, index: number) => string;
    sortKey?: string;
    sortDir?: 'asc' | 'desc';
    onSort?: (key: string) => void;
    onRowClick?: (row: T) => void;
    striped?: boolean;
    hoverable?: boolean;
    bordered?: boolean;
    compact?: boolean;
    className?: string;
    emptyMessage?: string;
    loading?: boolean;
}
declare function Table<T = Record<string, unknown>>({ columns, data, keyExtractor, sortKey, sortDir, onSort, onRowClick, striped, hoverable, bordered, compact, className, emptyMessage, loading, }: TableProps<T>): react_jsx_runtime.JSX.Element;
declare namespace Table {
    var displayName: string;
}

interface PaginationProps {
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
declare const Pagination: React__default.FC<PaginationProps>;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    description?: string;
    icon?: React__default.ReactNode;
}
interface SelectProps {
    options: SelectOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    placeholder?: string;
    label?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    id?: string;
    required?: boolean;
}
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hint?: string;
    error?: string;
    success?: string;
    required?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    showCount?: boolean;
    maxLength?: number;
}
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const badgeVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "navy" | "success" | "warning" | "default" | "info" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    dot?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React__default.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    dot?: boolean;
    dotColor?: string;
    removable?: boolean;
    onRemove?: () => void;
}
declare const Badge: React__default.FC<BadgeProps>;

interface TabItem {
    id: string;
    label: React__default.ReactNode;
    content: React__default.ReactNode;
    disabled?: boolean;
    badge?: string | number;
    icon?: React__default.ReactNode;
}
interface TabsProps {
    items: TabItem[];
    defaultTab?: string;
    activeTab?: string;
    onChange?: (id: string) => void;
    variant?: 'line' | 'pill' | 'enclosed' | 'soft';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    className?: string;
    contentClassName?: string;
}
declare const Tabs: React__default.FC<TabsProps>;

interface AccordionItem {
    id: string;
    title: React__default.ReactNode;
    content: React__default.ReactNode;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    badge?: React__default.ReactNode;
}
interface AccordionProps {
    items: AccordionItem[];
    defaultOpen?: string[];
    multiple?: boolean;
    variant?: 'default' | 'bordered' | 'flush' | 'filled';
    className?: string;
}
declare const Accordion: React__default.FC<AccordionProps>;

declare const alertVariants: (props?: ({
    variant?: "destructive" | "navy" | "success" | "warning" | "info" | "neutral" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: React__default.ReactNode;
    action?: React__default.ReactNode;
}
declare const Alert: React__default.FC<AlertProps>;

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
    variant?: "primary" | "navy" | "icon" | "image" | "initials" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    initials?: string;
    status?: 'online' | 'offline' | 'busy' | 'away';
}
declare const Avatar: React__default.FC<AvatarProps>;

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React__default.ReactNode;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React__default.ReactNode;
    showHome?: boolean;
    maxItems?: number;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const Breadcrumb: React__default.FC<BreadcrumbProps>;

type CalendarSize = 'sm' | 'md' | 'lg';
type CalendarView = 'day' | 'month' | 'year';
type CalendarTheme = 'navy' | 'light';
interface CalendarProps {
    /** Controlled selected date */
    value?: Date | null;
    /** Default selected date (uncontrolled) */
    defaultValue?: Date | null;
    /** Called when a date is selected */
    onChange?: (date: Date) => void;
    /** Size variant */
    size?: CalendarSize;
    /** Theme variant */
    theme?: CalendarTheme;
    /** Initial view to show */
    initialView?: CalendarView;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Additional class names */
    className?: string;
    /** ARIA label for the calendar */
    'aria-label'?: string;
}
declare function Calendar({ value, defaultValue, onChange, size, theme, initialView, minDate, maxDate, className, 'aria-label': ariaLabel, }: CalendarProps): react_jsx_runtime.JSX.Element;

declare const calendarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const calendarCellVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    selected?: boolean | null | undefined;
    outside?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface CheckboxProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    indeterminate?: boolean;
    error?: string;
}
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface DividerProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: React__default.ReactNode;
    labelAlign?: 'left' | 'center' | 'right';
    variant?: 'solid' | 'dashed' | 'dotted';
    thickness?: 'thin' | 'medium' | 'thick';
}
declare const Divider: React__default.FC<DividerProps>;

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React__default.ReactNode;
    footer?: React__default.ReactNode;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'full';
    closeOnOverlay?: boolean;
    closeOnEsc?: boolean;
    showCloseButton?: boolean;
    className?: string;
}
declare const Drawer: React__default.FC<DrawerProps>;

interface DropdownItem {
    id: string;
    label: React__default.ReactNode;
    icon?: React__default.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    danger?: boolean;
    checked?: boolean;
    separator?: false;
    onClick?: () => void;
    children?: DropdownItem[];
}
interface DropdownSeparator {
    id: string;
    separator: true;
    label?: string;
}
type DropdownMenuItem = DropdownItem | DropdownSeparator;
interface DropdownProps {
    trigger: React__default.ReactNode;
    items: DropdownMenuItem[];
    align?: 'left' | 'right';
    className?: string;
    menuClassName?: string;
}
declare const Dropdown: React__default.FC<DropdownProps>;

declare const labelVariants: (props?: ({
    variant?: "default" | "error" | "muted" | null | undefined;
    required?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
}
declare const Label: React__default.ForwardRefExoticComponent<LabelProps & React__default.RefAttributes<HTMLLabelElement>>;

declare const progressTrackVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressTrackVariants> {
    value: number;
    max?: number;
    color?: 'primary' | 'success' | 'warning' | 'destructive' | 'navy';
    showLabel?: boolean;
    label?: string;
    animated?: boolean;
    striped?: boolean;
}
declare const Progress: React__default.FC<ProgressProps>;

interface RadioProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    error?: string;
}
declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

type SortDirection = 'asc' | 'desc' | null;
type FetchParams = {
    page: number;
    pageSize: number;
    search: string;
    sortField: string | null;
    sortDirection: SortDirection;
    status: 'active' | 'closed';
};
type FetchResult<T> = {
    data: T[];
    total: number;
};
type ServerDataTableTheme = 'navy' | 'light';
interface ServerDataTableProps<T extends Record<string, unknown>> {
    fetchData: (params: FetchParams) => Promise<FetchResult<T>>;
    columns: ColumnDef<T>[];
    keyExtractor: (row: T) => string;
    pageSize?: number;
    renderExpandedRow?: (row: T, note: string, onNoteChange: (v: string) => void, onApprove: () => void, onReject: () => void) => React__default.ReactNode;
    onApprove?: (row: T, note: string) => void;
    onReject?: (row: T, note: string) => void;
    appliedDateField?: keyof T;
    className?: string;
    theme?: ServerDataTableTheme;
}
type ColumnDef<T> = {
    key: string;
    header: string;
    sortable?: boolean;
    cell?: (row: T) => React__default.ReactNode;
    width?: string;
};
declare function ServerDataTable<T extends Record<string, unknown>>({ fetchData, columns, keyExtractor, pageSize, renderExpandedRow, onApprove, onReject, appliedDateField, className, theme, }: ServerDataTableProps<T>): react_jsx_runtime.JSX.Element;

interface SkeletonProps extends React__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'text' | 'circle' | 'rect' | 'card';
    width?: string | number;
    height?: string | number;
    lines?: number;
    animated?: boolean;
}
declare const Skeleton: React__default.FC<SkeletonProps>;
declare const SkeletonCard: React__default.FC<{
    className?: string;
}>;

declare const spinnerVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "danger" | "success" | "warning" | "muted" | "white" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SpinnerProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof spinnerVariants> {
    label?: string;
}
declare const Spinner: React__default.FC<SpinnerProps>;

interface SwitchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    label?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    labelPlacement?: 'left' | 'right';
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

interface TagProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outlined' | 'filled' | 'navy';
    color?: 'default' | 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'pink';
    removable?: boolean;
    onRemove?: () => void;
    icon?: React__default.ReactNode;
}
declare const Tag: React__default.FC<TagProps>;

interface TooltipProps {
    content: React__default.ReactNode;
    children: React__default.ReactElement;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    maxWidth?: string;
    disabled?: boolean;
}
declare const Tooltip: React__default.FC<TooltipProps>;

interface TopbarProps extends HTMLAttributes<HTMLElement> {
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
declare const Topbar: React$1.ForwardRefExoticComponent<TopbarProps & React$1.RefAttributes<HTMLElement>>;

interface AdminSidebarProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    onToggle?: () => void;
    navigation?: NavItem[];
    activeItem?: string;
    onNavigate?: (item: string) => void;
}
interface NavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    children?: NavItem[];
}
declare const AdminSidebar: React$1.ForwardRefExoticComponent<AdminSidebarProps & React$1.RefAttributes<HTMLElement>>;

interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: ReactNode;
    trend?: "up" | "down" | null;
    trendPercent?: number;
    trendLabel?: string;
    variant?: "default" | "primary" | "success" | "warning" | "danger";
}
declare const StatsCard: React$1.ForwardRefExoticComponent<StatsCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface NavbarProps extends HTMLAttributes<HTMLElement> {
    sticky?: boolean;
}
declare const Navbar: React$1.ForwardRefExoticComponent<NavbarProps & React$1.RefAttributes<HTMLElement>>;

interface SidebarProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
}
declare const Sidebar: React$1.ForwardRefExoticComponent<SidebarProps & React$1.RefAttributes<HTMLElement>>;

/**
 * useClickOutside — fires callback when user clicks outside the referenced element.
 */
declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, callback: () => void): void;

/**
 * useDebounce — delays updating value until after delay ms.
 */
declare function useDebounce<T>(value: T, delay?: number): T;

/**
 * useToggle — simple boolean toggle hook.
 * @param initialValue - initial state (default false)
 * @returns [value, toggle, setOn, setOff, setValue]
 */
declare function useToggle(initialValue?: boolean): [
    boolean,
    () => void,
    () => void,
    () => void,
    (v: boolean) => void
];

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, type AccordionProps, Button as AdminButton, Card as AdminCard, CardContent as AdminCardContent, CardDescription as AdminCardDescription, CardFooter as AdminCardFooter, CardHeader as AdminCardHeader, CardTitle as AdminCardTitle, Input as AdminInput, Pagination as AdminPagination, Select as AdminSelect, AdminSidebar, type AdminSidebarProps, Table as AdminTable, Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonProps, Calendar, type CalendarProps, type CalendarSize, type CalendarTheme, type CalendarView, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Checkbox, type CheckboxProps, type ColumnDef, Divider, type DividerProps, Drawer, type DrawerProps, Dropdown, type DropdownProps, type FetchParams, type FetchResult, Input, type InputProps, Label, type LabelProps, Modal, type ModalProps, type NavItem, Navbar, type NavbarProps, Pagination, type PaginationProps, Progress, type ProgressProps, Radio, type RadioProps, Select, type SelectProps, ServerDataTable, type ServerDataTableProps, type ServerDataTableTheme, Sidebar, type SidebarProps, Skeleton, SkeletonCard, type SkeletonProps, type SortDirection, Spinner, type SpinnerProps, StatsCard, type StatsCardProps, Switch, type SwitchProps, Table, type TableProps, Tabs, type TabsProps, Tag, type TagProps, Textarea, type TextareaProps, Tooltip, type TooltipProps, Topbar, type TopbarProps, alertVariants, badgeVariants, buttonVariants, calendarCellVariants, calendarVariants, cardVariants, cn, inputVariants, useClickOutside, useDebounce, useToggle };
