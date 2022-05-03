# @zerodep/is

A set of utility methods to determine if a given value is of a specific type of has a specific capability.

This is a barrel package of all `@zerodep/is.*` utility packages within the @zerodep monorepo.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { isArray, isFloat, isString, isInteger, isNumber } from '@zerodep/is';

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
```

**Barrel Package:** "barrel" is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
- [How to Use](#how-to-use)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

```
npm install @zerodep/is
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all `@zerodep/is.*` packages:

| Method Name | Package | Purpose |
| --- | --- | --- |
| isArray | [is.array](https://www.npmjs.com/package/@zerodep/is.array) | A utility to determine if a value is an array |
| isBigInt | [is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) | A utility to determine if a value is a BigInt |
| isBoolean | [is.boolean](https://www.npmjs.com/package/@zerodep/is.boolean) | A utility to determine if a value is a boolean |
| isDate | [is.date](https://www.npmjs.com/package/@zerodep/is.date) | A utility to determine if a value is a Date |
| isFloat | [is.float](https://www.npmjs.com/package/@zerodep/is.float) | A utility to determine if a value is a non-infinite float |
| isFunction | [is.function](https://www.npmjs.com/package/@zerodep/is.function) | A utility to determine if a value is a function |
| isInteger | [is.integer](https://www.npmjs.com/package/@zerodep/is.integer) | A utility to determine if a value is a non-infinite integer |
| isJSON | [is.json](https://www.npmjs.com/package/@zerodep/is.json) | A utility to determine if a value is a serializable JSON object |
| isMap | [is.map](https://www.npmjs.com/package/@zerodep/is.map) | A utility to determine if a value is a Map |
| isNil | [is.nil](https://www.npmjs.com/package/@zerodep/is.nil) | A utility to determine if a value is `null` or `undefined` |
| isNull | [is.null](https://www.npmjs.com/package/@zerodep/is.null) | A utility to determine if a value is `null` |
| isNumber | [is.number](https://www.npmjs.com/package/@zerodep/is.number) | A utility to determine if a value is a non-infinite float or integer |
| isObject | [is.object](https://www.npmjs.com/package/@zerodep/is.object) | A utility to determine if a value is an object |
| isPromise | [is.promise](https://www.npmjs.com/package/@zerodep/is.promise) | A utility to determine if a value is a Promise |
| isRegex | [is.regex](https://www.npmjs.com/package/@zerodep/is.regex) | A utility to determine if a value is a regular expression |
| isSet | [is.set](https://www.npmjs.com/package/@zerodep/is.set) | A utility to determine if a value is a Set |
| isString | [is.string](https://www.npmjs.com/package/@zerodep/is.string) | A utility to determine if a value is a string |
| isSymbol | [is.symbol](https://www.npmjs.com/package/@zerodep/is.symbol) | A utility to determine if a value is a Symbol |
| isTypedArray | [is.typedarray](https://www.npmjs.com/package/@zerodep/is.typedarray) | A utility to determine if a value is a Typed Array |
| isUndefined | [is.undefined](https://www.npmjs.com/package/@zerodep/is.undefined) | A utility to determine if a value is `undefined` |
| isWeakMap | [is.weakmap](https://www.npmjs.com/package/@zerodep/is.weakmap) | A utility to determine if a value is a WeakMap |
| isWeakSet | [is.weakset](https://www.npmjs.com/package/@zerodep/is.weakset) | A utility to determine if a value is a WeakSet |

## How to Use

For specific details and configuration options, see the specific package.

```typescript
import { isNumber } from '@zerodep/is';

// is-functions always return a boolean
isNumber(42); // true
isNumber('a string'); // false
```

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
