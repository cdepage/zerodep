# @zerodep/is.null

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is.nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.nil) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is.nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.nil) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/is.nil) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/is.nil?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/is.nil?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/is.nil?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/is.nil)

**A utility to determine if a value is `null` or `undefined`.**

## tl;dr

A short explanation / quick reference:

```typescript
import { isNil } from '@zerodep/is.nil';

isNil(undefined); // true
isNil(null); // true
isNil('a string'); // false
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

// only the is.nil utility
npm install @zerodep/is.nil
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { isNil } from 'https://cdn.jsdelivr.net/npm/@zerodep/is.nil/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/is.nil/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.isNil(null);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/is.nil/umd.js) and [unpkg](https://unpkg.com/@zerodep/is.nil/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `isNil` - a function to test if a provided value is `null` or `undefined`

### Signature

```typescript
// typescript declaration
declare const isNil: (value: any) => boolean;
```

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.isNil(...)`.

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isNil } from '@zerodep/is.nil';

isNil(null); // true
isNil(undefined); // true

// strings
isNil(''); // false
isNil('a string'); // false

// integers
isNil(42); // false
isNil(3e8); // false

// floats
isNil(-273.15); // false
isNil(Math.PI); // false

// number-ish
isNil(Number.POSITIVE_INFINITY); // false
isNil(NaN); // false

// bigints
isNil(8675309n); // false

// object literals
isNil({}); // false
isNil({ a: 'one', b: 'two' }); // false

// arrays
isNil([]); // false
isNil([1, 2, 3]); // false
isNil(['a', 'b', 'c']); // false

// booleans
isNil(true); // false
isNil(false); // false

// other
isNil(/^$\d{7}/g); // false
isNil(new Date()); // false
isNil(new Date('2022-02-24')); // false
isNil(new Set()); // false
isNil(new Set([1, 2, 3])); // false
isNil(new Map()); // false
isNil(new Map([['a', 1]])); // false
isNil(Symbol()); // false
isNil(new Error()); // false
isNil(() => {}); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.null](https://www.npmjs.com/package/@zerodep/is.null) - checks if a value is `null`
- [@zerodep/is.undefined](https://www.npmjs.com/package/@zerodep/is.undefined) - checks if a value is `undefined`

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.nil/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
