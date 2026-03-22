'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { designThemeMap, designThemes } from './themes';
import type {
  ColorTokens,
  DesignTheme,
  RadiusTokens,
  RuntimeThemeOverrides,
} from './types';

interface ThemeContextValue {
  themeId: string;
  theme: DesignTheme;
  themes: DesignTheme[];
  overrides: RuntimeThemeOverrides;
  setTheme: (themeId: string) => void;
  updateColor: (token: keyof ColorTokens, value: string) => void;
  updateRadius: (token: keyof RadiusTokens, value: string) => void;
  resetOverrides: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function normalizeHex(value: string) {
  const input = value.trim();
  const hex = input.startsWith('#') ? input.slice(1) : input;
  if (hex.length === 3) {
    return `#${hex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')}`;
  }
  return `#${hex.slice(0, 6)}`;
}

function hexToHsl(hexValue: string) {
  const hex = normalizeHex(hexValue).replace('#', '');
  const red = parseInt(hex.slice(0, 2), 16) / 255;
  const green = parseInt(hex.slice(2, 4), 16) / 255;
  const blue = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;

  if (max === min) {
    return `0 0% ${Math.round(lightness * 100)}%`;
  }

  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }

  hue /= 6;

  return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`;
}

function mergeTheme(theme: DesignTheme, overrides: RuntimeThemeOverrides): DesignTheme {
  return {
    ...theme,
    tokens: {
      ...theme.tokens,
      colors: {
        ...theme.tokens.colors,
        ...overrides.colors,
      },
      radius: {
        ...theme.tokens.radius,
        ...overrides.radius,
      },
    },
  };
}

function applyThemeToRoot(root: HTMLElement, theme: DesignTheme) {
  const { colors, spacing, radius, typography } = theme.tokens;
  const variableMap: Record<string, string> = {
    '--background': hexToHsl(colors.background),
    '--foreground': hexToHsl(colors.foreground),
    '--surface': hexToHsl(colors.surface),
    '--surface-elevated': hexToHsl(colors.surfaceElevated),
    '--surface-muted': hexToHsl(colors.surfaceMuted),
    '--card': hexToHsl(colors.surface),
    '--card-foreground': hexToHsl(colors.foreground),
    '--popover': hexToHsl(colors.surfaceElevated),
    '--popover-foreground': hexToHsl(colors.foreground),
    '--border': hexToHsl(colors.border),
    '--input': hexToHsl(colors.input),
    '--ring': hexToHsl(colors.ring),
    '--primary': hexToHsl(colors.primary),
    '--primary-foreground': hexToHsl(colors.primaryForeground),
    '--secondary': hexToHsl(colors.secondary),
    '--secondary-foreground': hexToHsl(colors.secondaryForeground),
    '--accent': hexToHsl(colors.accent),
    '--accent-foreground': hexToHsl(colors.accentForeground),
    '--muted': hexToHsl(colors.muted),
    '--muted-foreground': hexToHsl(colors.mutedForeground),
    '--destructive': hexToHsl(colors.destructive),
    '--destructive-foreground': hexToHsl(colors.destructiveForeground),
    '--destructive-soft': hexToHsl(colors.destructiveSoft),
    '--destructive-border': hexToHsl(colors.destructiveBorder),
    '--success': hexToHsl(colors.success),
    '--success-foreground': hexToHsl(colors.successForeground),
    '--success-soft': hexToHsl(colors.successSoft),
    '--success-border': hexToHsl(colors.successBorder),
    '--warning': hexToHsl(colors.warning),
    '--warning-foreground': hexToHsl(colors.warningForeground),
    '--warning-soft': hexToHsl(colors.warningSoft),
    '--warning-border': hexToHsl(colors.warningBorder),
    '--info': hexToHsl(colors.info),
    '--info-foreground': hexToHsl(colors.infoForeground),
    '--info-soft': hexToHsl(colors.infoSoft),
    '--info-border': hexToHsl(colors.infoBorder),
    '--overlay': hexToHsl(colors.overlay),
    '--shadow-color': hexToHsl(colors.shadow),
    '--sidebar': hexToHsl(colors.sidebar),
    '--sidebar-foreground': hexToHsl(colors.sidebarForeground),
    '--sidebar-accent': hexToHsl(colors.sidebarAccent),
    '--sidebar-border': hexToHsl(colors.sidebarBorder),
    '--radius': radius.md,
    '--ds-radius-sm': radius.sm,
    '--ds-radius-md': radius.md,
    '--ds-radius-lg': radius.lg,
    '--ds-radius-xl': radius.xl,
    '--ds-radius-pill': radius.pill,
    '--ds-space-xs': spacing.xs,
    '--ds-space-sm': spacing.sm,
    '--ds-space-md': spacing.md,
    '--ds-space-lg': spacing.lg,
    '--ds-space-xl': spacing.xl,
    '--ds-space-2xl': spacing['2xl'],
    '--ds-space-3xl': spacing['3xl'],
    '--ds-space-4xl': spacing['4xl'],
    '--ds-space-5xl': spacing['5xl'],
    '--ds-font-sans': typography.fontSans,
    '--ds-font-display': typography.fontDisplay,
    '--ds-font-mono': typography.fontMono,
    '--ds-text-xs': typography.textXs,
    '--ds-leading-xs': typography.leadingXs,
    '--ds-text-sm': typography.textSm,
    '--ds-leading-sm': typography.leadingSm,
    '--ds-text-base': typography.textBase,
    '--ds-leading-base': typography.leadingBase,
    '--ds-text-lg': typography.textLg,
    '--ds-leading-lg': typography.leadingLg,
    '--ds-text-xl': typography.textXl,
    '--ds-leading-xl': typography.leadingXl,
    '--ds-text-2xl': typography.text2xl,
    '--ds-leading-2xl': typography.leading2xl,
    '--ds-text-3xl': typography.text3xl,
    '--ds-leading-3xl': typography.leading3xl,
  };

  root.dataset.theme = theme.id;
  root.classList.toggle('dark', theme.id !== 'light');

  Object.entries(variableMap).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  themes?: DesignTheme[];
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  themes = designThemes,
  storageKey = 'shubh-ui-theme',
}: ThemeProviderProps) {
  const [themeId, setThemeId] = useState(defaultTheme);
  const [overrides, setOverrides] = useState<RuntimeThemeOverrides>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedThemeId = window.localStorage.getItem(storageKey);
    const storedOverrides = window.localStorage.getItem(`${storageKey}:overrides`);

    if (storedThemeId && themes.some((theme) => theme.id === storedThemeId)) {
      setThemeId(storedThemeId);
    }

    if (storedOverrides) {
      try {
        setOverrides(JSON.parse(storedOverrides) as RuntimeThemeOverrides);
      } catch {
        window.localStorage.removeItem(`${storageKey}:overrides`);
      }
    }

    setMounted(true);
  }, [storageKey, themes]);

  const theme = useMemo(() => {
    const sourceTheme = themes.find((item) => item.id === themeId) ?? designThemeMap[defaultTheme] ?? themes[0];
    return mergeTheme(sourceTheme, overrides);
  }, [defaultTheme, overrides, themeId, themes]);

  useEffect(() => {
    if (!mounted) return;
    applyThemeToRoot(document.documentElement, theme);
    window.localStorage.setItem(storageKey, themeId);
    window.localStorage.setItem(`${storageKey}:overrides`, JSON.stringify(overrides));
  }, [mounted, overrides, storageKey, theme, themeId]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      themeId,
      theme,
      themes,
      overrides,
      setTheme: (nextThemeId) => setThemeId(nextThemeId),
      updateColor: (token, value) => {
        setOverrides((current) => ({
          ...current,
          colors: {
            ...current.colors,
            [token]: normalizeHex(value),
          },
        }));
      },
      updateRadius: (token, value) => {
        const numeric = parseFloat(value);
        const normalized = Number.isNaN(numeric)
          ? value
          : `${clamp(numeric, 2, 40)}px`;

        setOverrides((current) => ({
          ...current,
          radius: {
            ...current.radius,
            [token]: normalized,
          },
        }));
      },
      resetOverrides: () => setOverrides({}),
    }),
    [overrides, theme, themeId, themes]
  );

  if (!mounted) {
    return null;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}