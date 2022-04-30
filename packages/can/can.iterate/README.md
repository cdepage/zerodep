# @zerodep/can.iterate

A utility to determine if a value implements the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that supports the `for....of` construct.

This utility **INTENTIONALLY EXCLUDES** strings, `null` and `undefined` as iterables because they are frequently a cause of software defects. In JavaScript a strings are iterable: you get one letter at a time; both `null` and `undefined` also claim to be iterable.

On the flip side, object literals (JSON) are NOT iterable. You can run a `for...in` loop on them, but not a `for...of`.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { canIterate } from '@zerodep/can.iterate';

canIterate(['a', 'b']); // true
canIterate(new Map([['a', 1]])); // true
canIterate(new Set(['a', 'b'])); // true
canIterate({ plain: 'object' }); // false <-- CAUTION
canIterate('a string'); // false <-- CAUTION
canIterate(42); // false
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app), [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/is).

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "can" utilities
npm install @zerodep/can

// only the can.iterate utility
npm install @zerodep/can.iterate
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const canIterate: (value: any) => boolean;
```

### Examples

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { canIterate } from '@zerodep/can.iterate';

canIterate([]); // true
canIterate([1, 2, 3]); // true
canIterate(['a', 'b', 'c']); // true
canIterate(new Set()); // true
canIterate(new Set([1, 2, 3])); // true
canIterate(new Map()); // true
canIterate(new Map([['a', 1]])); // true

// strings
canIterate(''); // false
canIterate('a string'); // false

// integers
canIterate(42); // false
canIterate(3e8); // false

// floats
canIterate(-273.15); // false
canIterate(Math.PI); // false

// number-ish
canIterate(Number.POSITIVE_INFINITY); // false
canIterate(NaN); // false

// bigints
canIterate(8675309n); // false

// object literals
canIterate({}); // false
canIterate({ a: 'one', b: 'two' }); // false

// booleans
canIterate(true); // false
canIterate(false); // false

// other
canIterate(/^$\d{7}/g); // false
canIterate(new Date()); // false
canIterate(new Date('2022-02-24')); // false
canIterate(Symbol()); // false
canIterate(new Error()); // false
canIterate(() => {}); // false

// nothing
canIterate(null); // false
canIterate(undefined); // false
```

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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/can/can.iterate/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
