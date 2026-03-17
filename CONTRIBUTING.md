# Contributing

Thanks for contributing to Shubh UI.

## Local Setup

```bash
npm install
```

## Validation

Before opening a PR, run:

```bash
npm run ci
```

Optional strict check (may fail while legacy formatting debt is being cleaned):

```bash
npm run ci:strict
```

## Changesets

If your change affects package behavior, add a changeset:

```bash
npm run changeset
```

Then commit the generated file in `.changeset/`.

## Pull Requests

Use the PR template and include:

- Clear summary
- Testing notes
- Follow-up tasks (if any)
