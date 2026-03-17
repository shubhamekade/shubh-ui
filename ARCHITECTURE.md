# Architecture & Extension Guide

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│               Developer's Project                       │
│  (Uses: @shubh/ui or @shubh/cli for scaffolding)      │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌──────────────────┐     ┌──────────────────┐
│  @shubh/ui       │     │  @shubh/cli      │
│  (Library)       │     │  (Scaffolding)   │
│                  │     │                  │
│ - Components     │     │ - Commands       │
│ - Layouts        │     │ - Templates      │
│ - Hooks          │     │ - Config System  │
│ - Utils          │     │                  │
└────────────┬─────┘     └────────┬─────────┘
             │                    │
             └────────┬───────────┘
                      │
             ┌────────▼────────┐
             │   Monorepo      │
             │  (packages/)    │
             └─────────────────┘
```

## Package Structure

### @shubh/ui - Component Library

**Purpose**: Pre-built, production-ready components

**Output**:
- ESM bundle (`dist/index.mjs`) - Modern tooling
- CJS bundle (`dist/index.js`) - Node/CommonJS
- Type definitions (`dist/index.d.ts`) - TypeScript

**Key Files**:
```
packages/ui/
├── src/
│   ├── components/     ← Component implementations
│   ├── layout/         ← Layout components
│   ├── hooks/          ← Custom React hooks
│   ├── utils/          ← Utilities (cn.ts, etc)
│   └── index.ts        ← Central exports
├── dist/               ← Build output
├── tsup.config.ts      ← Bundle configuration
└── package.json        ← Package metadata
```

**Export Pattern**:
```
src/index.ts
└── export * from "./components/Button"
└── export * from "./components/Input"
└── export * from "./layout/Navbar"
...
```

### @shubh/cli - CLI Tool

**Purpose**: Scaffold components into developer projects

**Key Workflow**:
1. User runs: `npx shubh-ui init`
2. CLI initializes project config
3. User runs: `npx shubh-ui add button`
4. CLI copies template to `components/ui/button/`

**Key Files**:
```
packages/cli/
├── src/
│   ├── commands/
│   │   ├── init.ts     ← Initialize command
│   │   └── add.ts      ← Add component command
│   ├── utils/
│   │   ├── config.ts   ← Config management
│   │   └── copyTemplate.ts ← Template copying
│   └── index.ts        ← CLI entry point
├── templates/          ← Component templates
│   ├── button/
│   ├── input/
│   ├── card/
│   ├── modal/
│   └── ...
└── package.json
```

## Component Architecture

### Component Template Structure

```
button/
├── button.tsx           ← Main component
├── button.types.ts      ← Types & variants
├── index.ts             ← Barrel export
└── README.md            ← Documentation
```

### Component Pattern

```tsx
// button.tsx
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, loading, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }))}
      disabled={loading}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
```

### Requirements

- ✅ **ForwardRef** - Support DOM refs
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Accessible** - WCAG compliance
- ✅ **Customizable** - Tailwind + cn()
- ✅ **Variants** - CVA (class-variance-authority)

## CLI Architecture

### Command Structure

```
shubh-ui
├── init        ← Initialize projects
├── add         ← Add components
└── --help      ← Help documentation
```

### Init Command Flow

```typescript
init()
├── getProjectRoot()
├── ensureNotInitialized()
├── createConfigFile()
│   └── Write shubh-ui.json
├── createDirectories()
│   └── Create components/ui
└── createUtilities()
    └── Create utils/cn.ts
```

### Add Command Flow

```typescript
add(components: string[])
├── validateComponents()
├── ensureInitialized()
└── for each component:
    ├── findTemplate()
    ├── copyTemplate()
    ├── generateIndex()
    └── reportSuccess()
```

## Extending the System

### Adding a New Component to Library

1. **Create component directory**:
```
components/
└── NewComponent/
    ├── NewComponent.tsx
    ├── NewComponent.types.ts
    ├── NewComponent.module.css (optional)
    └── index.ts
```

2. **Implement component** (`NewComponent.tsx`):
```tsx
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface NewComponentProps {
  // Props here
}

const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

NewComponent.displayName = "NewComponent";
export default NewComponent;
```

3. **Export** in `src/index.ts`:
```ts
export * from "./components/NewComponent";
```

4. **Build and test**:
```bash
npm run build
```

### Adding a New Template to CLI

1. **Create template directory**:
```
templates/
└── newcomponent/
    ├── newcomponent.tsx
    ├── newcomponent.types.ts
    └── README.md
```

2. **Create files** with copy-paste friendly code

3. **Update validated list** in `commands/add.ts`:
```typescript
const VALID_COMPONENTS = [
  "button",
  "input",
  "card",
  "newcomponent",  // Add here
  // ...
];
```

4. **Test CLI**:
```bash
npm run dev:cli
npx shubh-ui add newcomponent
```

## Build System

### tsup Configuration

```typescript
// packages/ui/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  outDir: "dist",
});
```

**Output**:
- `dist/index.mjs` - ES Modules
- `dist/index.cjs` - CommonJS
- `dist/index.d.ts` - TypeScript declarations
- `dist/index.mjs.map`, etc. - Source maps

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true
  }
}
```

## Publishing Workflow

### Pre-publish Checklist

- [ ] Build all packages: `npm run build`
- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Verify exports in src/index.ts
- [ ] Test locally: `npm link`
- [ ] Run tests: `npm run test`

### Publish to npm

```bash
# Authenticate
npm login

# Publish UI library
npm publish -w packages/ui

# Publish CLI
npm publish -w packages/cli

# Verify
npm view @yourusername/ui
npm view @yourusername/cli
```

## File Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `Modal.tsx`)
- **Utilities**: camelCase (`cn.ts`, `formatDate.ts`)
- **Types**: PascalCase + `.types.ts` (`Button.types.ts`)
- **Tests**: `.test.ts` or `.spec.ts` suffix
- **Templates**: kebab-case directories (`button/`, `input/`)

## Class Strategy

We use a three-layer approach:

1. **CVA (class-variance-authority)**: Define variants
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      primary: "...",
      secondary: "...",
    },
  },
});
```

2. **cn()**: Merge and deduplicate
```typescript
cn(buttonVariants({ variant }), className)
```

3. **Tailwind**: Final styling
```html
<button class="inline-flex items-center px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-slate-800">
```

## Performance Considerations

- **Tree-shaking**: Only export used components
- **Bundle size**: Use external peers (react, react-dom)
- **Lazy loading**: Developers can code-split if needed
- **CSS**: Tailwind (no runtime), already in user's build

## Security Considerations

- No eval() or dynamic code execution
- No sensitive data in templates
- Permissions: Only copy files to project directories
- Validation: Sanitize component names before copying

## Future Enhancements

- [ ] Component testing framework integration
- [ ] Storybook setup automation
- [ ] Theming system
- [ ] Dark mode support
- [ ] Custom variant builder UI
- [ ] Component analytics
- [ ] Migration guides between versions

---

**Questions?** Check [README.md](../README.md) or [CLI docs](../packages/cli/README.md)
