# @zerodep/is.equal

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is.equal?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.equal) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is.equal?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is.equal) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/is.equal) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/is.equal?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/is.equal?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/is.equal?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/is.equal)

**A utility to compare two values of any type for equality.**

In addition to the easy task of determining if JavaScript primitives are equal (in both type and value), this utility:

- compares objects and arrays by value, including deeply nested values
- handles multiple JavaScript constructs such as `Date`, `Map`, `Set`, `RegExp`, `BigInt`, `ArrayBuffer` and many more
- smooths over areas of common mistakes and frustrations:
  - `NaN` and `NaN` are treated as equals
  - comparing signed zeroes (`0`, `-0`, `0n` and `-0n`) is possible
  - handles object wrappers like `new Boolean()`, `new String()`, `new Number()`
- values performance, most operations have a time complexity of constant time, `O(1)`, values with multiple items (e.g., arrays, objects) may be in linear time, `O(n)`, and (when dealing with many thousands of array or nested object items) as high as linearithmic, `O(n log n)`; if you don't speak geek, it means it's really fast

## tl;dr

A short explanation / quick reference:

```typescript
import { isEqual } from '@zerodep/is.equal';

isEqual('a', 'a'); // true
isEqual('1', 1); // false
isEqual(3.141596, 3.141596); // true
isEqual([1, 2, 3, 4, 5, 6], [2, 4, 6, 1, 3, 5]); // true
isEqual(['a', 1, true, ['nested', 'value']], ['a', ['value', 'nested'], 1, true]); // true
isEqual(
  { an: object, supprting: { nested: { objects: 'too' } } },
  { an: object, supprting: { nested: { objects: 'too' } } }
); // true
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

// only the is.equal utility
npm install @zerodep/is.equal
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { isEqual } from 'https://cdn.jsdelivr.net/npm/@zerodep/is.equal/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/is.equal/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.isEqual('some value', 'another value');
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/is.equal/umd.js) and [unpkg](https://unpkg.com/@zerodep/is.equal/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `isEqual` - a function to deeply compare two values
- Error types
  - `ZeroDepErrorIs` - The subclass of error thrown by an `is.*` package
  - `ZeroDepError` - the error class all ZeroDep packages extend from, is an instance of the base Error object

### Signature

```typescript
// typescript declaration
declare const isEqual: (val1: any, val2: any) => boolean;
```

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.isEqual(...)`.

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isEqual } from '@zerodep/is.equal';

// strings
isEqual('', ''); // true
isEqual('abc 123 !@#', 'abc 123 !@#'); // true
isEqual('foo', 'bar'); // false
isEqual(new String('a string'), 'a string'); // true

// integers
isEqual(42, 42); // true
isEqual(-18, -18); // true
isEqual(0, 0); // true
isEqual(0, -0); // false
isEqual(new Number(42), 42); // true

// floats
isEqual(Math.PI, Math.PI); // true
isEqual(-273.15, -273.15); // true
isEqual(98.6, 98.60001); // false
isEqual(new Number(0.08), 0.08); // true

// big ints
isEqual(10n, 10n); // true
isEqual(10n, 20n); // false
isEqual(0n, 0n); // true
isEqual(0n, -0n); // false
isEqual(BigInt(25), 25n); // true

// number-ish
isEqual(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY); // true
isEqual(Number.MIN_VALUE, Number.MIN_VALUE); // true
isEqual(NaN, NaN); // true
isEqual(NaN, null); // false
isEqual(NaN, undefined); // false
isEqual(NaN, false); // false

// object literals
isEqual({}, {}); // true
isEqual({ a: 'one', b: 'two' }, { b: 'two', a: 'one' }); // true - order does not matter
isEqual({ a: 'one', b: 'two' }, { c: 'three' }); // false
isEqual({ a: { b: { c: { d: { e: 5 } } } } }, { a: { b: { c: { d: { e: 5 } } } } }); // true
isEqual({ a: { b: { c: { d: { e: 5 } } } } }, { a: { b: { c: { d: { e: 6 } } } } }); // false

// arrays
isEqual([], []); // true
isEqual([1, 2], [2, 1]); // true - order does not matter
isEqual([1, 2], [3, 5]); // false
isEqual(
  ['a', { nested: ['values', { are: 'allowed', to: ['be', 'deep'] }] }],
  ['a', { nested: ['values', { are: 'allowed', to: ['be', 'deep'] }] }]
); // true
isEqual(
  ['a', { nested: ['values', { are: 'allowed', to: ['be', 'deep'] }] }],
  ['a', { nested: ['values', { are: 'allowed', to: ['bee', 'dep'] }] }]
); // false

// booleans
isEqual(true, true); // true
isEqual(false, false); // true
isEqual(true, false); // false
isEqual(new Boolean(true), true); // true

// regular expressions
isEqual(/^$\d{7}/g, /^$\d{7}/g); // true
isEqual(/[a-f]/g, new RegExp('[a-f]', 'g')); // true
isEqual(/[0-9]+/g, /\d+/g); // false

// dates
isEqual(new Date(), new Date()); // true
isEqual(new Date(), new Date('2022-04-22')); // false

// maps
isEqual(new Map(), new Map()); // true
isEqual(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
  new Map([
    ['b', 2],
    ['a', 1],
  ])
); // true - order does not matter
isEqual(new Map([['c', 3]]), new Map([['d', 4]])); // false
isEqual(new Map([[e, 5]]), { e: 5 }); // false - Maps and Objects are different types

// sets
isEqual(new Set(), new Set()); // true
isEqual(new Set(['a', 1, true]), new Set([1, true, 'a'])); // true - order does not matter
isEqual(new Set([1, 2, 3]), new Set([4, 5, 6])); // false
isEqual(new Set(['b', 'c']), ['b', 'c']); // false - Sets and Arrays are different types

// error
isEqual(new Error('message 1'), new Error('message 1')); // true
isEqual(new Error('message 1'), new Error('message 2')); // false
isEqual(new TypeError('message'), new SyntaxError('message')); // false

// incomparables
isEqual(new WeakMap(), new WeakMap()); // throws ZeroDepErrorIs
isEqual(new WeakSet(), new WeakSet()); // throws ZeroDepErrorIs
isEqual(Symbol(), Symbol()); // throws ZeroDepErrorIs

// nothing
isEqual(null, null); // true
isEqual(undefined, undefined); // true
isEqual(null, undefined); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.array](https://www.npmjs.com/package/@zerodep/is.array) - checks if a value is an array
- [@zerodep/is.object](https://www.npmjs.com/package/@zerodep/is.object) - checks if a value is an object

## Advantages of @zerodep Packages

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.equal/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
