# shubh-cli

A powerful CLI tool for scaffolding, generating, and managing components from the shubh-ui design system.

## Installation

```bash
npm install -g shubh-cli
# or
npx shubh-cli
```

## Quick Start

### 1. Initialize your project

```bash
npx shubh-ui init
```

This command will:
- Create a `components/ui` directory
- Generate a `shubh-ui.json` configuration file
- Create utility helpers (`utils/cn.ts`)

### 2. Add components

```bash
# Add a single component
npx shubh-ui add button

# Add multiple components
npx shubh-ui add button input card modal

# Add with specific selections
npx shubh-ui add button --help
```

Supported components:
- `button` - Versatile button with variants
- `input` - Text input with validation states
- `card` - Container with header/footer slots
- `modal` - Dialog component
- `badge` - Tag/badge component
- `alert` - Alert notification
- `avatar` - User avatar
- `tabs` - Tab navigation
- `dropdown` - Dropdown menu
- `label` - Form label with states
- `table` - Data table
- `sidebar` - Side navigation
- `navbar` - Top navigation
- `checkbox` - Checkbox input
- `radio` - Radio input
- `switch` - Toggle switch
- `select` - Select dropdown
- `textarea` - Multi-line textarea
- `pagination` - Pagination controls
- `serverdatatable` - Div-structured server-side data table with search, sort, expand, and pagination

## Configuration

The `shubh-ui.json` file controls component generation:

```json
{
  "$schema": "https://shubh-ui.dev/schema.json",
  "style": "default",
  "tsx": true,
  "aliases": {
    "@": "./src",
    "@/components": "./components",
    "@/utils": "./utils"
  },
  "componentPath": "./components/ui"
}
```

### Configuration Options

- **style**: Component style (currently `"default"`)
- **tsx**: Use TypeScript/TSX (`true | false`)
- **aliases**: Import path aliases
- **componentPath**: Where to store generated components

## Usage Example

```tsx
// After: npx shubh-ui init && npx shubh-ui add button

import Button from "@/components/ui/button";

export function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

## Project Structure

After initialization and adding components:

```
your-project/
├── components/
│   └── ui/
│       ├── button/
│       │   ├── button.tsx
│       │   ├── button.types.ts
│       │   └── index.ts
│       ├── input/
│       │   └── ...
│       └── card/
│           └── ...
├── utils/
│   ├── cn.ts              # Class name utility
│   └── index.ts
├── shubh-ui.json          # CLI config
└── package.json
```

## Customization

Each generated component is fully customizable. Simply edit the files in `components/ui/ComponentName/`:

- **ComponentName.tsx** - Main component implementation
- **ComponentName.types.ts** - Type definitions and variants
- **README.md** - Component documentation

## Features

✅ **Type-safe components** - Full TypeScript support  
✅ **Accessible** - WCAG compliant  
✅ **Tailwind CSS** - Utility-first styling  
✅ **Customizable** - Modify components for your needs  
✅ **Tree-shakeable** - Only include what you use  
✅ **Copy-paste friendly** - No external dependencies required after generation  

## Troubleshooting

### "Project not initialized"

Run `npx shubh-ui init` in your project root first.

### "Template not found"

Check available components: `npx shubh-ui add --help`

### Import issues

Ensure your path aliases in `tsconfig.json` match `shubh-ui.json`

## Development

```bash
git clone https://github.com/yourusername/shubh-ui
cd shubh-ui/packages/cli

# Install dependencies
npm install

# Build
npm run build

# Test CLI locally
npm run dev
```

## License

MIT

---

**Made with ❤️ by Shubham**
