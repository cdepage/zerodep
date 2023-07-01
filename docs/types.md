# Types

[![version](https://img.shields.io/npm/v/@zerodep/types?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/types)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A collection of Typescript literal union types.

### Country Names

The names of all nation-states in the world. 

```typescript
type Country = "Afghanistan" | "Albania" | ... | "United States" | ... | "Zimbabwe";
```

### Country ISO2 Codes

The ISO2 codes of all nation-states in the world.

```typescript
type CountryIso2 = "AF" | "AL" | ... | "US" | ... | "ZQ";
```

### Currencies

The currency abbreviations for all known currencies.

```typescript
type Currency = "AED" | "AFN" | ... | "USD" | ... | "ZWL";
```

### Crypto Currencies


The currency abbreviations for popular crypto currencies.

```typescript
type CurrencyCrypto = "ADA" | ... | "BTC" | ... | "ZEC";
```

### Locales

The locale values for all common country:language tuples.

```typescript
type Locale = "ar" | ...  | "en-US" | ... | "zh-TW";
```

### Time Zones

The timezone values that can be used for Intl options.

```typescript
type TimeZone = "Africa/Abidjan" | ... | "America/New_York" |  ...  | "Pacific/Wallis";
```

## Installation Sources

These types are available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep parsers functions - medium file size
npm i @zerodep/parsers

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

# only this @zerodep function
import { isInteger } from '@zerodep/is-integer';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- merged the `@zerodep/types.currencies` into the new `@zerodep/types`
- merged the `@zerodep/types.locales` into the new `@zerodep/types`
- merged the `@zerodep/types.timezones` into the new `@zerodep/types`
