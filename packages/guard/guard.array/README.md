# @zerodep/guards.array

A defensive programming utility to guard against the use of non-arrays / allow only arrays.

- on success, it returns the array
- on fail, it throws a `ZeroDepErrorGuardType` or `ZeroDepErrorGuardRange` error

## Table of Contents

- [Guards & Defensive Programming](#guards--defensive-programming)
- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your code. These guards serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

## Install

```
// entire zerodep utils suite
npm install @zerodep/utils

// all @zerodep guards
npm install @zerodep/guards

// only the string guard
npm install @zerodep/guards.string
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

For completeness, links to the @zerodep repositories with this function:

- [@zerodep/utils](https://github.com/cdepage/zerodep/tree/main/packages/utils)
- [@zerodep/guards](https://github.com/cdepage/zerodep/tree/main/packages/guards)
- [@zerodep/guards.string](https://github.com/cdepage/zerodep/tree/main/packages/guards.string)

## How to Use

### Signature

```typescript
// configure function => use function => number
const configureGuard = (options?: IOptionsGuardArray) => (value: any) => number;

// configuration options
interface IOptionsGuardArray {
  min?: number; // the minimum value to accept
  max?: number; // the maximum value to accept
}
```

### Examples

**Simple Example**

```typescript
import { guardArray } from '@zerodep/utils';
// or
import { guardArray } from '@zerodep/guards';
// or
import { guardArray } from '@zerodep/guards.array';

// configure, returns a function
const intGuard = guardArray();

// use, returns a number or throws
intGuard(2022); // 2022
intGuard(3.14); // throws a ZeroDepErrorGuardType
intGuard('not an array'); // throws a ZeroDepErrorGuardType
```

**Custom Example**

```typescript
import { IGuardArrayOptions, guardArray } from '@zerodep/utils';
// or
import { IGuardArrayOptions, guardArray } from '@zerodep/guards';
// or
import { IGuardArrayOptions, guardArray } from '@zerodep/guards.array';

// configure, returns a function
const options: IGuardArrayOptions = { min: 2000, max: 2038 };
const customGuard = guardArray(options);

// use, returns a number or throws
customGuard(2022); // 2022
customGuard(3.14); // throws a ZeroDepErrorGuardType
customGuard(1984); // throws a ZeroDepErrorGuardRange
```

**Error Example**

```typescript
import { guardArray } from '@zerodep/utils';
// or
import { guardArray } from '@zerodep/guards';
// or
import { guardArray } from '@zerodep/guards.array';

try {
  configureGuard()(3.14);
} catch (error) {
  console.log(error.message); // "Value is not an array"
  console.log(error.code); // 400
  console.log(error.source); // 3.14 <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorGuardRange; // false in this case
  error instanceof ZeroDepErrorGuardType; // true
  error instanceof ZeroDepErrorGuard; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## Advantages of @zerodep Packages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **FP Inspired** - encourages the functional programming style for cleaner and more maintainable code
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing an a-la-carte composition of capabilities
- **100% Tested** - all methods are fully unit tested
- **Semver** - predictably versioned for peace-of-mind upgrading
- **MIT Licensed** - permissively licensed for maximum usability

## Support

This package has been tested, and built for, the following platforms/browsers in both ESM and CJS formats:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v16.x - Gallium LTS
- v14.x - Fermium LTS

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guards.array/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guards.array/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
