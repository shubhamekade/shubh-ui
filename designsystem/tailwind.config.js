/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/primitives/**/*.{js,ts,jsx,tsx,mdx}',
    './src/motion/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--ds-font-sans)'],
        display: ['var(--ds-font-display)'],
        mono: ['var(--ds-font-mono)'],
        code: ['var(--ds-font-mono)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        overlay: 'hsl(var(--overlay))',
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          elevated: 'hsl(var(--surface-elevated))',
          muted: 'hsl(var(--surface-muted))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          soft: 'hsl(var(--destructive-soft))',
          border: 'hsl(var(--destructive-border))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
          soft: 'hsl(var(--success-soft))',
          border: 'hsl(var(--success-border))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
          soft: 'hsl(var(--warning-soft))',
          border: 'hsl(var(--warning-border))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
          soft: 'hsl(var(--info-soft))',
          border: 'hsl(var(--info-border))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          border: 'hsl(var(--sidebar-border))',
        },
      },
      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
        xl: 'var(--ds-radius-xl)',
        '2xl': 'calc(var(--ds-radius-xl) + 0.5rem)',
        full: 'var(--ds-radius-pill)',
        DEFAULT: 'var(--radius)',
      },
      spacing: {
        xs: 'var(--ds-space-xs)',
        sm: 'var(--ds-space-sm)',
        md: 'var(--ds-space-md)',
        lg: 'var(--ds-space-lg)',
        xl: 'var(--ds-space-xl)',
        '2xl': 'var(--ds-space-2xl)',
        '3xl': 'var(--ds-space-3xl)',
        '4xl': 'var(--ds-space-4xl)',
        '5xl': 'var(--ds-space-5xl)',
        '18': '4.5rem',
      },
      fontSize: {
        xs: ['var(--ds-text-xs)', { lineHeight: 'var(--ds-leading-xs)' }],
        sm: ['var(--ds-text-sm)', { lineHeight: 'var(--ds-leading-sm)' }],
        base: ['var(--ds-text-base)', { lineHeight: 'var(--ds-leading-base)' }],
        lg: ['var(--ds-text-lg)', { lineHeight: 'var(--ds-leading-lg)' }],
        xl: ['var(--ds-text-xl)', { lineHeight: 'var(--ds-leading-xl)' }],
        '2xl': ['var(--ds-text-2xl)', { lineHeight: 'var(--ds-leading-2xl)' }],
        '3xl': ['var(--ds-text-3xl)', { lineHeight: 'var(--ds-leading-3xl)' }],
      },
      boxShadow: {
        /* Elevation system: sm → default, md → hover, lg → modals */
        card:    '0 1px 2px -1px hsl(var(--shadow-color) / 0.06), 0 1px 3px hsl(var(--shadow-color) / 0.04)',
        'card-md': '0 4px 12px -2px hsl(var(--shadow-color) / 0.10), 0 2px 6px -1px hsl(var(--shadow-color) / 0.06)',
        'card-lg': '0 20px 40px -8px hsl(var(--shadow-color) / 0.14), 0 8px 16px -4px hsl(var(--shadow-color) / 0.08)',
        dropdown:  '0 8px 24px -4px hsl(var(--shadow-color) / 0.14), 0 2px 8px -1px hsl(var(--shadow-color) / 0.06)',
        modal:     '0 24px 60px -8px hsl(var(--shadow-color) / 0.22), 0 8px 20px -4px hsl(var(--shadow-color) / 0.10)',
        inner:     'inset 0 1px 3px hsl(var(--shadow-color) / 0.08)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to:   { opacity: '0', transform: 'translateY(4px)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to:   { opacity: '0', transform: 'scale(0.96)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)' },
          to:   { transform: 'translateX(0)' },
        },
        'slide-in-bottom': {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to:   { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to:   { height: '0', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.4' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.18s ease-out',
        'fade-out':       'fade-out 0.18s ease-out',
        'scale-in':       'scale-in 0.2s cubic-bezier(0.16,1,0.3,1)',
        'scale-out':      'scale-out 0.15s ease-in',
        'slide-in-right': 'slide-in-right 0.22s cubic-bezier(0.16,1,0.3,1)',
        'slide-in-left':  'slide-in-left 0.22s cubic-bezier(0.16,1,0.3,1)',
        'slide-in-bottom':'slide-in-bottom 0.22s cubic-bezier(0.16,1,0.3,1)',
        shimmer:          'shimmer 1.8s linear infinite',
        'accordion-down': 'accordion-down 0.18s ease-out',
        'accordion-up':   'accordion-up 0.18s ease-out',
        'toast-in':       'toast-in 0.2s cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
};