// Admin Dashboard Components
export { default as Topbar, type TopbarProps } from "./Topbar";
export { default as AdminSidebar, type AdminSidebarProps, type NavItem } from "./AdminSidebar";
export { default as StatsCard, type StatsCardProps } from "./StatsCard";

// Re-export commonly used components for admin dashboards (convenience)
export { default as AdminTable } from "../Table";
export { default as AdminPagination } from "../Pagination";
export { default as AdminInput } from "../Input";
export { default as AdminSelect } from "../Select";
export { default as AdminButton } from "../Button";
export {
	default as AdminCard,
	CardHeader as AdminCardHeader,
	CardTitle as AdminCardTitle,
	CardDescription as AdminCardDescription,
	CardContent as AdminCardContent,
	CardFooter as AdminCardFooter,
} from "../Card";
