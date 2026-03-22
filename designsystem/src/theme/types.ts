export interface ColorTokens {
  background: string;
  foreground: string;
  surface: string;
  surfaceElevated: string;
  surfaceMuted: string;
  border: string;
  input: string;
  ring: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  destructiveForeground: string;
  destructiveSoft: string;
  destructiveBorder: string;
  success: string;
  successForeground: string;
  successSoft: string;
  successBorder: string;
  warning: string;
  warningForeground: string;
  warningSoft: string;
  warningBorder: string;
  info: string;
  infoForeground: string;
  infoSoft: string;
  infoBorder: string;
  overlay: string;
  shadow: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarAccent: string;
  sidebarBorder: string;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pill: string;
}

export interface TypographyTokens {
  fontSans: string;
  fontDisplay: string;
  fontMono: string;
  textXs: string;
  leadingXs: string;
  textSm: string;
  leadingSm: string;
  textBase: string;
  leadingBase: string;
  textLg: string;
  leadingLg: string;
  textXl: string;
  leadingXl: string;
  text2xl: string;
  leading2xl: string;
  text3xl: string;
  leading3xl: string;
}

export interface DesignTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  typography: TypographyTokens;
}

export interface DesignTheme {
  id: string;
  name: string;
  description?: string;
  tokens: DesignTokens;
}

export interface RuntimeThemeOverrides {
  colors?: Partial<ColorTokens>;
  radius?: Partial<RadiusTokens>;
}
