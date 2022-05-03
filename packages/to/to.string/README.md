# @zerodep/to.string

A configurable utility to convert a value (number, boolean, array, object, more...) to a locale-appropriate string.

Numbers and dates are always written down (stringified) from the perspective of a locale. Most people take it for granted that where they are is how it will work. Software developers need to be aware of this bias.

Default settings includes converting arrays and Sets to comma-separated lists, objects and Maps to JSON (stringified), and booleans to words. Numbers are pretty-printed to the locale of the system. Dates are converted to the full ISO-8601 format. If a provided value has a `toString()` method it will be used - this includes BigInt values.

The toString method may be optionally configured. You may specify a specific locale, timezone and format for dates and numbers. There is a threshold for converting numbers from exponent notation and a setting for values to be used for booleans. Finally, there is a flag to convert invalid values to an empty string.

## tl;dr

A quick howto by examples for quick reference:

```typescript
import { toString } from '@zerodep/to.string';

// uses the default configuration options
toString(42); // "42"
toString({ a: 1, b: 2 }); // "{\"a\":1,\"b\":2}"
toString(['a', 'b', 'c']); // "a, b, c"
toString(Date('2022-02-24')); // "2022-02-24T00:00:00.000Z"
toString(Symbol()); // throws ZeroDepErrorTo
```

and

```typescript
import { toStringHOF, ToStringptions } from '@zerodep/to.string';

// uses a custom configuration options
const options: ToStringptions = { locale: 'en-GB' };
const toString = toStringHOF(options);

toString(Date('2022-02-24')); // "29/04/2022"
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

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// entire set of @zerodep utilities
npm install @zerodep/utils

// all @zerodep "is" utilities
npm install @zerodep/is

// only the to.string utility
npm install @zerodep/to.string
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

## How to Use

### Signature

Typescript declarations:

```typescript
// using default configuration options
declare const toString: (value: any | any[]) => string;

// customizing the configuration options
declare const toStringHOF: (options?: ToStringOptions) => (value: any | any[]) => string;

// optional configuration
interface ToStringOptions {
  locale?: TypesLocales | TypesLocales[] | string | string[];
  timeZone?: TypesTimeZones;
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  booleanValues?: [string, string];
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}
```

### Configuration Options

**locale:**

- Defaults to: node/browser default value
- May be set to any locale value accepted by the Intl function.
- Used when formatting number, date and time values

**timeZone:**

- Defaults to: `undefined`
- May be set to any time zone value accepted by the Intl function
- Used when formatting date and time values

**dateStyle:**

- Defaults to: `undefined`
- May be set to any time zone value accepted by the Intl functio
- Used when formatting date and time values

**timeStyle:**

- Defaults to: `undefined`
- May be set to any time zone value accepted by the Intl function
- Used when formatting date and time values

**booleanValues:**

- Defaults to: `["true", "false"]`
- May be set to any two strings, such as `["Yes", "No"]`; the truthy value must be first
- Used when converting boolean values

**minimumFractionDigits:**

- Defaults to: `undefined`
- Setting this will have all numerical values returned with _at least_ this many fractional values E.g. if setting to 3 then integers will return as `2.000`
- Used when formatting numbers

**maximumFractionDigits:**

- Defaults to: 6
- Setting this will have all float values returned with _at most_ this many fractional values. E.g. if setting to 1 then PI will return as `3.1`, rounding methodology is "half-expand" (most commonly used)
- Used when formatting numbers

### Examples

**Using Default Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toString } from '@zerodep/to.string';

// strings
toString(''); // ""
toString('a string'); // "a string"

// integers
toString(42); // "42"
toString(3e8); // "300,000,000"

// floats
toString(-273.15); // "-273.15"
toString(Math.PI); // "3.141593"

// number-ish
toString(Number.POSITIVE_INFINITY); // "Infinity"
toString(NaN); // "-Infinity"

// bigints
toString(8675309n); // "8,675,309"

// object literals
toString({}); // "{}"
toString({ a: 'one', b: 'two' }); // "{\"a\":\"one\",\"b\":\"two\"}"

// arrays
toString([]); // ""
toString([1, 2, 3]); // "1, 2, 3"
toString(['a', 'b', 'c']); // "a, b, c"

// booleans
toString(true); // "true"
toString(false); // "false"

// other
toString(/^$\d{7}/g); // throws ZeroDepErrorTo
toString(new Date('2022-02-24')); // "2022-02-24T00:00:00.000Z"
toString(new Set()); // ""
toString(new Set([1, 2, 3])); // "1, 2, 3"
toString(new Map()); // "{}"
toString(new Map([['a', 1]])); // "{\"a\": 1}"
toString(new Symbol()); // throws ZeroDepErrorTo
toString(new Error()); // throws ZeroDepErrorTo
toString(() => {}); // throws ZeroDepErrorTo

// nothing
toString(null); // ""
toString(undefined); // ""
```

