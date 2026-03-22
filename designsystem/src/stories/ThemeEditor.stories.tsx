import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEditor } from '@/components/ThemeEditor';

const meta = {
  title: 'Foundation/Theme Editor',
  component: ThemeEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemeEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
