# @zerodep/to.json

A higher-order function to convert a value to a JSON object. This includes converting `Date`, `Map`, `Set`, and `BigInt` values. If an object or class with a `toJSON()` method is found, the result of calling the method will be used.

The returned structure will be an object literal, an array or `null`.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { toJson } from '@zerodep/to.json';

// toJson is a higher-order function, shown here using the default options
toJson()({ one: 1, two: 2 }); // { "one": 1, "two: 2 }
toJson()(['a', 'b', 'c']); // ["a", "b", "c"]
toJson()(42); // throws ZeroDepErrorTo
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

// only the to.json utility
npm install @zerodep/to.json
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

```typescript
// typescript declaration
declare const toJson: <T = any[] | Record<string, any>>(
  options?: ToJsonOptions
) => (value: any | any[]) => T | null;

// optional configuration
interface ToJsonOptions {
  convertErrorsToNull?: boolean; // default is false
}
```

### Examples

**Simple Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toJson } from '@zerodep/to.json';

// configure, returns a function
const convert = toJson();

// use, returns an object literal, an array or null (or throws an error)
convert({}); // {}
convert({ a: 'one', b: 'two' }); // { "a": 'one', "b": 'two' }

convert([]); // []
convert([1, 2, 3]); // [1, 2, 3]
convert(['a', 'b', 'c']); // ["a", "b", "c"]

convert(new Set()); // []
convert(new Set([1, 2, 3])); // [1, 2, 3]
convert(new Map()); // {}
convert(new Map([['a', 1]])); // [["a", 1]]

convert(null); // null
convert(undefined); // null

convert({
  string: 'a string',
  date: new Date('2022-02-24'),
  int: 42,
  float: 3.14,
  bigInt: 8675309n,
  boolT: true,
  boolF: false,
});
// {
//   "string": "a string",
//   "date": "2022-02-24T00:00:00.000Z",
//   "int": 42,
//   "float": 3.14,
//   "bigInt": "8675309", <-- CAUTION: BigInt are converted to strings
//   "boolT": true,
//   "boolF": false,
// }

// object properties that cannot be converted to JSON
convert({ key: new WeakMap() }); // throws ZeroDepErrorTo
convert({ key: new WeakSet() }); // throws ZeroDepErrorTo
convert({ key: new Promise(() => {}) }); // throws ZeroDepErrorTo
convert({ key: new Error(() => {}) }); // throws ZeroDepErrorTo
convert({ key: Symbol() }); // throws ZeroDepErrorTo
convert({ key: () => {} }); // throws ZeroDepErrorTo

// strings
convert(''); // throws ZeroDepErrorTo
convert('a string'); // throws ZeroDepErrorTo

// integers
convert(42); // throws ZeroDepErrorTo
convert(3e8); // throws ZeroDepErrorTo

// floats
convert(-273.15); // throws ZeroDepErrorTo
convert(Math.PI); // throws ZeroDepErrorTo

// number-ish
convert(Number.POSITIVE_INFINITY); // throws ZeroDepErrorTo
convert(NaN); // throws ZeroDepErrorTo

// bigints
convert(8675309n); // throws ZeroDepErrorTo

// booleans
convert(true); // throws ZeroDepErrorTo
convert(false); // throws ZeroDepErrorTo

// other
convert(/^$\d{7}/g); // throws ZeroDepErrorTo
convert(new Date()); // throws ZeroDepErrorTo
convert(new Date('2022-02-24')); // throws ZeroDepErrorTo
convert(Symbol()); // throws ZeroDepErrorTo
convert(new Error()); // throws ZeroDepErrorTo
convert(() => {}); // throws ZeroDepErrorTo
```

**With Configuration Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toJson, ToJsonOptions } from '@zerodep/to.json';

// configure, returns a function
const options: ToJsonOptions = { convertErrorsToNull: true };
const convert = toJson();

// all examples the same as the simple example above, EXCEPT the following now return null instead of an error
convert({ key: new WeakMap() }); // { "key": null }
convert({ key: new WeakSet() }); // { "key": null }
convert({ key: new Promise(() => {}) }); // { "key": null }
convert({ key: new Error(() => {}) }); // { "key": null }
convert({ key: Symbol() }); // { "key": null }
convert({ key: () => {} }); // { "key": null }
```

**Error Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toJson } from '@zerodep/to.json';

try {
  toJson()('invalid JSON');
} catch (error: any) {
  console.log(error.message); // "Cannot convert a string to JSON"
  console.log(error.tax); // "type"
  console.log(error.source); // "to"
  console.log(error.value); // "invalid JSON" <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorTo; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.json](https://www.npmjs.com/package/@zerodep/is.number) - checks if a value is a JSON object
- [@zerodep/is.object](https://www.npmjs.com/package/@zerodep/is.float) - checks if a value is an object

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/to/to.json/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
