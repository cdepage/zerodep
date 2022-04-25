# @zerodep/errors

errors are defensive programming utilities to protect a method/function against incorrect data. This package contains errors for a variety of data types.

## Table of Contents

- [errors & Defensive Programming](#errors--defensive-programming)
- [Installation Instructions](#install)
- [Types of errors](#types-of-errors)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#zerodep-advantages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## errors & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "errors at the gate" of your code. These errors serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of errors is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using errors in your code.

## Install

This package is available from two differently sized and tree shakeable, npm packages:

```
// entire zerodep utils suite
npm install @zerodep/utils

// all @zerodep errors
npm install @zerodep/errors
```

Of course, you may use `yarn` or `pnpm` or the package manager of your choice. Only `npm` examples are shown for clarity.

For completeness, links to the @zerodep repositories with this function:

- [@zerodep/utils](https://github.com/cdepage/zerodep/packages/utils)
- [@zerodep/errors](https://github.com/cdepage/zerodep/packages/errors)

## Types of errors

This package has the following errors available. Most errors have optional configurations to further narrow the scope of the guard.

| Only Allows       | Method Name  | Optional Configuration                 |
| ----------------- | ------------ | -------------------------------------- |
| Strings           | errorstring  | minLength, maxLength                   |
| Integers + Floats | guardNumber  | min, max                               |
| Integers          | guardInteger | min, max                               |
| Floats            | guardFloat   | min, max                               |
| BigInts           | guardBigInt  | min, max                               |
| Booleans          | guardBoolean |                                        |
| Dates             | guardDate    | earliest, latest                       |
| Arrays            | guardArray   | minQuantity, maxQuantity, payloadGuard |
| Objects           | guardObject  | minQuantity, maxQuantity, payloadGuard |

## How to Use

### Signature

Each guard is a higher-order function that returns the guarding function. In the example below the `IGuardNumberOptions` represents the optional configurations from the table above.

```typescript
const intGuard = (options?: IGuardNumberOptions) => (value: any) => number;
```

### Examples

**Simple Example**

```typescript
import { errorstring } from '@zerodep/utils';
// or
import { errorstring } from '@zerodep/errors';

// configure, returns a function
const stringGuard = errorstring();

// use, returns a string or throws
stringGuard('some string'); // "some string"
stringGuard(100); // throws a ZeroDepErrorGuardType
```

**Custom Example**

```typescript
import { IGuardFloatOptions, guardFloat } from '@zerodep/utils';
// or
import { IGuardFloatOptions, guardFloat } from '@zerodep/errors';

// configure, returns a function
const options: IGuardFloatOptions = {
  min: 0,
  max: 4.5,
};
const customGuard = guardFloat(options);

// use, returns a number or throws
customGuard(3.14); // 3.14
customGuard('3.14'); // throws a ZeroDepErrorGuardType
customGuard(6); // throws a ZeroDepErrorGuardRange
```

**Error Example**

```typescript
import { IGuardBigIntOptions, guardBigInt } from '@zerodep/utils';
// or
import { IGuardBigIntOptions, guardBigInt } from '@zerodep/errors';

try {
  configureGuard()(42);
} catch (error) {
  console.log(error.message); // "Value is not a bigint"
  console.log(error.code); // 400
  console.log(error.source); // 42 <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorGuardType; // true
  error instanceof ZeroDepErrorGuard; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## @zerodep Advantages:

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **FP Inspired** - encourages the functional programming style for cleaner and more maintainable code
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **100% Tested** - all methods are fully unit tested
- **Semver** - predictably versioned for peace-of-mind upgrading

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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/packages/errors/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/packages/errors/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
