# @zerodep/is.integer

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is.integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.integer) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is.integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.integer) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/is.integer) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/is.integer?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/is.integer?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/is.integer?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/is.integer)

**A utility to determine if a value is a finite integer.**

## tl;dr

A short explanation / quick reference:

```typescript
import { isInteger } from '@zerodep/is.integer';

isInteger(42); // true
isInteger(3.14); // false
isInteger(NaN); // false
isInteger(Number.POSITIVE_INFINITY); // false <-- CAUTION
isInteger('a string'); // false
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [Related Packages](#related-packages)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app), [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/is).

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "is" utilities
npm install @zerodep/is

// only the is.integer utility
npm install @zerodep/is.integer
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { isInteger } from 'https://cdn.jsdelivr.net/npm/@zerodep/is.integer/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/is.integer/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.isInteger(42);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/is.integer/umd.js) and [unpkg](https://unpkg.com/@zerodep/is.integer/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `isInteger` - a function to test if a provided value is an integer

### Signature

```typescript
// typescript declaration
declare const isInteger: (value: any) => boolean;
```

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.isInteger(...)`.

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isInteger } from '@zerodep/is.integer';

isInteger(42); // true
isInteger(3e8); // true
isInteger(Number.POSITIVE_INFINITY); // false <-- CAUTION

// strings
isInteger(''); // false
isInteger('a string'); // false

// floats
isInteger(-273.15); // false
isInteger(Math.PI); // false

// number-ish
isInteger(Number.POSITIVE_INFINITY); // false
isInteger(NaN); // false

// bigints
isInteger(8675309n); // false

// object literals
isInteger({}); // false
isInteger({ a: 'one', b: 'two' }); // false

// arrays
isInteger([]); // false
isInteger([1, 2, 3]); // false
isInteger(['a', 'b', 'c']); // false

// booleans
isInteger(true); // false
isInteger(false); // false

// other
isInteger(/^$\d{7}/g); // false
isInteger(new Date()); // false
isInteger(new Date('2022-02-24')); // false
isInteger(new Set()); // false
isInteger(new Set([1, 2, 3])); // false
isInteger(new Map()); // false
isInteger(new Map([['a', 1]])); // false
isInteger(Symbol()); // false
isInteger(new Error()); // false
isInteger(() => {}); // false

// nothing
isInteger(null); // false
isInteger(undefined); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.number](https://www.npmjs.com/package/@zerodep/is.number) - checks if a value is an integer or float
- [@zerodep/is.float](https://www.npmjs.com/package/@zerodep/is.float) - checks if a value is float
- [@zerodep/is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) - checks if a value is a BigInt
- [@zerodep/guard.integer](https://www.npmjs.com/package/@zerodep/guard.integer) - only allows integer values (throws an error for non-integer values), reduces the need to write `if/else` code, may be configured for minimum/maximum values

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.integer/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
