# @zerodep/guard.integer

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard.integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard.integer) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard.integer) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/guard.integer) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/guard.integer?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/guard.integer?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/guard.integer?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/guard.integer)

**A configurable defensive programming utility to guard against non-integer values.**

Guards do not return a value, they only throw an error if the provided value is not of the guarded type.

## tl;dr

A short explanation / quick reference:

```typescript
import { guardInteger } from '@zerodep/guard.function';

// uses the default configuration options
guardInteger(options)(42); // 42
guardInteger(options)('a string'); // throws ZeroDepErrorGuard
```

and

```typescript
import { GuardIntegerOptions, guardIntegerHOF } from '@zerodep/guard.integer';

// uses a custom configuration options
const options: GuardIntegerOptions = { min: 25, max: 75 };
const guardInteger = guardIntegerHOF(options);

guardInteger(42); // 42
guardInteger('a string'); // throws ZeroDepErrorGuardType
guardInteger(10); // throws ZeroDepErrorGuardRange
guardInteger(100); // throws ZeroDepErrorGuardRange
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Configuration Options](#configuration-options)
  - [Examples](#examples)
- [Related Packages](#related-packages)
- [Configuration via Higher Order Function](#configuration-via-higher-order-function)
- [Guards & Defensive Programming](#guards--defensive-programming)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app), [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/guards](https://www.npmjs.com/package/@zerodep/guards).

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "guard" utilities
npm install @zerodep/guard

// only the guard.integer package
npm install @zerodep/guard.integer
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { guardInteger } from 'https://cdn.jsdelivr.net/npm/@zerodep/guard.integer/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/guard.integer/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.guardInteger(42);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/guard.integer/umd.js) and [unpkg](https://unpkg.com/@zerodep/guard.integer/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `guardInteger` - a function/guard that uses the default configuration options (suitable for most)
  - `guardIntegerHOF` - a higher-order function that may be configured and returns a guard function based on the configurations
- **Interface**
  - `GuardIntegerOptions` - a typescript interface of the options that may be set in the HOF
- **Error types**
  - `ZeroDepErrorGuardType` - thrown if guarded value is of the incorrect type
  - `ZeroDepErrorGuardRange` - thrown if guarded value is out-of-range per configuration options
  - `ZeroDepErrorGuard` - the parent class of the type and range errors (above)
  - `ZeroDepError` - the error class all ZeroDep packages extend from, is an instance of the base `Error` object

### Signature

Typescript declarations:

```typescript
// using default configuration options
declare const guardInteger: (value: any | any[]) => void;

// customizing the configuration options
declare const guardIntegerHOF: (options?: GuardIntegerOptions) => (value: any) => void;

// optional configuration
interface GuardIntegerOptions {
  min?: number;
  max?: number;
}
```

### Configuration Options

**min:**

- Defaults to: undefined
- If set, and the value is less than this number, a ZeroDepErrorGuardRange error will be thrown

**max:**

- Defaults to: undefined
- If set, and the value is more than this number, a ZeroDepErrorGuardRange error will be thrown

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.guardInteger(...)`.

**Using Default Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { guardInteger } from '@zerodep/guard.integer';

guardInteger(42); // 42
guardInteger('not an integer'); // throws a ZeroDepErrorGuardType
```

**Using Customized Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { GuardIntegerOptions, guardIntegerHOF } from '@zerodep/guard.integer';

const options: GuardIntegerOptions = { min: 25, max: 75 };
const guardInteger = guardIntegerHOF(options);

guardInteger(42); // 42
guardInteger('a string'); // throws ZeroDepErrorGuardType
guardInteger(10); // throws ZeroDepErrorGuardRange
guardInteger(100); // throws ZeroDepErrorGuardRange
```

**Error Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { guardInteger } from '@zerodep/guard.integer';

try {
  guardInteger()('not an integer');
} catch (error: any) {
  console.log(error.message); // "Value is not an integer"
  console.log(error.category); // "type"
  console.log(error.source); // "guard"
  console.log(error.value); // "not an integer" <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorGuardType; // true
  error instanceof ZeroDepErrorGuard; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.integer](https://www.npmjs.com/package/@zerodep/is.integer) - checks if a value is an integer

## Configuration via Higher Order Function

Let's begin with a definition to ensure a common vocabulary: a Higher Order Function (HOF) is just a function that returns another function.

This package uses a Higher Order Function as a way to set up/configure its functionality for:

- **cleaner code:** having to pass configuration options once instead of to every call to the function making your code easier to read and reason about
- **improved performance:** any time a set of configuration options is passed to a function, it is merged with some default values, doing this once means fewer CPU cycles and memory consumption
- **future scalability:** if/when additional configuration options are available they will have no impact on your existing code and will be easier to add should you wish to use them
- **consistency:** all @zerodep packages that may be configured follow the same pattern, making the Developer Experience (DX) just a little sweeter

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your function. These guards serve as pre-conditions that must be validated for your code to execute thereby preventing unexpected conditions from occurring.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

Guards are intended for runtime safety, which is very different from Typescript/strong typing which handles compile time issues.

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **CDN Available** - available on fast content delivery networks in UMD, CJS and ESM formats
- **FP Inspired** - gently opinionated to encourage functional programming style for cleaner and more maintainable software
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability

## Support

All @zerodep packages are built for the ES2020 specification. Should you need to support older environments you will need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
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
- **patch versions**: are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/guard.integer/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
