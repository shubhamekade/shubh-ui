# Installation & Setup Guide

## Frontend Developer Workflow

### For React/Next.js Projects

#### Step 1: Install Dependencies

```bash
npm install react react-dom clsx tailwind-merge lucide-react class-variance-authority
npm install -D tailwindcss postcss autoprefixer
```

#### Step 2: Configure Tailwind

```bash
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Step 3: Initialize shubh-ui CLI

```bash
npx shubh-ui init
```

This creates:
- `components/ui/` - Component directory
- `utils/cn.ts` - Class merging utility
- `shubh-ui.json` - Configuration file

#### Step 4: Add Components

```bash
# Add individual components
npx shubh-ui add button
npx shubh-ui add input
npx shubh-ui add card

# Or add multiple at once
npx shubh-ui add button input card modal select textarea
```

#### Step 5: Start Using

```tsx
// src/App.tsx
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Card from "@/components/ui/card";

export default function App() {
  return (
    <Card>
      <h1>Welcome to shubh-ui</h1>
      <Input placeholder="Enter your name..." />
      <Button>Submit</Button>
    </Card>
  );
}
```

---

## Publishing the Library

### Step 1: Create npm Account

```bash
npm login
```

### Step 2: Update package.json

```json
{
  "name": "@yourusername/ui",
  "version": "0.1.0",
  "description": "Your UI component library",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/shubh-ui"
  }
}
```

### Step 3: Build Packages

```bash
npm run build
```

### Step 4: Publish to npm

```bash
# Publish UI library
npm publish -w packages/ui

# Publish CLI tool
npm publish -w packages/cli
```

### Step 5: Verify Publication

```bash
npm view @yourusername/ui
npm view @yourusername/cli
```

---

## Using Published Library

### From npm

```bash
# Install library
npm install @yourusername/ui

# Install CLI globally
npm install -g @yourusername/cli

# Or use with npx
npx @yourusername/cli init
npx @yourusername/cli add button
```

### As Direct Dependency

```bash
npm install @yourusername/ui
```

```tsx
import { Button, Card, Input } from "@yourusername/ui";
```

---

## Development Setup

### Clone & Setup

```bash
git clone https://github.com/yourusername/shubh-ui
cd shubh-ui

# Install all dependencies
npm install

# Or install individual packages
npm install -w packages/ui
npm install -w packages/cli
```

### Watch Mode

```bash
# Watch UI library changes
npm run dev:ui

# In another terminal, watch CLI changes
npm run dev:cli
```

### Build for Distribution

```bash
# Build all packages
npm run build

# Build specific package
npm run build:ui
npm run build:cli
```

---

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"],
      "@/components": ["./components"],
      "@/utils": ["./utils"]
    }
  },
  "include": ["src", "vite-env.d.ts"],
  "exclude": ["node_modules"]
}
```

### Path Aliases in shubh-ui.json

```json
{
  "aliases": {
    "@": "./src",
    "@/components": "./components",
    "@/utils": "./utils"
  }
}
```

---

## Troubleshooting

### Issue: "Cannot find module @/components"

**Solution:** Update `tsconfig.json` paths to match your project:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Issue: Tailwind styles not applying

**Solution:** Ensure `tailwind.config.js` includes component paths:

```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
]
```

### Issue: CLI command not found

**Solution:** Install globally:

```bash
npm install -g @yourusername/cli

# Or use npx
npx @yourusername/cli --help
```

---

## Next Steps

- [Component Documentation](../packages/ui/README.md)
- [CLI Documentation](../packages/cli/README.md)
- [Contributing Guide](./CONTRIBUTING.md)
