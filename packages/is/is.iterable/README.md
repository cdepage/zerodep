# @zerodep/is.iterable

A utility to determine if a value implements the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that supports the `for....of` construct.

This utility **INTENTIONALLY EXCLUDES** strings, `null` and `undefined` as iterables because they are frequently a cause of software defects. In JavaScript a strings are iterable: you get one letter at a time; both `null` and `undefined` also claim to be iterable.

On the flip side, object literals (JSON) are NOT iterable. You can run a `for...in` loop on them, but not a `for...of`.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { isIterable } from '@zerodep/is.iterable';

isIterable(['a', 'b']); // true
isIterable(new Map([['a', 1]])); // true
isIterable(new Set(['a', 'b'])); // true
isIterable({ plain: 'object' }); // false <-- CAUTION
isIterable('a string'); // false <-- CAUTION
isIterable(42); // false
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

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/is).

```
// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "is" utilities
npm install @zerodep/is

// only the is.iterable utility
npm install @zerodep/is.iterable
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const isIterable: (value: any) => boolean;
```

### Examples

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isIterable } from '@zerodep/is.iterable';

isIterable([]); // true
isIterable([1, 2, 3]); // true
isIterable(['a', 'b', 'c']); // true
isIterable(new Set()); // true
isIterable(new Set([1, 2, 3])); // true
isIterable(new Map()); // true
isIterable(new Map([['a', 1]])); // true

// strings
isIterable(''); // false
isIterable('a string'); // false

// integers
isIterable(42); // false
isIterable(3e8); // false

// floats
isIterable(-273.15); // false
isIterable(Math.PI); // false

// number-ish
isIterable(Number.POSITIVE_INFINITY); // false
isIterable(NaN); // false

// bigints
isIterable(8675309n); // false

// object literals
isIterable({}); // false
isIterable({ a: 'one', b: 'two' }); // false

// booleans
isIterable(true); // false
isIterable(false); // false

// other
isIterable(/^$\d{7}/g); // false
isIterable(new Date()); // false
isIterable(new Date('2022-02-24')); // false
isIterable(new Symbol()); // false
isIterable(new Error()); // false
isIterable(() => {}); // false

// nothing
isIterable(null); // false
isIterable(undefined); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.number](https://www.npmjs.com/package/@zerodep/is.number) - checks if a value is an iterable or float
- [@zerodep/is.float](https://www.npmjs.com/package/@zerodep/is.float) - checks if a value is float
- [@zerodep/is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) - checks if a value is a BigInt
- [@zerodep/guard.iterable](https://www.npmjs.com/package/@zerodep/guard.iterable) - only allows iterable values (throws an error for non-iterable values), reduces the need to write `if/else` code, may be configured for minimum/maximum values

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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is.iterable/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.iterable/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
