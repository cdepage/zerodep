# @zerodep/format.currency

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/format.currency?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/format.currency) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/format.currency?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/format.currency) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/format.currency) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/format.currency?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/format.currency?style=flat-square)

[![app](https://img.shields.io/badge/app-%40zerodep-orange?style=flat-square)](https://www.npmjs.com/package/@zerodep/app) [![version](https://img.shields.io/npm/v/@zerodep/format.currency?style=flat-square&color=orange)](https://www.npmjs.com/package/@zerodep/format.currency)

**A configurable, locale-aware utility to format a value to a currency.**

It automatically adds the appropriate currency symbols/prefixes/suffixes and formats the amount appropriately. Display of decimal values is optional.

To properly display a currency you need an amount, and language and a currency. Depending on the country the decimal point may be a comma or a period, the currency symbol is before or after the amount, and the thousands grouping separator may be a [nbsp] space, a comma or a period. Depending on the currency there are zero, two or more fractional digits.

This formatter pulls its default locale settings from the [locale.settings](https://www.npmjs.com/package/@zerodep/locale/settings) package (if used), and defaults to however the browser or server is configured.

## tl;dr

A short explanation / quick reference:

```typescript
import { currencyFormatter } from '@zerodep/format.currency';

// using the default formatter (intelligently guesses your locale & currency)
formatCurrency(1234567.89); // "$1,234,567.89" (assuming you are in the US or Canada)
formatCurrency('not a number'); // throws ZeroDepErrorFormat

// using convenient, pre-configured formatters
formatCurrencyUSD(1234567.89); // "$1,234,567.89"
formatCurrencyCADfr(1234567.89); // "1 234 567,89 $"
formatCurrencyGBP(1234567.89); // "£1,234,567.89"
```

and

```typescript
import { CurrencyFormatterOptions, currencyFormatterHOF } from '@zerodep/format.currency';

// using a custom configuration
const options: CurrencyFormatterOptions = {
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'code',
  fractionDigits: 'hide',
};
const formatCurrency = currencyFormatterHOF(options);

formatCurrency(1234567.89); // "1 234 568 EUR" <-- CAUTION: notice the rounding
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

// all @zerodep "format" utilities
npm install @zerodep/format

// only the format.currency package
npm install @zerodep/format.currency
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

### Browser Direct

If you are using the script directly in a browser via a `<script>` tag or importing it into your own scripts, these are the instructions for you. We support both ESM and UMD formats.

```html
<!-- for ES Modules (ESM) -->
<script type="module">
  import { formatCurrency } from 'https://cdn.jsdelivr.net/npm/@zerodep/format.currency/esm.js';
  // ...your code here
</script>

<!--  OR  -->

<!--  for Universal Modules (UMD) - all @zerodep functions are in the global "zd" namespace -->
<script src="https://cdn.jsdelivr.net/npm/@zerodep/format.currency/umd.js"></script>
<script>
  // example of "zd" prefix
  const result = zd.formatCurrency(50);
</script>
```

This package may be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/format.currency/umd.js) and [unpkg](https://unpkg.com/@zerodep/format.currency/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `formatCurrency` - formats a value to the best-guess of locale and currency based on system values
  - `formatCurrencyHOF` - a configurable higher-order function that returns a `formatCurrency` function based on the configurations
- **Convenience Functions**
  - `formatCurrencyUSD` - formats a value to American dollars
  - `formatCurrencyCADen` - formats a value to Canadian dollars with English formatting
  - `formatCurrencyCADfr` - formats a value to Canadian dollars with French formatting
  - `formatCurrencyGBP` - formats a value to British pounds
  - `formatCurrencyEURfr` - formats a value to Euros with French formatting
  - `formatCurrencyEURde` - formats a value to Euros with German formatting
- **Interface**
  - `FormatCurrencyOptions` - a typescript interface of the options that may be set in the HO
- **Error types**
  - `ZeroDepErrorFormat` - thrown if the value to format is not a number (or can be a number)
  - `ZeroDepError` - the error class all ZeroDep packages extend from, is an instance of the base `Error` object

### Signature

Typescript declarations:

```typescript
// using default configuration options
declare const formatCurrency: (value: string | number | BigInt) => string;

// customizing the configuration options
declare const formatCurrencyHOF: (
  options?: FormatCurrencyOptions | undefined
) => (value: string | number | BigInt) => string;

// optional configuration
declare interface FormatCurrencyOptions {
  locale?: TypesLocales | string;
  currency?: TypesCurrencies;
  fractionDigits?: 'show' | 'hide';
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  currencySign?: 'standard' | 'accounting';
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
  minimumFractionDigits?: number;
}
```

### Configuration Options

**locale**

- Defaults to: best intelligent guess from the system (browser or Node), e.g. `en-US`
- This value can be any locale string supported by your environment (this includes [BCP-47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) values)

**currency**

- Defaults to: best intelligent guess from the system (browser or Node), e.g. `USD`
- This value must be a 3-letter abbreviation of standard currencies (sorry crypto, no support for you yet)

**fractionalDigits**

- Defaults to: `show`
- This value allows you to hide any fractional digits (cents), if set to `hide` the value will be rounded

**currencyDisplay**

- Defaults to: `narrowSymbol`
- Controls whether the currency abbreviation, symbol or full currency name are shown

**currencySign**

- Defaults to: `standard`
- Has two settings, the `accounting` setting shows negative numbers in parentheses, the other is how we see number in everyday use

**roundingMode**

- Defaults to: `halfExpand`
- Sets how numbers are rounded when their fractional component exceeds the standard number of fractional digits for the currency. `halfExpand` behaves the way most people expect
- See the [ICU Rounding Modes](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) page for a full explanation of the other settings

### Examples

All examples assume ESM or CJS packages. If using a UMD package remember to prefix with the **zd** namespace, e.g. `zd.formatCurrency(...)`.

**Using Default Configuration Options**

For the purposes of this example the system locale is "en-US". Alternatively, imagine this example is using the convenience method `formatCurrencyUSD`.

```typescript
import { formatCurrency } from '@zerodep/format.currency';

// strings
formatCurrency('99.99'); // "$99.99"
formatCurrency('$ 1,000,000'); // "$1,000,000.00"
formatCurrency('9.876.543,21'); // "$9,876,543.21"
formatCurrency('555 234 5678'); // "$5,552,345,678.00"
formatCurrency(''); // "$0.00"
formatCurrency('a string'); // throws ZeroDepErrorFormat

// integers
formatCurrency(42); // "$42.00"
formatCurrency(3e8); // "$300,000,000.00"

// floats
formatCurrency(-273.15); // "-$273.15"
formatCurrency(Math.PI); // "$3.14"

// number-ish
formatCurrency(Number.POSITIVE_INFINITY); // throws ZeroDepErrorFormat
formatCurrency(NaN); // throws ZeroDepErrorFormat

// bigints
formatCurrency(8675309n); // "$8,675,309.00"

// nothing
formatCurrency(null); // throws ZeroDepErrorFormatType
formatCurrency(undefined); // throws ZeroDepErrorFormatType
```

**Using the Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { FormatCurrencyOptions, formatCurrencyHOF } from '@zerodep/format.currency';

// Dollars as seen in America

const formatCurrency1a = formatCurrencyHOF({
  locale: 'en-US',
  currency: 'USD',
  currencyDisplay: 'symbol',
});
formatCurrency1a(1234567.89); // "$1,234,567.89"

const formatCurrency1b = formatCurrencyHOF({
  locale: 'en-US',
  currency: 'USD',
  currencyDisplay: 'symbol',
  fractionDigits: 'hide',
});
formatCurrency1b(1234567.89); // "$1,234,568" <-- CAUTION: notice the rounding

const formatCurrency2 = formatCurrencyHOF({
  locale: 'en-US',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
});
formatCurrency2(1234567.89); // "$1,234,567.89"

const formatCurrency3 = formatCurrencyHOF({
  locale: 'en-US',
  currency: 'USD',
  currencyDisplay: 'code',
});
formatCurrency3(1234567.89); // "USD 1,234,567.89"

const formatCurrency4 = formatCurrencyHOF({
  locale: 'en-US',
  currency: 'USD',
  currencyDisplay: 'name',
});
formatCurrency4(1234567.89); // "1,234,567.89 US dollars"

// Euros as seen in France

const formatCurrency5a = formatCurrencyHOF({
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'symbol',
});
formatCurrency5a(1234567.89); // "1 234 567,89 €"

const formatCurrency5b = formatCurrencyHOF({
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'symbol',
  fractionDigits: 'hide',
});
formatCurrency5b(1234567.89); // "1 234 568 €" <-- CAUTION: notice the rounding

const formatCurrency6 = formatCurrencyHOF({
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'narrowSymbol',
});
formatCurrency6(1234567.89); // "1 234 567,89 €"

const formatCurrency7 = formatCurrencyHOF({
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'code',
});
formatCurrency7(1234567.89); // "1 234 567,89 EUR"

const formatCurrency8 = formatCurrencyHOF({
  locale: 'fr-FR',
  currency: 'EUR',
  currencyDisplay: 'name',
});
formatCurrency8(1234567.89); // "1 234 567,89 euros"
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/to.number](https://www.npmjs.com/package/@zerodep/to.number) - converts a value to a number
- [@zerodep/locale.settings](https://www.npmjs.com/package/@zerodep/locale.settings) - configurations for all locale-aware packages in the @zerodep monorepo

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/format/format.currency/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
