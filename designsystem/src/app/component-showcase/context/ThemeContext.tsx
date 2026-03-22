'use client';

import React, { createContext, useContext } from 'react';

import { ThemeProvider, useTheme } from '@/theme';

export type ShowcaseTheme = 'navy' | 'light' | 'graphite';

interface ThemeContextValue {
  theme: ShowcaseTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'navy',
  toggleTheme: () => {},
});

export function useShowcaseTheme() {
  return useContext(ThemeContext);
}

export function ShowcaseThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="navy" storageKey="showcase-theme">
      <ShowcaseThemeBridge>{children}</ShowcaseThemeBridge>
    </ThemeProvider>
  );
}

function ShowcaseThemeBridge({ children }: { children: React.ReactNode }) {
  const { themeId, setTheme } = useTheme();
  const theme = (themeId as ShowcaseTheme) || 'navy';

  const toggleTheme = () => {
    setTheme(theme === 'navy' ? 'light' : 'navy');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
