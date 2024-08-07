# Types

[![version](https://img.shields.io/npm/v/@zerodep/types?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/types)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A collection of Typescript literal union types.

#### Country Names

The names of all nation-states in the world.

```typescript
// definition
type Country = "Afghanistan" | "Albania" | ... | "United States" | ... | "Zimbabwe";

// example import
import { Country } from '@zerodep/app'
// or
import { Country } from '@zerodep/types'
```

#### Country ISO2 Codes

The ISO2 codes of all nation-states in the world.

```typescript
// definition
type CountryIso2 = "AF" | "AL" | ... | "US" | ... | "ZQ";

// example import
import { CountryIso2 } from '@zerodep/app'
// or
import { CountryIso2 } from '@zerodep/types'
```

#### Currencies

The currency abbreviations for all known currencies.

```typescript
// definition
type Currency = "AED" | "AFN" | ... | "USD" | ... | "ZWL";

// example import
import { Currency } from '@zerodep/app';
// or
import { Currency } from '@zerodep/types';
```

#### Crypto Currencies

The currency abbreviations for popular crypto currencies.

```typescript
// definition
type CurrencyCrypto = "ADA" | ... | "BTC" | ... | "ZEC";

// example import
import { CurrencyCrypto } from '@zerodep/app';
// or
import { CurrencyCrypto } from '@zerodep/types';
```

#### Locales

The locale values for all common country:language tuples.

```typescript
// definition
type Locale = "ar" | ...  | "en-US" | ... | "zh-TW";

// example import
import { Locale } from '@zerodep/app';
// or
import { Locale } from '@zerodep/types';
```

#### State Names & Abbreviations for Canada

The province names and abbreviations for Canada. (Prevised with "State" for consistency.)

```typescript
// definition
type StateCa = "Alberta" | ...  | "Yukon"
type StateCaAbbr = "AB" | ...  | "YT"

// example import
import { StateCa, StateCaAbbr } from '@zerodep/app';
// or
import { StateCa, StateCaAbbr } from '@zerodep/types';
```

#### State Names & Abbreviations for the United States

The province names and abbreviations for Canada. (Prefixed with "State" for consistency.)

```typescript
// definition
type StateUs = "Alabama" | ...  | "U.S. Virgin Islands" | ... | "Wyoming";
type StateUsAbbr = "AK" | ...  | "VI" | ...  | "WY";

// example import
import { StateUs, StateUsAbbr } from '@zerodep/app';
// or
import { StateUs, StateUsAbbr } from '@zerodep/types';
```

#### Time Zones

The timezone values that can be used for Intl options.

```typescript
// definition
type TimeZone = "Africa/Abidjan" | ... | "America/New_York" |  ...  | "Pacific/Wallis";

// example import
import { TimeZone } from '@zerodep/app';
// or
import { TimeZone } from '@zerodep/types';
```

## Installation Sources

These types are available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
npm i @zerodep/parsers

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# only this @zerodep package
npm i @zerodep/types
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.1.0] - 2023-07-02

**Added**

- added the `StateCa`, `StateCaAbbr`, `StateUs` and `StateUsAbbr` type definitions

#### [2.0.0] - 2023-05-23

**Breaking**

- merged the `@zerodep/types.currencies` into the new `@zerodep/types`
- merged the `@zerodep/types.locales` into the new `@zerodep/types`
- merged the `@zerodep/types.timezones` into the new `@zerodep/types`
