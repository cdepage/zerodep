# @zerodep/app

[![min](https://img.shields.io/bundlephobia/min/@zerodep/app?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/app) [![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/app?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/app) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/app) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/app?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/app?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/app?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/app)

This is a library of commonly used utilities, formatters, tests, and guards that help developers be more productive. This is a barrel package of all `@zerodep.*` packages, higher-order functions, and types.

Works in the browser and on the server. Includes typescript definitions as well as tree-shakable CJS and ESM exports. Works out-of-the-box; may be configured as required.

## Table of Contents

- [Installation Instructions](#install)
- [Included Packages](#included-packages)
  - [Base Error](#base-error)
  - [Can](#can)
  - [Format](#format)
  - [Guard](#guard)
  - [Is](#is)
  - [Locale](#locale)
  - [To](#to)
  - [Types](#types)
- [Related Packages](#related-packages)
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

The `@zerodep/app` package is a tree-shakable collection of all packages in the @zerodep ecosystem.

### Base Error

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| ZeroDepError | [errors](https://www.npmjs.com/package/@zerodep/errors) | A namespaced subclass of the `Error` object with additional properties, used by all @zerodep methods | ![min](https://img.shields.io/bundlephobia/min/@zerodep/errors?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/errors?style=flat-square&color=blue&label=gzip) |

<br />

### Can

A set of functions that test for specific language construct capabilities or features.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| canIterate | [can.iterate](https://www.npmjs.com/package/@zerodep/can.iterate) | Determine if a value is iterable in a `for...of` loop (with opinionated safeguards) | ![min](https://img.shields.io/bundlephobia/min/@zerodep/can.iterate?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/can.iterate?style=flat-square&color=blue&label=gzip) |

<br />

### Format

A set of locale-aware, configurable functions that format a value for a specific use case.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| formatCurrency | [format.currency](https://www.npmjs.com/package/@zerodep/format.currency) | A configurable, locale-aware utility to format a value to a currency | ![min](https://img.shields.io/bundlephobia/min/@zerodep/format.currency?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/format.currency?style=flat-square&color=blue&label=gzip) |

<br />

### Guard

A collection of configurable defensive programming utilities that guard for specific data types.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| guardArray | [guard.array](https://www.npmjs.com/package/@zerodep/guard.array) | A configurable defensive programming utility to guard against non-array values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.array?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.array?style=flat-square&color=blue&label=gzip) |
| guardBigInt | [guard.bigint](https://www.npmjs.com/package/@zerodep/guard.bigint) | A configurable defensive programming utility to guard against non-BigInt values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.bigint?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.bigint?style=flat-square&color=blue&label=gzip) |
| guardBoolean | [guard.boolean](https://www.npmjs.com/package/@zerodep/guard.boolean) | A configurable defensive programming utility to guard against non-boolean values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.boolean?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.boolean?style=flat-square&color=blue&label=gzip) |
| guardDate | [guard.date](https://www.npmjs.com/package/@zerodep/guard.date) | A configurable defensive programming utility to guard against non-Date values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.date?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.date?style=flat-square&color=blue&label=gzip) |
| guardFloat | [guard.float](https://www.npmjs.com/package/@zerodep/guard.float) | A configurable defensive programming utility to guard against non-float values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.float?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.float?style=flat-square&color=blue&label=gzip) |
| guardFunction | [guard.function](https://www.npmjs.com/package/@zerodep/guard.function) | A configurable defensive programming utility to guard against non-function values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.function?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.function?style=flat-square&color=blue&label=gzip) |
| guardInteger | [guard.integer](https://www.npmjs.com/package/@zerodep/guard.integer) | A configurable defensive programming utility to guard against non-integer values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.integer?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.integer?style=flat-square&color=blue&label=gzip) |
| guardJSON | [guard.json](https://www.npmjs.com/package/@zerodep/guard.json) | A configurable defensive programming utility to guard against non-JSON object values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.json?style=flat-square&color=blue&label=gzip) |
| guardNumber | [guard.number](https://www.npmjs.com/package/@zerodep/guard.number) | A configurable defensive programming utility to guard against non-float/non-integer values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.number?style=flat-square&color=blue&label=gzip) |
| guardObject | [guard.object](https://www.npmjs.com/package/@zerodep/guard.object) | A configurable defensive programming utility to guard against non-plain JavaScript object values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.object?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.object?style=flat-square&color=blue&label=gzip) |
| guardString | [guard.string](https://www.npmjs.com/package/@zerodep/guard.string) | A configurable defensive programming utility to guard against non-string values | ![min](https://img.shields.io/bundlephobia/min/@zerodep/guard.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/guard.string?style=flat-square&color=blue&label=gzip) |

<br />

### Is

A collection of utility methods to determine the classification or equality of a value.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| isArray | [is.array](https://www.npmjs.com/package/@zerodep/is.array) | A utility to determine if a value is an array | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.array?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.array?style=flat-square&color=blue&label=gzip) |
| isBigInt | [is.bigint](https://www.npmjs.com/package/@zerodep/is.bigint) | A utility to determine if a value is a BigInt | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.bigint?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.bigint?style=flat-square&color=blue&label=gzip) |
| isBoolean | [is.boolean](https://www.npmjs.com/package/@zerodep/is.boolean) | A utility to determine if a value is a boolean | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.boolean?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.boolean?style=flat-square&color=blue&label=gzip) |
| isDate | [is.date](https://www.npmjs.com/package/@zerodep/is.date) | A utility to determine if a value is a Date | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.date?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.date?style=flat-square&color=blue&label=gzip) |
| isEqual | [is.equal](https://www.npmjs.com/package/@zerodep/is.equal) | A utility to deeply compare two values of any type for equality | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.equal?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.equal?style=flat-square&color=blue&label=gzip) |
| isFloat | [is.float](https://www.npmjs.com/package/@zerodep/is.float) | A utility to determine if a value is a non-infinite float | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.float?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.float?style=flat-square&color=blue&label=gzip) |
| isFunction | [is.function](https://www.npmjs.com/package/@zerodep/is.function) | A utility to determine if a value is a function | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.function?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.function?style=flat-square&color=blue&label=gzip) |
| isInteger | [is.integer](https://www.npmjs.com/package/@zerodep/is.integer) | A utility to determine if a value is a non-infinite integer | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.integer?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.integer?style=flat-square&color=blue&label=gzip) |
| isJSON | [is.json](https://www.npmjs.com/package/@zerodep/is.json) | A utility to determine if a value is a serializable JSON object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.json?style=flat-square&color=blue&label=gzip) |
| isMap | [is.map](https://www.npmjs.com/package/@zerodep/is.map) | A utility to determine if a value is a Map | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.map?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.map?style=flat-square&color=blue&label=gzip) |
| isNil | [is.nil](https://www.npmjs.com/package/@zerodep/is.nil) | A utility to determine if a value is `null` or `undefined` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.nil?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.nil?style=flat-square&color=blue&label=gzip) |
| isNull | [is.null](https://www.npmjs.com/package/@zerodep/is.null) | A utility to determine if a value is `null` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.null?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.null?style=flat-square&color=blue&label=gzip) |
| isNumber | [is.number](https://www.npmjs.com/package/@zerodep/is.number) | A utility to determine if a value is a non-infinite float or integer | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.number?style=flat-square&color=blue&label=gzip) |
| isObject | [is.object](https://www.npmjs.com/package/@zerodep/is.object) | A utility to determine if a value is a plain JavaScript object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.object?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.object?style=flat-square&color=blue&label=gzip) |
| isPromise | [is.promise](https://www.npmjs.com/package/@zerodep/is.promise) | A utility to determine if a value is a Promise | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.promise?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.promise?style=flat-square&color=blue&label=gzip) |
| isRegex | [is.regex](https://www.npmjs.com/package/@zerodep/is.regex) | A utility to determine if a value is a regular expression | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.regex?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.regex?style=flat-square&color=blue&label=gzip) |
| isSet | [is.set](https://www.npmjs.com/package/@zerodep/is.set) | A utility to determine if a value is a Set | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.set?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.set?style=flat-square&color=blue&label=gzip) |
| isString | [is.string](https://www.npmjs.com/package/@zerodep/is.string) | A utility to determine if a value is a string | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.string?style=flat-square&color=blue&label=gzip) |
| isSymbol | [is.symbol](https://www.npmjs.com/package/@zerodep/is.symbol) | A utility to determine if a value is a Symbol | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.symbol?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.symbol?style=flat-square&color=blue&label=gzip) |
| isTypedArray | [is.typedarray](https://www.npmjs.com/package/@zerodep/is.typedarray) | A utility to determine if a value is a Typed Array | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.typedarray?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.typedarray?style=flat-square&color=blue&label=gzip) |
| isUndefined | [is.undefined](https://www.npmjs.com/package/@zerodep/is.undefined) | A utility to determine if a value is `undefined` | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.undefined?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.undefined?style=flat-square&color=blue&label=gzip) |
| isWeakMap | [is.weakmap](https://www.npmjs.com/package/@zerodep/is.weakmap) | A utility to determine if a value is a WeakMap | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.weakmap?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.weakmap?style=flat-square&color=blue&label=gzip) |
| isWeakSet | [is.weakset](https://www.npmjs.com/package/@zerodep/is.weakset) | A utility to determine if a value is a WeakSet | ![min](https://img.shields.io/bundlephobia/min/@zerodep/is.weakset?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/is.weakset?style=flat-square&color=blue&label=gzip) |

<br />

### Locale

A collection of helpers to appropriately work with locales.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| localeGet | [locale.get](https://www.npmjs.com/package/@zerodep/locale.get) | A helper to get the locales of the environment (server or browser) | ![min](https://img.shields.io/bundlephobia/min/@zerodep/locale.get?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/locale.get?style=flat-square&color=blue&label=gzip) |
| localeSettings | [locale.settings](https://www.npmjs.com/package/@zerodep/locale.settings) | The locale configuration getter and setter | ![min](https://img.shields.io/bundlephobia/min/@zerodep/locale.settings?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/locale.settings?style=flat-square&color=blue&label=gzip) |

<br />

### To

A collection of utility methods to convert a value to a specific data type.

| Method Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| toJSON | [to.json](https://www.npmjs.com/package/@zerodep/to.json) | A configurable function that converts a value to a JSON object | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.json?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.json?style=flat-square&color=blue&label=gzip) |
| toNumber | [to.number](https://www.npmjs.com/package/@zerodep/to.number) | A configurable utility to convert a value (string, boolean, date, or BigInt) to a number | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.number?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.number?style=flat-square&color=blue&label=gzip) |
| toString | [to.string](https://www.npmjs.com/package/@zerodep/to.string) | A configurable utility to convert a value (number, boolean, array, object, more...) to a locale-appropriate string | ![min](https://img.shields.io/bundlephobia/min/@zerodep/to.string?style=flat-square&color=blue&label=minified)<br />&nbsp;&nbsp;&nbsp;&nbsp;![gzip](https://img.shields.io/bundlephobia/minzip/@zerodep/to.string?style=flat-square&color=blue&label=gzip) |

<br />

### Types

Some useful typescript `type` declarations.

| Type Name | Package | Purpose | Size |
| --- | --- | --- | --- |
| TypesCurrencies &<br>TypesCurrenciesCrypto | [types.currencies](https://www.npmjs.com/package/@zerodep/types.currencies) | Typescript `type` declaration of currencies and crypto-currencies | N/A |
| TypesLocales | [types.locales](https://www.npmjs.com/package/@zerodep/types.locales) | Typescript `type` declaration of locales | N/A |
| TypesTimeZones | [types.timezones](https://www.npmjs.com/package/@zerodep/types.timezones) | Typescript `type` declaration of time zones | N/A |
| TypesUnits | [types.units](https://www.npmjs.com/package/@zerodep/types.units) | Typescript `type` declaration of supported units of measure | N/A |

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/can](https://www.npmjs.com/package/@zerodep/can) - a barrel package of `@zerodep/can.*` detectors
- [@zerodep/format](https://www.npmjs.com/package/@zerodep/format) - a barrel package of `@zerodep/format.*` formatters
- [@zerodep/guard](https://www.npmjs.com/package/@zerodep/guard) - a barrel package of `@zerodep/guard.*` defensive guards
- [@zerodep/is](https://www.npmjs.com/package/@zerodep/is) - a barrel package of `@zerodep/is.*` utilities
- [@zerodep/locale](https://www.npmjs.com/package/@zerodep/locale) - a barrel package of `@zerodep/locale.*` tools
- [@zerodep/to](https://www.npmjs.com/package/@zerodep/to) - a barrel package of `@zerodep/to.*` converters
- [@zerodep/types](https://www.npmjs.com/package/@zerodep/types) - a barrel package of `@zerodep/types.*` declarations

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/app/app/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
