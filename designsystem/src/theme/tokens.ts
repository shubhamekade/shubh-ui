import type { DesignTokens } from './types';

export const baseSpacingTokens = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '5xl': '3rem',
} as const;

export const baseRadiusTokens = {
  sm: '0.625rem',
  md: '0.875rem',
  lg: '1.125rem',
  xl: '1.5rem',
  pill: '999px',
} as const;

export const baseTypographyTokens = {
  fontSans:
    "'Plus Jakarta Sans', 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontDisplay:
    "'Plus Jakarta Sans', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'IBM Plex Mono', monospace",
  textXs: '0.75rem',
  leadingXs: '1rem',
  textSm: '0.875rem',
  leadingSm: '1.25rem',
  textBase: '1rem',
  leadingBase: '1.5rem',
  textLg: '1.125rem',
  leadingLg: '1.75rem',
  textXl: '1.375rem',
  leadingXl: '1.875rem',
  text2xl: '1.75rem',
  leading2xl: '2.125rem',
  text3xl: '2.25rem',
  leading3xl: '2.75rem',
} as const;

export function createTokens(colors: DesignTokens['colors']): DesignTokens {
  return {
    colors,
    spacing: { ...baseSpacingTokens },
    radius: { ...baseRadiusTokens },
    typography: { ...baseTypographyTokens },
  };
}