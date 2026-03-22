import type { Preview } from '@storybook/react';
import React from 'react';

import '@/styles/tailwind.css';
import { ThemeProvider } from '@/theme';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        ThemeProvider,
        { defaultTheme: 'light', storageKey: 'storybook-theme' },
        React.createElement(
          'div',
          { className: 'min-h-screen bg-background p-6 text-foreground' },
          React.createElement(Story)
        )
      ),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      expanded: true,
    },
    layout: 'fullscreen',
  },
};

export default preview;
