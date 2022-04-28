# @zerodep/is

A set of utility methods to determine if a given value is of a specific type of has a specific capability.

This is a barrel package of all `@zerodep/is.*` utility packages within the @zerodep monorepo.

**tl;dr**

```typescript
import { isArray, isFloat, isString, isInteger, isIterable, isNumber } from '@zerodep/is.array';

isArray([1, 2, 3]); // true
isArray('a string'); // false

isString([1, 2, 3]); // false
isString('a string'); // true

isNumber(42); // true
isNumber(3.14); // true

isInteger(42); // true
isInteger(3.14); // false

isFloat(42); // false
isFloat(3.14); // true

isIterable(['an', 'array']); // true
```

In case you were wondering, a "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

Barrel packages group semantically or logically similar functionally together resulting in package size savings and fewer imports for the development to manage compared to installing each package individually.

## Table of Contents

- [Installation Instructions](#install)
- [The `is` Family](#the-is-family)
  - [Signature](#signature)
  - [List of Packages](#list-of-packages)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils).

```
// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "is" utilities
npm install @zerodep/is
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## The `is` Family

### Signature

All `is` packages have the same signature, where "isXxxx" is the method name.

```typescript
// typescript declaration
declare const isXxxx: (value: any) => boolean;
```

### List of Packages

The following methods/packages are included in this barrel package.

| Method Name | Brief Description | Approx Size <br /> CJS / ESM |
| --- | --- | --- |
| [isArray](https://www.npmjs.com/package/@zerodep/is.array) | Checks if a value is an array | 250b / 174b |
| [isBigInt](https://www.npmjs.com/package/@zerodep/is.bigint) | Checks if a value is a BigInt | 256b / 179b |
| [isBoolean](https://www.npmjs.com/package/@zerodep/is.boolean) | Checks if a value is a boolean | 260b / 182b |
| [isDate](https://www.npmjs.com/package/@zerodep/is.date) | Checks if a value is a Date object | 271b / 196b |
| [isError](https://www.npmjs.com/package/@zerodep/is.error) | Checks if a value is an Error object (or subclass thereof) | 252b / 176b |
| [isFloat](https://www.npmjs.com/package/@zerodep/is.float) | Checks if a value is a float (excludes integers, NaN and infinite numbers) | 324b / 248b |
| [isFunction](https://www.npmjs.com/package/@zerodep/is.function) | Checks if a value is a function | 266b / 187b |
| [isInteger](https://www.npmjs.com/package/@zerodep/is.integer) | Checks if a value is an integer (excludes floats, NaN and infinite numbers) | 261b / 183b |
| [isIterable](https://www.npmjs.com/package/@zerodep/is.iterable) | Checks if a value is iterable (can be used in a `for...of` loop, excludes strings) | 412b / 333b |
| [isMap](https://www.npmjs.com/package/@zerodep/is.iterable) | Checks if a value is Map object | 242b / 168b |
| [isNil](https://www.npmjs.com/package/@zerodep/is.nil) | Checks if a value is `null` or `undefined` | 233b / 159b |
| [isNull](https://www.npmjs.com/package/@zerodep/is.null) | Checks if a value is `null` | 238b / 163b |
| [isNumber](https://www.npmjs.com/package/@zerodep/is.number) | Checks if a value is a float or an integer (excludes NaN and infinite numbers) | 302b / 225b |
| [isObject](https://www.npmjs.com/package/@zerodep/is.object) | Checks if a value is an object literal (not a JavaScript Object) | 342b / 265b |
| [isRegex](https://www.npmjs.com/package/@zerodep/is.regex) | Checks if a value is a regular expression | 253b / 177b |
| [isSet](https://www.npmjs.com/package/@zerodep/is.set) | Checks if a value is a Set object | 242b / 168b |
| [isString](https://www.npmjs.com/package/@zerodep/is.string) | Checks if a value is a string | 256b / 179b |
| [isSymbol](https://www.npmjs.com/package/@zerodep/is.symbol) | Checks if a value is a Symbol object | 256b / 179b |
| [isUndefined](https://www.npmjs.com/package/@zerodep/is.undefined) | Checks if a value is `undefined` | 260b / 180b |
| [isWeakMap](https://www.npmjs.com/package/@zerodep/is.weakmap) | Checks if a value is a WeakMap object | 262b / 184b |
| [isWeakSet](https://www.npmjs.com/package/@zerodep/is.weakset) | Checks if a value is a WeakSet object | 262b / 184b |
|  | Sum of all individual package sizes | **5.7kb** / **4.1kb** |
|  |  |
|  | **This barrel package** | **1.9kb** / **1.4kb** |
|  | size difference | _3.8kb_ / _2.7kb_ |

Above measurements are for the unpacked size of the minified javascript file (the part your build system will use and tree-shake). Of course given the included README and Typescript declarations the packages downloaded to the development machine or build server will be larger.

Additional information for each method can be found on the respective package page.

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing an a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
