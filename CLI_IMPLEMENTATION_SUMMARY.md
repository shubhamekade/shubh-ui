# CLI Implementation Summary

## Current Status

The monorepo contains two publishable packages:

- `designsystem` -> `@shubh/ui` (React component library)
- `packages/cli` -> `@shubh/cli` (component scaffolding CLI)

This summary reflects the current repository state.

---

## Workspace Structure

```
shubh-ui/
|-- designsystem/                 # @shubh/ui package
|   |-- src/
|   |   |-- components/
|   |   |-- layout/
|   |   |-- hooks/
|   |   |-- utils/
|   |   `-- index.ts
|   |-- dist/
|   |-- package.json
|   `-- tsup.config.ts
|-- packages/
|   `-- cli/                      # @shubh/cli package
|       |-- src/
|       |   |-- commands/
|       |   |   |-- init.ts
|       |   |   `-- add.ts
|       |   `-- utils/
|       |-- templates/
|       |-- dist/
|       `-- package.json
|-- README.md
|-- INSTALLATION.md
`-- ARCHITECTURE.md
```

---

## CLI Commands

### `shubh-ui init`

Creates and initializes:

- `components/ui/`
- `utils/cn.ts`
- `shubh-ui.json`

### `shubh-ui add <components...>`

Performs:

- component validation against `VALID_COMPONENTS`
- template lookup under `packages/cli/templates`
- file copy into target project
- barrel generation in created component folders

---

## Template Coverage

The template set is aligned with the CLI `VALID_COMPONENTS` list and includes:

- `accordion`, `alert`, `avatar`, `badge`, `breadcrumb`, `button`, `calendar`, `card`, `checkbox`, `divider`, `drawer`, `dropdown`, `input`, `modal`, `navbar`, `pagination`, `progress`, `radio`, `select`, `sidebar`, `skeleton`, `spinner`, `switch`, `table`, `tabs`, `tag`, `textarea`, `tooltip`

---

## Packaging Snapshot

### `@shubh/ui` (`designsystem/package.json`)

- `sideEffects: false`
- dual runtime targets via exports:
  - `import` -> `dist/index.mjs`
  - `require` -> `dist/index.js`
- types at `dist/index.d.ts`

### `@shubh/cli` (`packages/cli/package.json`)

- binary: `shubh-ui`
- compiled output: `dist/index.js`

---

## Recommended Checks

```bash
npm run build
npm run lint -w designsystem
npm run type-check -w designsystem
npm run lint -w packages/cli
```

---

## Notes

- This file intentionally stays concise and operational.
- For architecture details, use `ARCHITECTURE.md`.
- For install/use instructions, use `README.md` and `INSTALLATION.md`.
