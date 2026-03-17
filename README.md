# Shubh UI Monorepo

Production-focused React component library and CLI scaffolder.

## Packages

- `@shubh/ui` (`designsystem/`) — reusable React components, hooks, layout primitives, and admin components.
- `@shubh/cli` (`packages/cli/`) — `init`/`add` workflow to copy component templates into consuming apps.

## Highlights

- TypeScript-first components and CLI
- Tailwind CSS + CVA-based variants
- Vitest + Testing Library setup for UI package
- Changesets configured for versioning/release flow
- GitHub Actions CI with baseline + strict (non-blocking) lint job

## Repository Layout

```text
.
├── designsystem/            # @shubh/ui
├── packages/cli/            # @shubh/cli
├── .changeset/
├── .github/workflows/
└── package.json             # workspace scripts
```

## Install (Contributors)

```bash
npm install
```

## Scripts (Root)

```bash
npm run build         # build all workspaces
npm run dev           # run workspace dev scripts
npm run test          # run UI tests
npm run type-check    # run UI library type-check
npm run ci            # type-check + test + build (baseline gate)
npm run ci:strict     # lint + baseline gate
npm run changeset     # create release note
npm run version-packages
npm run release
```

## UI Library Quick Usage

```bash
npm install @shubh/ui react react-dom
```

```tsx
import { Button, Card, Input } from "@shubh/ui";

export function Example() {
  return (
    <Card>
      <Button variant="primary">Save</Button>
      <Input placeholder="you@example.com" />
    </Card>
  );
}
```

## CLI Quick Usage

```bash
npx shubh-ui init
npx shubh-ui add button input card modal
```

Supported `add` components:

- `accordion`, `alert`, `avatar`, `badge`, `breadcrumb`, `button`, `calendar`, `card`, `checkbox`, `divider`
- `drawer`, `dropdown`, `input`, `modal`, `navbar`, `pagination`, `progress`, `radio`, `select`, `sidebar`
- `serverdatatable`, `skeleton`, `spinner`, `switch`, `table`, `tabs`, `tag`, `textarea`, `tooltip`

## Export Notes

- Core table/select/pagination exports come from `@shubh/ui` as `Table`, `Select`, `Pagination`.
- Admin convenience aliases are prefixed to avoid collisions: `AdminTable`, `AdminSelect`, `AdminPagination`, `AdminButton`, `AdminCard`.

## Token-Based Theming

The UI package supports token-based theming via CSS variables consumed by Tailwind semantic tokens (`background`, `foreground`, `border`, `primary`, etc.).

- Light theme: `:root` / `[data-theme="light"]`
- Navy dark theme: `[data-theme="navy"]` or `.dark`

To switch theme at runtime, set the attribute/class on the root element:

```tsx
document.documentElement.setAttribute("data-theme", "light");
document.documentElement.setAttribute("data-theme", "navy");
document.documentElement.classList.toggle("dark", true);
```

Token definitions live in `designsystem/src/styles/tailwind.css` and are mapped in `designsystem/tailwind.config.js`.

## Validation Status

- Baseline pipeline (`npm run ci`) is passing locally.
- Strict lint gate is available via `npm run ci:strict`.

## Docs

- UI package docs: `designsystem/README.md`
- CLI package docs: `packages/cli/README.md`
- Contribution guide: `CONTRIBUTING.md`
