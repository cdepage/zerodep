# @zerodep/can

[![min](https://img.shields.io/bundlephobia/min/@zerodep/can?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/can) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/can?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/can) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/can) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/can?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/can?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/can?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/can)

**A collection of functions that test for specific language construct capabilities or features.**

This is a barrel package of all `@zerodep/can.*` utility packages within the @zerodep monorepo.

## tl;dr

A short explanation / quick reference:

```typescript
import { canIterate } from '@zerodep/can';

canIterate([1, 2, 3]); // true
canIterate(42); // false
```

**Barrel Package:** "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

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
npm install @zerodep/can
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { canIterate } from 'https://cdn.jsdelivr.net/npm/@zerodep/can/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/can/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.canIterate([1, 2, 3]);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/can/umd.js) and [unpkg](https://unpkg.com/@zerodep/can/umd.js) in UMD, ESM and CJS formats.

## Included Packages

This barrel package includes all `@zerodep/can.*` packages :

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| canIterate | [can.iterate](https://www.npmjs.com/package/@zerodep/can.iterate) | Determine if a value is iterable in a `for...of` loop (with opinionated safeguards) | ![min](https://img.shields.io/bundlephobia/min/@zerodep/can.iterate?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/can.iterate?style=flat-square&color=blue&label=gzip) |

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/can/can/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
