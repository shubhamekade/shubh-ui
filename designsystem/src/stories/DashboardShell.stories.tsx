import type { Meta, StoryObj } from '@storybook/react';
import { Bell, LayoutDashboard, Settings, Users } from 'lucide-react';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/Card';
import { DashboardShell } from '@/index';

const meta = {
  title: 'Layouts/Dashboard Shell',
  component: DashboardShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DashboardShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DashboardShell
      sidebar={
        <div className="flex h-full flex-col p-lg">
          <div className="mb-xl flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Enterprise UI</p>
              <p className="text-xs text-sidebar-foreground/60">Runtime themed shell</p>
            </div>
            <Badge variant="primary">v2</Badge>
          </div>
          <div className="space-y-xs">
            {[LayoutDashboard, Users, Bell, Settings].map((Icon, index) => (
              <button
                key={index}
                type="button"
                className="flex w-full items-center gap-sm rounded-xl px-md py-sm text-sm transition-colors hover:bg-sidebar-accent"
              >
                <Icon className="h-4 w-4" />
                <span>{['Overview', 'Customers', 'Alerts', 'Settings'][index]}</span>
              </button>
            ))}
          </div>
        </div>
      }
      header={
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold">Operations</p>
            <p className="text-xs text-muted-foreground">Composable navbar + sidebar + content shell</p>
          </div>
          <Button size="sm">Invite user</Button>
        </div>
      }
      aside={
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Release Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-sm">
            <div className="rounded-xl border border-success-border bg-success-soft p-md text-success">
              18 services healthy
            </div>
            <div className="rounded-xl border border-warning-border bg-warning-soft p-md text-warning-foreground">
              3 items need review
            </div>
          </CardContent>
        </Card>
      }
    >
      <div className="grid gap-lg md:grid-cols-2 xl:grid-cols-3">
        {['Revenue', 'Conversion', 'Retention'].map((title) => (
          <Card key={title} variant="elevated">
            <CardHeader>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-foreground">98.4%</p>
              <p className="mt-2 text-sm text-muted-foreground">Token-based dashboard card content</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  ),
};
