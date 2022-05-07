# @zerodep/guard

[![min](https://img.shields.io/bundlephobia/min/@zerodep/guard?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/guard) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/guard?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/guard?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/guard?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/guard)

**A collection of configurable defensive programming utilities that guard for specific data types.**

This is a barrel package of all `@zerodep/guard.*` utility packages within the @zerodep monorepo.

## tl;dr

A short explanation / quick reference:

```typescript
import { guardString, guardInteger } from '@zerodep/guard';

guardString('a string'); // true
guardString([1, 2, 3]); // false

guardInteger(42); // true
guardInteger(3.14); // false
```

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
- [Guards & Defensive Programming](#guards--defensive-programming)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
npm install @zerodep/guard
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import {
    guardArray,
    guardFunction,
    guardString,
  } from 'https://cdn.jsdelivr.net/npm/@zerodep/guard/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/guard/umd.js"></script>
<script>
  // example of "zd" prefix
  const result1 = zd.guardArray(['a', 1, true, { an: 'object' }]);
  const result2 = zd.guardFunction(() => {});
  const result3 = zd.guardString('a string');
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/guard/umd.js) and [unpkg](https://unpkg.com/@zerodep/guard/umd.js) in UMD, ESM and CJS formats.

## Included Packages

This barrel package includes all `@zerodep/guard.*` packages:

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| guardArray | [guard.array](https://www.npmjs.com/package/@zerodep/guard.array) | A configurable defensive programming utility to guard against non-array values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.array?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.array?style=flat-square&color=blue&label=gzip) |
| guardBigInt | [guard.bigint](https://www.npmjs.com/package/@zerodep/guard.bigint) | A configurable defensive programming utility to guard against non-BigInt values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.bigint?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.bigint?style=flat-square&color=blue&label=gzip) |
| guardBoolean | [guard.boolean](https://www.npmjs.com/package/@zerodep/guard.boolean) | A configurable defensive programming utility to guard against non-boolean values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.boolean?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.boolean?style=flat-square&color=blue&label=gzip) |
| guardDate | [guard.date](https://www.npmjs.com/package/@zerodep/guard.date) | A configurable defensive programming utility to guard against non-Date values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.date?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.date?style=flat-square&color=blue&label=gzip) |
| guardFloat | [guard.float](https://www.npmjs.com/package/@zerodep/guard.float) | A configurable defensive programming utility to guard against non-float values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.float?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.float?style=flat-square&color=blue&label=gzip) |
| guardFunction | [guard.function](https://www.npmjs.com/package/@zerodep/guard.function) | A configurable defensive programming utility to guard against non-function values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.function?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.function?style=flat-square&color=blue&label=gzip) |
| guardInteger | [guard.integer](https://www.npmjs.com/package/@zerodep/guard.integer) | A configurable defensive programming utility to guard against non-integer values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.integer?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.integer?style=flat-square&color=blue&label=gzip) |
| guardJSON | [guard.json](https://www.npmjs.com/package/@zerodep/guard.json) | A configurable defensive programming utility to guard against non-JSON object values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.json?style=flat-square&color=blue&label=gzip) |
| guardNumber | [guard.number](https://www.npmjs.com/package/@zerodep/guard.number) | A configurable defensive programming utility to guard against non-float/non-integer values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.number?style=flat-square&color=blue&label=gzip) |
| guardObject | [guard.object](https://www.npmjs.com/package/@zerodep/guard.object) | A configurable defensive programming utility to guard against non-plain JavaScript object values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.object?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.object?style=flat-square&color=blue&label=gzip) |
| guardString | [guard.string](https://www.npmjs.com/package/@zerodep/guard.string) | A configurable defensive programming utility to guard against non-string values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.string?style=flat-square&color=blue&label=gzip) |

## Guards & Defensive Programming

Defensive programming promotes the practice of never trusting input to your function/method by placing "guards at the gate" of your code. These guards serve as pre-conditions that must be validated for your code to execute thereby reducing code defects.

A guard stops code execution by throwing an error when invalid data is provided. The spirit/intention of guards is to protect at the smaller function-level, not at the macro gateway level checking user input. Be conscientious of where and why you are using guards in your code.

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/guard/guard/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