**Numbers with Customized Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { ToStringOptions, toStringHOF } from '@zerodep/to.string';

const options1: ToStringOptions = { locale: 'en-US', minimumFractionDigits: 3 };
const toString1 = toStringHOF(options1);

// integers
toString1(42); // "42.000"
toString1(3e8); // "300,000,000.000"

// floats
toString1(-273.15); // "-273.150"
toString1(Math.PI); // "3.142"

// bigints
toString1(8675309n); // "8,675,309.000"
```

**Dates with Customized Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toStringHOF, ToStringOptions } from '@zerodep/to.string';

const optionsUS1: ToStringOptions = { locale: 'en-US', dateStyle: 'short' };
const toStringUS1 = toStringHOF(optionsUS1);

const optionsGB1: ToStringOptions = { locale: 'en-GB', dateStyle: 'short' };
const toStringGB1 = toStringHOF(optionsGB1);

const optionsFR1: ToStringOptions = { locale: 'fr-FR', dateStyle: 'short' };
const toStringFR1 = toStringHOF(optionsFR1);

toStringUS1(new Date('2022-04-22T10:30:00.000Z')); // "2/24/22"  <-- American
toStringGB1(new Date('2022-04-22T10:30:00.000Z')); // "24/02/2022" <-- British
toStringFR1(new Date('2022-04-22T10:30:00.000Z')); // "24/02/2022" <-- French

// -----

const optionsUS2: ToStringOptions = { locale: 'en-US', dateStyle: 'medium' };
const toStringUS2 = toStringHOF(optionsUS2);

const optionsGB2: ToStringOptions = { locale: 'en-GB', dateStyle: 'medium' };
const toStringGB2 = toStringHOF(optionsGB2);

const optionsFR2: ToStringOptions = { locale: 'fr-FR', dateStyle: 'medium' };
const toStringFR2 = toStringHOF(optionsFR2);

toStringUS2(new Date('2022-04-22T10:30:00.000Z')); // "Feb 24, 2022"  <-- American
toStringGB2(new Date('2022-04-22T10:30:00.000Z')); // "24 Feb 2022" <-- British
toStringFR2(new Date('2022-04-22T10:30:00.000Z')); // "24 févr. 2022"  <-- French

// -----

const optionsUS3: ToStringOptions = { locale: 'en-US', dateStyle: 'long' };
const toStringUS3 = toStringHOF(optionsUS3);

const optionsGB3: ToStringOptions = { locale: 'en-GB', dateStyle: 'long' };
const toStringGB3 = toStringHOF(optionsGB3);

const optionsFR3: ToStringOptions = { locale: 'fr-FR', dateStyle: 'long' };
const toStringFR3 = toStringHOF(optionsFR3);

toStringUS2(new Date('2022-04-22T10:30:00.000Z')); // "February 24, 2022"  <-- American
toStringGB2(new Date('2022-04-22T10:30:00.000Z')); // "24 February 2022" <-- British
toStringFR2(new Date('2022-04-22T10:30:00.000Z')); // "24 février 2022"  <-- French

// -----

const optionsUS4: ToStringOptions = { locale: 'en-US', dateStyle: 'full' };
const toStringUS4 = toStringHOF(optionsUS4);

const optionsGB4: ToStringOptions = { locale: 'en-GB', dateStyle: 'full' };
const toStringGB4 = toStringHOF(optionsGB4);

const optionsFR4: ToStringOptions = { locale: 'fr-FR', dateStyle: 'full' };
const toStringFR4 = toStringHOF(optionsFR4);

toStringUS2(new Date('2022-04-22T10:30:00.000Z')); // "Thursday, February 24, 2022"  <-- American
toStringGB2(new Date('2022-04-22T10:30:00.000Z')); // "Thursday, 24 February 2022" <-- British
toStringFR2(new Date('2022-04-22T10:30:00.000Z')); // "jeudi 24 février 2022"  <-- French
```

**Times with Customized Configuration Options**

