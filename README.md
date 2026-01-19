# React Easy UI

A React UI component library built with TypeScript, Vite, and SCSS Modules.

## Installation

```bash
yarn add @jwook/react-ui
# or
npm install @jwook/react-ui
```

## Usage

Import the CSS file in your top-level component.

```tsx
import '@jwook/react-ui/style.css';
```

Import the components and use them in your React application.

```tsx
import { EButton } from '@jwook/react-ui';

export default function App() {
  return (
    <>
      <EButton>Primary</EButton>
      <EButton variant="secondary">Secondary</EButton>
      <EButton isDisabled>Disabled</EButton>
    </>
  );
}
```

## License

MIT
