'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ShowcaseTheme = 'navy' | 'light';

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

const STORAGE_KEY = 'showcase-theme';

export function ShowcaseThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ShowcaseTheme>('navy');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage first, fall back to system preference
    const stored = localStorage.getItem(STORAGE_KEY) as ShowcaseTheme | null;
    if (stored === 'navy' || stored === 'light') {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'navy' : 'light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'navy');
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ShowcaseTheme = prev === 'navy' ? 'light' : 'navy';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  // Avoid flash before mount
  if (!mounted) return null;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
