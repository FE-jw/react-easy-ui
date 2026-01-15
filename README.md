# Easy UI Lib

A React UI component library built with TypeScript, Vite, and SCSS Modules.

## Installation

```bash
yarn add @jwook/react-ui
# or
npm install @jwook/react-ui
```

## Usage

Import it in a top-level component

```tsx
import '@jwook/react-ui/style.css';
```

Import the components and use them in your React application.

```tsx
import { EButton } from '@jwook/react-ui';

function App() {
  return (
    <EButton variant="primary" onClick={() => console.log('Clicked')}>
      Click Me
    </EButton>
  );
}
```

## Development

### Setup

```bash
yarn install
```

### Commands

- `yarn dev`: Start development server (not typically used for library, but can be configured for playground)
- `yarn build`: Build the library for production

## License

MIT
