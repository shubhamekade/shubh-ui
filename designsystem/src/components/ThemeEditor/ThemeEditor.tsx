'use client';

import { RotateCcw } from 'lucide-react';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card';
import Input from '@/components/Input';
import { useTheme } from '@/theme';

const editableColorTokens = [
  { key: 'primary', label: 'Primary' },
  { key: 'accent', label: 'Accent' },
  { key: 'surface', label: 'Surface' },
  { key: 'surfaceElevated', label: 'Elevated Surface' },
  { key: 'sidebar', label: 'Sidebar' },
] as const;

export default function ThemeEditor() {
  const { theme, themeId, themes, setTheme, updateColor, updateRadius, resetOverrides } = useTheme();

  return (
    <Card variant="elevated" className="overflow-hidden border-border/80 bg-surface-elevated/90 shadow-card-md">
      <CardHeader className="border-b border-border/70 pb-lg">
        <div className="flex items-start justify-between gap-lg">
          <div>
            <CardTitle className="text-xl">Theme Editor</CardTitle>
            <CardDescription>
              Switch themes, tune tokens, and inspect the live system preview in real time.
            </CardDescription>
          </div>
          <Button variant="secondary" size="sm" onClick={resetOverrides} leftIcon={<RotateCcw className="h-4 w-4" />}>
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-xl pt-xl xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="grid gap-xl md:grid-cols-2">
          <div className="space-y-lg">
            <div>
              <p className="mb-sm text-sm font-semibold text-foreground">Theme Presets</p>
              <div className="grid gap-sm sm:grid-cols-3">
                {themes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTheme(item.id)}
                    className={[
                      'rounded-xl border px-lg py-md text-left transition-colors',
                      item.id === themeId
                        ? 'border-primary bg-accent text-accent-foreground'
                        : 'border-border bg-surface hover:bg-surface-muted',
                    ].join(' ')}
                  >
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-sm text-sm font-semibold text-foreground">Color Tokens</p>
              <div className="grid gap-md sm:grid-cols-2">
                {editableColorTokens.map((token) => (
                  <label key={token.key} className="flex items-center gap-md rounded-xl border border-border bg-surface p-md">
                    <input
                      type="color"
                      value={theme.tokens.colors[token.key]}
                      onChange={(event) => updateColor(token.key, event.target.value)}
                      className="h-11 w-11 rounded-lg border border-border bg-transparent p-1"
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{token.label}</span>
                      <span className="block truncate text-xs text-muted-foreground">{theme.tokens.colors[token.key]}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-sm flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Radius Scale</p>
                <Badge variant="outline">{theme.tokens.radius.md}</Badge>
              </div>
              <input
                type="range"
                min={6}
                max={32}
                step={1}
                value={parseInt(theme.tokens.radius.md, 10)}
                onChange={(event) => updateRadius('md', `${event.target.value}px`)}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <div className="space-y-md rounded-2xl border border-border bg-background p-lg">
            <p className="text-sm font-semibold text-foreground">Token Inspector</p>
            <Input label="Font Stack" value={theme.tokens.typography.fontSans} readOnly />
            <Input label="Spacing Scale" value={`${theme.tokens.spacing.sm} / ${theme.tokens.spacing.lg} / ${theme.tokens.spacing['2xl']}`} readOnly />
            <Input label="Border Radius" value={`${theme.tokens.radius.sm} / ${theme.tokens.radius.md} / ${theme.tokens.radius.lg}`} readOnly />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-lg shadow-card">
          <p className="mb-md text-sm font-semibold text-foreground">Live Preview</p>
          <div className="space-y-md rounded-2xl border border-border bg-surface p-lg shadow-card">
            <div className="flex items-center justify-between gap-sm">
              <div>
                <p className="text-sm font-semibold text-foreground">Quarterly Revenue</p>
                <p className="text-xs text-muted-foreground">Token-driven card, badge, button, and input states.</p>
              </div>
              <Badge variant="primary">Live</Badge>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="rounded-xl border border-border bg-surface-muted p-md">
                <p className="text-xs text-muted-foreground">Primary</p>
                <p className="mt-1 text-lg font-semibold text-foreground">$1.24M</p>
              </div>
              <div className="rounded-xl border border-success-border bg-success-soft p-md text-success">
                <p className="text-xs text-current/75">Growth</p>
                <p className="mt-1 text-lg font-semibold text-current">+18.4%</p>
              </div>
            </div>
            <Input label="Search" placeholder="Tokens update this instantly" />
            <div className="flex gap-sm">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}