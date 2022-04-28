# @zerodep/is.json

A utility to determine if a value is a JSON object.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { isJson } from '@zerodep/is.json';

isJson({ a: 1 }); // true
isJson(['a', 'b', 'c']); // true
isJson([{ one: 1 }, { two: 2}]); // true
isJson(42); // false
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

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "is" utilities
npm install @zerodep/is

// only the is.json utility
npm install @zerodep/is.json
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const isJson: (value: any) => boolean;
```

### Examples

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { isJson } from '@zerodep/is.json';

isJson({}); // true
isJson({ a: 'one', b: 'two' }); // true
isJson([]); // true
isJson([1, 2, 3]); // true
isJson(['a', 'b', 'c']); // true

// strings
isJson(''); // false
isJson('a string'); // false

// integers
isJson(42); // false
isJson(3e8); // false

// floats
isJson(-273.15); // false
isJson(Math.PI); // false

// number-ish
isJson(Number.POSITIVE_INFINITY); // false
isJson(NaN); // false

// bigints
isJson(8675309n); // false

// booleans
isJson(true); // false
isJson(false); // false

// other
isJson(/^$\d{7}/g); // false
isJson(new Date()); // false
isJson(new Date('2022-02-24')); // false
isJson(new Set()); // false
isJson(new Set([1, 2, 3])); // false
isJson(new Map()); // false
isJson(new Map([['a', 1]])); // false
isJson(new Symbol()); // false
isJson(new Error()); // false
isJson(() => {}); // false

// nothing
isJson(null); // false
isJson(undefined); // false
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.number](https://www.npmjs.com/package/@zerodep/is.number) - checks if a value is an json or float
- [@zerodep/is.float](https://www.npmjs.com/package/@zerodep/is.float) - checks if a value is float
- [@zerodep/is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) - checks if a value is a BigInt
- [@zerodep/guard.json](https://www.npmjs.com/package/@zerodep/guard.json) - only allows JSON objects (throws an error for non-JSON values), reduces the need to write `if/else` code

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/is/is.json/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
