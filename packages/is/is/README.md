# @zerodep/is

[![min](https://img.shields.io/bundlephobia/min/@zerodep/is?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/is) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/is?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/is?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/is?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/is)

A collection of utility methods to determine the classification or equality of a value.

This is a barrel package of all `@zerodep/is.*` utility packages within the @zerodep monorepo.

## tl;dr

A short explanation / quick reference:

```typescript
import { isArray, isEqual, isFloat, isString, isInteger } from '@zerodep/is';

isArray([1, 2, 3]); // true
isArray('a string'); // false

isEqual(42, 'a'); // false
isEqual({ a: 1, b: { nested: 'object' } }, { b: { nested: 'object' }, a: 1 }); // true

isFloat(42); // false
isFloat(3.14); // true

isString([1, 2, 3]); // false
isString('a string'); // true

isInteger(42); // true
isInteger(3.14); // false
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
npm install @zerodep/is
```

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { isEqual, isFunction, isString } from 'https://cdn.jsdelivr.net/npm/@zerodep/is/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/is/umd.js"></script>
<script>
  // example of "zd" prefix
  const result1 = zd.isEqual('some value', 'another value');
  const result2 = zd.isString('a string');
  const result3 = zd.isFunction(() => {});
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/is.equal/umd.js) and [unpkg](https://unpkg.com/@zerodep/is.equal/umd.js) in UMD, ESM and CJS formats.

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all `@zerodep/is.*` packages:

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| isArray | [is.array](https://www.npmjs.com/package/@zerodep/is.array) | A utility to determine if a value is an array | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.array?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.array?style=flat-square&color=blue&label=gzip) |
| isBigInt | [is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) | A utility to determine if a value is a BigInt | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.bigint?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.bigint?style=flat-square&color=blue&label=gzip) |
| isBoolean | [is.boolean](https://www.npmjs.com/package/@zerodep/is.boolean) | A utility to determine if a value is a boolean | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.boolean?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.boolean?style=flat-square&color=blue&label=gzip) |
| isDate | [is.date](https://www.npmjs.com/package/@zerodep/is.date) | A utility to determine if a value is a Date | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.date?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.date?style=flat-square&color=blue&label=gzip) |
| isEqual | [is.equal](https://www.npmjs.com/package/@zerodep/is.equal) | A utility to deeply compare two values of any type for equality | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.equal?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.equal?style=flat-square&color=blue&label=gzip) |
| isFloat | [is.float](https://www.npmjs.com/package/@zerodep/is.float) | A utility to determine if a value is a non-infinite float | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.float?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.float?style=flat-square&color=blue&label=gzip) |
| isFunction | [is.function](https://www.npmjs.com/package/@zerodep/is.function) | A utility to determine if a value is a function | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.function?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.function?style=flat-square&color=blue&label=gzip) |
| isInteger | [is.integer](https://www.npmjs.com/package/@zerodep/is.integer) | A utility to determine if a value is a non-infinite integer | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.integer?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.integer?style=flat-square&color=blue&label=gzip) |
| isJSON | [is.json](https://www.npmjs.com/package/@zerodep/is.json) | A utility to determine if a value is a serializable JSON object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.json?style=flat-square&color=blue&label=gzip) |
| isMap | [is.map](https://www.npmjs.com/package/@zerodep/is.map) | A utility to determine if a value is a Map | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.map?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.map?style=flat-square&color=blue&label=gzip) |
| isNil | [is.nil](https://www.npmjs.com/package/@zerodep/is.nil) | A utility to determine if a value is `null` or `undefined` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.nil?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.nil?style=flat-square&color=blue&label=gzip) |
| isNull | [is.null](https://www.npmjs.com/package/@zerodep/is.null) | A utility to determine if a value is `null` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.null?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.null?style=flat-square&color=blue&label=gzip) |
| isNumber | [is.number](https://www.npmjs.com/package/@zerodep/is.number) | A utility to determine if a value is a non-infinite float or integer | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.number?style=flat-square&color=blue&label=gzip) |
| isObject | [is.object](https://www.npmjs.com/package/@zerodep/is.object) | A utility to determine if a value is a plain JavaScript object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.object?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.object?style=flat-square&color=blue&label=gzip) |
| isPromise | [is.promise](https://www.npmjs.com/package/@zerodep/is.promise) | A utility to determine if a value is a Promise | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.promise?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.promise?style=flat-square&color=blue&label=gzip) |
| isRegex | [is.regex](https://www.npmjs.com/package/@zerodep/is.regex) | A utility to determine if a value is a regular expression | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.regex?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.regex?style=flat-square&color=blue&label=gzip) |
| isSet | [is.set](https://www.npmjs.com/package/@zerodep/is.set) | A utility to determine if a value is a Set | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.set?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.set?style=flat-square&color=blue&label=gzip) |
| isString | [is.string](https://www.npmjs.com/package/@zerodep/is.string) | A utility to determine if a value is a string | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.string?style=flat-square&color=blue&label=gzip) |
| isSymbol | [is.symbol](https://www.npmjs.com/package/@zerodep/is.symbol) | A utility to determine if a value is a Symbol | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.symbol?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.symbol?style=flat-square&color=blue&label=gzip) |
| isTypedArray | [is.typedarray](https://www.npmjs.com/package/@zerodep/is.typedarray) | A utility to determine if a value is a Typed Array | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.typedarray?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.typedarray?style=flat-square&color=blue&label=gzip) |
| isUndefined | [is.undefined](https://www.npmjs.com/package/@zerodep/is.undefined) | A utility to determine if a value is `undefined` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.undefined?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.undefined?style=flat-square&color=blue&label=gzip) |
| isWeakMap | [is.weakmap](https://www.npmjs.com/package/@zerodep/is.weakmap) | A utility to determine if a value is a WeakMap | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.weakmap?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.weakmap?style=flat-square&color=blue&label=gzip) |
| isWeakSet | [is.weakset](https://www.npmjs.com/package/@zerodep/is.weakset) | A utility to determine if a value is a WeakSet | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.weakset?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.weakset?style=flat-square&color=blue&label=gzip) |

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
