# shubh-ui

Reusable React UI component library built with TypeScript, Tailwind CSS, and tsup.

## Install

```bash
npm install shubh-ui
```

Peer dependencies (required by consumer app):

```bash
npm install react react-dom
```

## Tailwind Requirement

This package uses Tailwind utility classes and does **not** bundle Tailwind.
Consumers must configure Tailwind in their React/Next.js app.

## Usage

```tsx
import { Button, Input, Label, Card, Navbar, Sidebar } from "shubh-ui";

export function Example() {
  return (
    <Card>
      <Label htmlFor="email" required>
        Email
      </Label>
      <Button variant="primary" size="lg" loading={false}>
        Save
      </Button>
      <Input id="email" placeholder="you@example.com" />
    </Card>
  );
}
```

## Admin Dashboard Usage

```tsx
import { Topbar, AdminSidebar, StatsCard, Table, Pagination } from "shubh-ui";
import { BarChart3, Users, TrendingUp } from "lucide-react";

export function AdminDashboard() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex h-screen">
      <AdminSidebar
        collapsed={false}
        activeItem="dashboard"
        navigation={[
          { id: "dashboard", label: "Dashboard", icon: <Home /> },
          { id: "users", label: "Users", icon: <Users /> },
          { id: "reports", label: "Reports", icon: <BarChart3 /> },
        ]}
      />
      <div className="flex-1 flex flex-col">
        <Topbar
          title="Dashboard"
          notifications={3}
          userName="John Doe"
          onSearchChange={(q) => console.log("Search:", q)}
        />
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Total Users"
              value="2,543"
              trend="up"
              trendPercent={12}
              icon={<Users className="h-6 w-6" />}
            />
            <StatsCard
              title="Revenue"
              value="$45,230"
              trend="up"
              trendPercent={8}
              icon={<TrendingUp className="h-6 w-6" />}
            />
          </div>
          <Table columns={columns} data={tableData} />
          <Pagination total={100} page={page} onPageChange={setPage} />
        </main>
      </div>
    </div>
  );
}
```

## Available Starter Exports

### Core Components
- Button
- Input
- Label
- Card
- Modal
- Badge
- Tabs
- Select
- Textarea

### Extended Components
- Accordion
- Alert
- Avatar
- Breadcrumb
- Calendar
- Checkbox
- Divider
- Drawer
- Dropdown
- Progress
- Radio
- ServerDataTable
- Skeleton
- Spinner
- Switch
- Tag
- Tooltip

### Data & Display
- Table
- Pagination
- Sidebar (layout)
- Navbar (layout)

### Admin Dashboard Components
- **Topbar** — Header with menu toggle, search, notifications, and user profile
- **AdminSidebar** — Collapsible sidebar navigation with icons and nested items
- **StatsCard** — KPI card with title, value, trend, and icon support
- **Form Components** — Input, Select, Textarea, Checkbox, Radio, Switch for admin forms
- **DataTable** — Sortable table with pagination and row actions
- **Pagination** — Page navigation with configurable steps

### Utilities & Hooks
- `cn()` — Tailwind class merger (clsx + tailwind-merge)
- `useToggle()` — Boolean state toggle
- `useDebounce()` — Debounce values
- `useClickOutside()` — Detect clicks outside element

## Token-Based Theming

This library uses semantic design tokens via CSS custom properties and Tailwind color aliases.

- Light theme: `:root` / `[data-theme="light"]`
- Navy dark theme: `[data-theme="navy"]` or `.dark`

Runtime switch example:

```tsx
document.documentElement.setAttribute("data-theme", "light");
document.documentElement.setAttribute("data-theme", "navy");
document.documentElement.classList.toggle("dark", true);
```

## Scripts

```bash
npm run dev           # tsup watch build
npm run build         # library build (esm + cjs + d.ts)
npm run lint          # lint
npm run dev:showcase  # Next.js showcase page
npm run build:showcase
```

## Build Output

`tsup` compiles from `src/index.ts` and generates:

- ESM
- CommonJS
- Type definitions
- Sourcemaps
