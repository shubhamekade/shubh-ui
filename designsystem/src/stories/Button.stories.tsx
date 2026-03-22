import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';

import { Button } from '@/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Create workspace',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithIcon: Story = {
  args: {
    leftIcon: <Search className="h-4 w-4" />,
    children: 'Search tokens',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Deployment healthy',
  },
};
