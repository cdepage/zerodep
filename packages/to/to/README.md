# @zerodep/to

[![min](https://img.shields.io/bundlephobia/min/@zerodep/to?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/to) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/to?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/to?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/to?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/to)

**A collection of utility methods to convert a value to a specific data type (or throw an error while trying).**

This is a barrel package of all `@zerodep/to.*` utility packages within the @zerodep monorepo.

## tl;dr

A short explanation / quick reference:

```typescript
import { toString } from '@zerodep/to';

toString(42); // 42
toString(Symbol); // throws a ZeroDepErrorTo error
```

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
npm install @zerodep/to
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { toNumber, toString } from 'https://cdn.jsdelivr.net/npm/@zerodep/to/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/to/umd.js"></script>
<script>
  // example of "zd" prefix
  const result1 = zd.toNumber('3e8');
  const result2 = zd.toString(['an', 'array', 'can', 'be', 'a', 'string']);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/to/umd.js) and [unpkg](https://unpkg.com/@zerodep/to/umd.js) in UMD, ESM and CJS formats.

## Included Packages

This barrel package includes all `@zerodep/to.*` packages:

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| toJSON | [to.json](https://www.npmjs.com/package/@zerodep/to.json) | A configurable function that converts a value to a JSON object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.json?style=flat-square&color=blue&label=gzip) |
| toNumber | [to.number](https://www.npmjs.com/package/@zerodep/to.number) | A configurable utility to convert a value (string, boolean, date, or BigInt) to a number | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.number?style=flat-square&color=blue&label=gzip) |
| toString | [to.string](https://www.npmjs.com/package/@zerodep/to.string) | A configurable utility to convert a value (number, boolean, array, object, more...) to a locale-appropriate string | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.string?style=flat-square&color=blue&label=gzip) |

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/to/to/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
