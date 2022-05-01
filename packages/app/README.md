# @zerodep/app

This is a library of commonly used utilities, tests, and guards that help developers write better software. This is a barrel package of all `@zerodep.*` packages and higher-order functions.

Assuming your build process includes tree shaking all unused packages will be removed, no bloat to your end user or production compute environment.

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
npm install @zerodep/app
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## Included Packages

This barrel package includes all packages in the @zerodep ecosystem:

| Method Name | Package | Purpose |
| --- | --- | --- |
| ZeroDepError | [errors](https://www.npmjs.com/package/@zerodep/errors) | A namespaced subclass of the `Error` object with additional properties, used by all @zerodep methods |
|  |  |
| canIterate | [can.iterate](https://www.npmjs.com/package/@zerodep/can.iterate) | Determine if a value is iterable in a `for...of` loop (with opinionated safeguards) |
|  |  |
| guardArray | [guard.array](https://www.npmjs.com/package/@zerodep/guard.array) | A configurable HOC to guard against non-array arguments |
| guardBigInt | [guard.bigint](https://www.npmjs.com/package/@zerodep/guard.bigint) | A configurable HOC to guard against non-BigInt arguments |
| guardBoolean | [guard.boolean](https://www.npmjs.com/package/@zerodep/guard.boolean) | A configurable HOC to guard against non-boolean arguments |
| guardDate | [guard.date](https://www.npmjs.com/package/@zerodep/guard.date) | A configurable HOC to guard against non-Date arguments |
| guardFloat | [guard.float](https://www.npmjs.com/package/@zerodep/guard.float) | A configurable HOC to guard against non-float arguments |
| guardInteger | [guard.integer](https://www.npmjs.com/package/@zerodep/guard.integer) | A configurable HOC to guard against non-integer arguments |
| guardNumber | [guard.number](https://www.npmjs.com/package/@zerodep/guard.number) | A configurable HOC to guard against non-float/non-integer arguments |
| guardObject | [guard.object](https://www.npmjs.com/package/@zerodep/guard.object) | A configurable HOC to guard against non-object literal arguments |
| guardString | [guard.string](https://www.npmjs.com/package/@zerodep/guard.string) | A configurable HOC to guard against non-string arguments |
| ZeroDepErrorGuard, <br />ZeroDepErrorGuardType, <br />ZeroDepErrorGuardRange | [guard.errors](https://www.npmjs.com/package/@zerodep/guard.errors) | The error types thrown by @zerodep/guard methods, they all subclass the `ZeroDepError` class, some with additional properties |
|  |  |
| isArray | [is.array](https://www.npmjs.com/package/@zerodep/is.array) | A utility to determine if a value is an array |
| isBigInt | [is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) | A utility to determine if a value is a BigInt |
| isBoolean | [is.boolean](https://www.npmjs.com/package/@zerodep/is.boolean) | A utility to determine if a value is a boolean |
| isDate | [is.date](https://www.npmjs.com/package/@zerodep/is.date) | A utility to determine if a value is a Date |
| isFloat | [is.float](https://www.npmjs.com/package/@zerodep/is.float) | A utility to determine if a value is a non-infinite float |
| isFunction | [is.function](https://www.npmjs.com/package/@zerodep/is.function) | A utility to determine if a value is a function |
| isInteger | [is.integer](https://www.npmjs.com/package/@zerodep/is.integer) | A utility to determine if a value is a non-infinite integer |
| isJson | [is.json](https://www.npmjs.com/package/@zerodep/is.json) | A utility to determine if a value is a serializable JSON object |
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
|  |  |
| ZeroDepErrorTo | [to.errors](https://www.npmjs.com/package/@zerodep/to.errors) | The error type thrown by @zerodep/to methods, they all subclass the `ZeroDepError` class |
| toJSON | [to.json](https://www.npmjs.com/package/@zerodep/to.json) | A configurable HOC to convert a value to JSON |
| toString | [to.string](https://www.npmjs.com/package/@zerodep/to.string) | A configurable HOC to convert a value to a string |
|  |  |
| TypesLocales | [types.locales](https://www.npmjs.com/package/@zerodep/types.locales) | Typescript `type` declaration of locales |
| TypesTimeZones | [types.timezones](https://www.npmjs.com/package/@zerodep/types.timezones) | Typescript `type` declaration of time zones |

## How to Use

For specific details and configuration options, see the specific package.

```typescript
import { canIterate, guardArray, isNumber, toString } from '@zerodep/app';

// can-functions always return a boolean
canIterate(['a', 'b', 'c']); // true
canIterate(42); // false

// guards are HOFs - these examples use the default options
guardArray()(['a', 'b', 'c']); // ["a", "b", "c"]
guardArray()('a string'); // throws ZeroDepErrorGuardType

// is-functions always return a boolean
isNumber(42); // true
isNumber('a string'); // false

// to-functions are HOFs - these examples use the default options
toString()(42); // 42
toString()(Symbol); // throws ZeroDepErrorTo
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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/app/app/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)