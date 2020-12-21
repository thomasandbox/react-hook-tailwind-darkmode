# React Hook Tailwind Darkmode

## Introduction

This is a React hook changing darkmode in Tailwind CSS.

## Installation

```bash
npm install -D react-hook-tailwind-darkmode

yarn add -D react-hook-tailwind-darkmode
```

## Usage

This hook is using the function named `changeTheme` to change theme.

```tsx
import {ReactElement} from "react";
import {useTheme} from "react-hook-tailwind-darkmode";

export function App(): ReactElement {
  const {changeTheme} = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      ...
      <button onClick={() => changeTheme() type="button"}>
        change theme
      </button>
    </div>
  );
}
```

## Tailwind CSS config

You need to use the `class` strategy for this hook.
The config you should set is on the below.

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

[Read more details ](https://tailwindcss.com/docs/dark-mode).

## TODO

- [ ] DEMO
- [ ] TEST
- [ ] CI

## License

`react-hook-tailwind-dakrmode` is [MIT LICENSED](./LICENSE.md)
