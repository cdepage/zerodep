# @zerodep/to.json

A function that converts a value to a JSON object. This includes converting `Date`, `Map`, `Set`, and `BigInt` values. If an object or class with a `toJSON()` method is found, the result of calling the method will be used.

The toJSON method can be optionally configured to convert non-JSON-able values (e.g. `Symbol` or `WeakMap`) to `null` instead of throwing errors.

The function returns a plain JSON object, which means an object literal, an array or `null`. This object could be serialized (converted to a string) without affecting data integrity.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { toJSON } from '@zerodep/to.json';

// uses the default configuration options
toJSON({ one: 1, two: 2 }); // { "one": 1, "two: 2 }
toJSON(['a', 'b', 'c']); // ["a", "b", "c"]
toJSON(42); // throws ZeroDepErrorTo
toJSON({ wm: new Promise(() => {}) }); // throws ZeroDepErrorTo
```

and

```typescript
import { toJSONHOF, ToJSONOptions } from '@zerodep/to.json';

// uses a custom configuration options
const options: ToJSONOptions = { convertInvalidToNull: true };
const toJSON = toJSONHOF(options);

toJSON({ one: 1, two: 2 }); // { "one": 1, "two: 2 }
toJSON(['a', 'b', 'c']); // ["a", "b", "c"]
toJSON(42); // still throws ZeroDepErrorTo
toJSON({ wm: new Promise(() => {}) }); // { "wm": null }
```

Apologies for the mess of capital letters, however both JSON and HOF are abbreviations. Not keeping either one uppercase would violate the naming patterns of the @zerodep packages.

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Configuration Options](#configuration-options)
  - [Examples](#examples)
- [Configuration via Higher Order Function](#configuration-via-higher-order-function)
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

Typescript declarations:

```typescript
// using default configuration options
declare const toJSON: (value: any | any[]) => any[] | Record<string, any> | null;

// customizing the configuration options
declare const toJSONHOF: <T = any[] | Record<string, any>>(
  options?: ToJSONOptions
) => (value: any | any[]) => T | null;

// optional configuration
interface ToJSONOptions {
  convertInvalidToNull?: boolean; // default is false
}
```

### Configuration Options

**convertInvalidToNull:**

- Defaults to: `false`
- If `true` it will convert any non-JSON-able properties to `null` instead of throwing the appropriate ZeroDepError

### Examples

**Using Default Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toJSON } from '@zerodep/to.json';

// use, returns an object literal, an array or null (or throws an error)
toJSON({}); // {}
toJSON({ a: 'one', b: 'two' }); // { "a": 'one', "b": 'two' }

toJSON([]); // []
toJSON([1, 2, 3]); // [1, 2, 3]
toJSON(['a', 'b', 'c']); // ["a", "b", "c"]

toJSON(new Set()); // []
toJSON(new Set([1, 2, 3])); // [1, 2, 3]
toJSON(new Map()); // {}
toJSON(new Map([['a', 1]])); // [["a", 1]]

toJSON(null); // null
toJSON(undefined); // null

toJSON({
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

// object properties that cannot be toJSONed to JSON
toJSON({ key: new WeakMap() }); // throws ZeroDepErrorTo
toJSON({ key: new WeakSet() }); // throws ZeroDepErrorTo
toJSON({ key: new Promise(() => {}) }); // throws ZeroDepErrorTo
toJSON({ key: new Error(() => {}) }); // throws ZeroDepErrorTo
toJSON({ key: Symbol() }); // throws ZeroDepErrorTo
toJSON({ key: () => {} }); // throws ZeroDepErrorTo

// strings
toJSON(''); // throws ZeroDepErrorTo
toJSON('a string'); // throws ZeroDepErrorTo

// integers
toJSON(42); // throws ZeroDepErrorTo
toJSON(3e8); // throws ZeroDepErrorTo

// floats
toJSON(-273.15); // throws ZeroDepErrorTo
toJSON(Math.PI); // throws ZeroDepErrorTo

// number-ish
toJSON(Number.POSITIVE_INFINITY); // throws ZeroDepErrorTo
toJSON(NaN); // throws ZeroDepErrorTo

// bigints
toJSON(8675309n); // throws ZeroDepErrorTo

// booleans
toJSON(true); // throws ZeroDepErrorTo
toJSON(false); // throws ZeroDepErrorTo

// other
toJSON(/^$\d{7}/g); // throws ZeroDepErrorTo
toJSON(new Date()); // throws ZeroDepErrorTo
toJSON(new Date('2022-02-24')); // throws ZeroDepErrorTo
toJSON(Symbol()); // throws ZeroDepErrorTo
toJSON(new Error()); // throws ZeroDepErrorTo
toJSON(() => {}); // throws ZeroDepErrorTo
```

**Using Customized Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { ToJSONOptions, toJSONHOF } from '@zerodep/to.json';

const options: ToJSONOptions = { convertInvalidToNull: true };
const toJSON = toJSONHOF(options);

// all examples the same as the simple example above, EXCEPT the following now return null instead of an error
toJSON({ key: new WeakMap() }); // { "key": null }
toJSON({ key: new WeakSet() }); // { "key": null }
toJSON({ key: new Promise(() => {}) }); // { "key": null }
toJSON({ key: new Error(() => {}) }); // { "key": null }
toJSON({ key: Symbol() }); // { "key": null }
toJSON({ key: () => {} }); // { "key": null }
```

**ZeroDepErrorTo Example**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toJSON } from '@zerodep/to.json';

try {
  toJSON('invalid JSON');
} catch (error: any) {
  console.log(error.message); // "Cannot convert to JSON"
  console.log(error.category); // "syntax"
  console.log(error.source); // "to"
  console.log(error.value); // "invalid JSON" <-- value that caused the error

  // inheritance chain
  error instanceof ZeroDepErrorTo; // true
  error instanceof ZeroDepError; // true
  error instanceof Error; // true
}
```

## Configuration via Higher Order Function

Let's begin with a definition to ensure a common vocabulary: a Higher Order Function (HOF) is just a function that returns another function.

This package uses a Higher Order Function as a way to set up/configure its functionality for:

- **cleaner code:** having to pass configuration options once instead of to every call to the function making your code easier to read and reason about
- **improved performance:** any time a set of configuration options is passed to a function, it is merged with some default values, doing this once means fewer CPU cycles and memory consumption
- **future scalability:** if/when additional configuration options are available they will have no impact on your existing code and will be easier to add should you wish to use them
- **consistency:** all @zerodep packages that may be configured follow the same pattern, making the Developer Experience (DX) just a little sweeter

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/is.json](https://www.npmjs.com/package/@zerodep/is.json) - checks if a value is a JSON object
- [@zerodep/is.object](https://www.npmjs.com/package/@zerodep/is.object) - checks if a value is an object
- [@zerodep/is.array](https://www.npmjs.com/package/@zerodep/is.array) - checks if a value is an array

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/to/to.json/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