```typescript
// import from the most appropriate @zerodep package for your needs / specific use case (see the Install section above)
import { toStringHOF, ToStringOptions } from '@zerodep/to.string';

const optionsUS1: ToStringOptions = {
  locale: 'en-US',
  timeStyle: 'short',
  timeZone: 'America/New_York',
};
const toStringUS1 = toStringHOF(optionsUS1);

const optionsGB1: ToStringOptions = {
  locale: 'en-GB',
  timeStyle: 'short',
  timeZone: 'Europe/London',
};
const toStringGB1 = toStringHOF(optionsGB1);

const optionsFR1: ToStringOptions = {
  locale: 'fr-FR',
  timeStyle: 'short',
  timeZone: 'Europe/Paris',
};
const toStringFR1 = toStringHOF(optionsFR1);

toStringUS1(new Date('2022-02-24T10:30:00Z')); // "6:30 AM"  <-- American
toStringGB1(new Date('2022-02-24T10:30:00Z')); // "11:30" <-- British
toStringFR1(new Date('2022-02-24T10:30:00Z')); // "12:30" <-- French

// -----

const optionsUS2: ToStringOptions = {
  locale: 'en-US',
  timeStyle: 'medium',
  timeZone: 'America/New_York',
};
const toStringUS2 = toStringHOF(optionsUS2);

const optionsGB2: ToStringOptions = {
  locale: 'en-GB',
  timeStyle: 'medium',
  timeZone: 'Europe/London',
};
const toStringGB2 = toStringHOF(optionsGB2);

const optionsFR2: ToStringOptions = {
  locale: 'fr-FR',
  timeStyle: 'medium',
  timeZone: 'Europe/Paris',
};
const toStringFR2 = toStringHOF(optionsFR2);

toStringUS1(new Date('2022-02-24T10:30:00Z')); // "6:30:00 AM"  <-- American
toStringGB1(new Date('2022-02-24T10:30:00Z')); // "11:30:00" <-- British
toStringFR1(new Date('2022-02-24T10:30:00Z')); // "12:30:00" <-- French

// -----

const optionsUS3: ToStringOptions = {
  locale: 'en-US',
  timeStyle: 'long',
  timeZone: 'America/New_York',
};
const toStringUS3 = toStringHOF(optionsUS3);

const optionsGB3: ToStringOptions = {
  locale: 'en-GB',
  timeStyle: 'long',
  timeZone: 'Europe/London',
};
const toStringGB3 = toStringHOF(optionsGB3);

const optionsFR3: ToStringOptions = {
  locale: 'fr-FR',
  timeStyle: 'long',
  timeZone: 'Europe/Paris',
};
const toStringFR3 = toStringHOF(optionsFR3);

toStringUS1(new Date('2022-02-24T10:30:00Z')); // "6:30:00 AM EST"  <-- American
toStringGB1(new Date('2022-02-24T10:30:00Z')); // "11:30:00 BST" <-- British
toStringFR1(new Date('2022-02-24T10:30:00Z')); // "12:30:00 UTC+2" <-- French

// -----

const optionsUS4: ToStringOptions = {
  locale: 'en-US',
  timeStyle: 'full',
  timeZone: 'America/New_York',
};
const toStringUS4 = toStringHOF(optionsUS4);

const optionsGB4: ToStringOptions = {
  locale: 'en-GB',
  timeStyle: 'full',
  timeZone: 'Europe/London',
};
const toStringGB4 = toStringHOF(optionsGB4);

const optionsFR4: ToStringOptions = {
  locale: 'fr-FR',
  timeStyle: 'full',
  timeZone: 'Europe/Paris',
};
const toStringFR4 = toStringHOF(optionsFR4);

toStringUS1(new Date('2022-04-22T10:30:00.000Z')); // "6:30:00 AM Eastern Daylight Time"  <-- American
toStringGB1(new Date('2022-04-22T10:30:00.000Z')); // "11:30:00 British Summer Time" <-- British
toStringFR1(new Date('2022-04-22T10:30:00.000Z')); // "12:30:00 heure d’été d’Europe centrale" <-- French
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/to.json](https://www.npmjs.com/package/@zerodep/is.json) - converts a value to a JSON object
- [@zerodep/types.locales](https://www.npmjs.com/package/@zerodep/types.locales) - typescript `type` declarations of locales
- [@zerodep/types.timezones](https://www.npmjs.com/package/@zerodep/types.timezones) - typescript `type` declarations of time zones

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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/to/to.string/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
