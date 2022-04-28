# @zerodep/is.set

A utility to determine if a value is a Set.

**tl;dr**

```typescript
import { isSet } from '@zerodep/is.set';

isSet(new Set(['a', 'b', 'c'])); // true
isSet('a string'); // false
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

// only the is.set utility
npm install @zerodep/is.set
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const isSet: (value: any) => boolean;
```

### Examples

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isSet } from '@zerodep/is.set';

isSet(new Set()); // true
isSet(new Set([1, 2, 3])); // true

// strings
isSet(''); // false
isSet('a string'); // false

// integers
isSet(42); // false
isSet(3e8); // false

// floats
isSet(-273.15); // false
isSet(Math.PI); // false

// number-ish
isSet(Number.POSITIVE_INFINITY); // false
isSet(NaN); // false

// bigints
isSet(8675309n); // false

// object literals
isSet({}); // false
isSet({ a: 'one', b: 'two' }); // false

// arrays
isSet([]); // true
isSet([1, 2, 3]); // true
isSet(['a', 'b', 'c']); // true

// booleans
isSet(true); // false
isSet(false); // false

// other
isSet(/^$\d{7}/g); // false
isSet(new Date()); // false
isSet(new Date('2022-02-24')); // false
isSet(new Map()); // false
isSet(new Map([['a', 1]])); // false
isSet(new Symbol()); // false
isSet(new Error()); // false
isSet(() => {}); // false

// nothing
isSet(null); // false
isSet(undefined); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.array](https://www.npmjs.com/package/@zerodep/is.array) - checks if a value is an array
- [@zerodep/is.weakset](https://www.npmjs.com/package/@zerodep/is.weakset) - checks if a value is a WeakSet object
- [@zerodep/guard.set](https://www.npmjs.com/package/@zerodep/guard.set) - only allows Set objects (throws an error for non-set values), reduces the need to write `if/else` code, may be configured for minimum/maximum quantity of elements and types

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

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of both the [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is.set/CHANGELOG.md) and any associated software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.set/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
