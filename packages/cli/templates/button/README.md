# Button Component

A flexible, accessible button component with multiple variants and sizes.

## Usage

```tsx
import Button from "@/components/ui/button";

export function Example() {
  return (
    <>
      <Button variant="primary">Save</Button>
      <Button variant="secondary" size="lg">Edit</Button>
      <Button variant="danger" loading>Loading...</Button>
    </>
  );
}
```

## Props

- `variant`: `"primary" | "secondary" | "outline" | "ghost" | "danger"` (default: `"primary"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `fullWidth`: `boolean` - Makes button take full width
- `loading`: `boolean` - Shows loading spinner, disables interaction
- `leftIcon`: `React.ReactNode` - Icon on the left
- `rightIcon`: `React.ReactNode` - Icon on the right
- All standard button HTML attributes

## Customization

Edit `button.types.ts` to add new variants or sizes.
Edit `button.tsx` to change the component structure.
