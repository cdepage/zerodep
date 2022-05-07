# @zerodep/locale.settings

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/locale.settings?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/locale.settings) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/locale.settings?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/locale.settings) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/locale.settings) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/locale.settings?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/locale.settings?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/locale.settings?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/locale.settings)

**A utility to get the locales of the browser or Node environment.**

Useful features:

- deduplicates the values it finds from multiple sources (in both browser & node)
- normalizes values to a `xx`, `xx-XX`, `xx-###`, `xx-XX-xxxx` shape
  - language first (2-letter lowercase)
  - region/country code (2-letter uppercase or 3-numbers)
  - subregion code (if returned by the environment)
- has a configurable fallback locale (with a default of `en-US`)
- returns values in order of specificity (language+region first, only language second)

## tl;dr

A short explanation / quick reference:

```typescript
import { localeGet } from '@zerodep/locale.settings';

// probable response for an American developer
localeGet(); // ["en-US", "en"]

// using a custom fallback, for a Canadian developer
localeGet('de-DE'); // ["en-CA", "en-GB", "en", "de-DE"]
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Configuration Options](#configuration-options)
  - [Examples](#examples)
- [Related Packages](#related-packages)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app), [@zerodep/utils](https://www.npmjs.com/package/@zerodep/utils) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/is).

### For Server & Build Tooling

For Node, or when compiling via babel, rollup, swc, tsc, webpack, etc... these are the instructions for you.

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep locale solutions
npm install @zerodep/locale

// only the locale.settings package
npm install @zerodep/locale.settings
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { isBigInt } from 'https://cdn.jsdelivr.net/npm/@zerodep/locale.settings/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/locale.settings/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.isBigInt(8675309n);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/locale.settings/umd.js) and [unpkg](https://unpkg.com/@zerodep/locale.settings/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `set` - allows setting one, some or all configurations
  - `getOne` - returns one specific configuration
  - `getCurrencyDefaults` - returns all of the currency settings
  - `getAll` - returns all settings
- ** Interfaces**
  - `LocaleSettings` - The various locale-specific options that may be set

### Signature

Typescript declarations:

```typescript
declare const localeSettings: {
  set: (settings?: LocaleSettings | undefined) => void;
  getOne: (
    setting: Setting
  ) =>
    | number
    | boolean
    | 'symbol'
    | TypesLocales
    | TypesCurrencies
    | TypesTimeZones
    | 'narrowSymbol'
    | 'code'
    | 'name'
    | 'standard'
    | 'accounting'
    | 'full'
    | 'long'
    | 'medium'
    | 'short'
    | 'numeric'
    | '2-digit'
    | 'narrow'
    | 'shortOffset'
    | 'longOffset'
    | 'shortGeneric'
    | 'longGeneric'
    | 'always'
    | 'auto'
    | 'false'
    | 'min2'
    | 'halfExpand'
    | 'ceil'
    | 'floor'
    | 'expand'
    | 'trunc'
    | 'halfCeil'
    | 'halfFloor'
    | 'halfTrunc'
    | 'halfEven'
    | undefined;
  getCurrencyDefaults: () => CurrencyOptions;
  getAll: () => LocaleSettings;
};

// configuration interface
interface LocaleSettings {
  locale?: TypesLocales;
  currency?: TypesCurrencies;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  currencySign?: 'standard' | 'accounting';
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  timeZone?: TypesTimeZones;
  hour12?: boolean;
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  fractionalSecondDigits?: 0 | 1 | 2 | 3;
  timeZoneName?: 'long' | 'short' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';
  unitDisplay?: 'long' | 'short' | 'narrow';
  useGrouping?: 'always' | 'auto' | 'false' | 'min2';
  roundingMode?:
    | 'halfExpand'
    | 'ceil'
    | 'floor'
    | 'expand'
    | 'trunc'
    | 'halfCeil'
    | 'halfFloor'
    | 'halfTrunc'
    | 'halfEven';
  minimumFractionDigits?: undefined | number;
  maximumFractionDigits?: undefined | number;
}
```

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.getAll(...)`.

```typescript
import { getOne, getAll } from '@zerodep/locale.settings';

// probable results for an American
getOne('currency'); // "USD"

// probable results for an American
getAll();
// {
//   locale: 'en-US',
//   currency: undefined,
//   currencyDisplay: 'narrowSymbol',
//   currencySign: 'standard',
//   dateStyle: 'medium',
//   timeStyle: 'medium',
//   hour12: false,
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   fractionalSecondDigits: 0,
//   timeZoneName: 'short',
//   unitDisplay: 'short',
//   useGrouping: 'auto',
//   roundingMode: 'halfExpand',
// }
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/format.currency](https://www.npmjs.com/package/@zerodep/format.currency) - formats a string or number to a currency format

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/locale/locale.settings/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
