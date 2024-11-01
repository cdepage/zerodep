# @zerodep/types

[![version](https://img.shields.io/npm/v/@zerodep/types?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/types)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A collection of Typescript literal union types.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/types) page.

## Definitions

```typescript
// Country Names
type Country = "Afghanistan" | "Albania" | ... | "United States" | ... | "Zimbabwe";

// Country ISO2 Codes
type CountryIso2 = "AF" | "AL" | ... | "US" | ... | "ZQ";

// Currencies
type Currency = "AED" | "AFN" | ... | "USD" | ... | "ZWL";

// Crypto Currencies
type CurrencyCrypto = "ADA" | ... | "BTC" | ... | "ZEC";

// Locales
type Locale = "ar" | ...  | "en-US" | ... | "zh-TW";

// StateCa
type StateCa = "Alberta" | ...  | "Yukon"

// StateCaAbbr
type StateCaAbbr = "AB" | ...  | "YT"

// StateUs
type StateUs = "Alabama" | ...  | "U.S. Virgin Islands" | ... | "Wyoming";

// StateUsAbbr
type StateUsAbbr = "AK" | ...  | "VI" | ...  | "WY";

// Timezones
type TimeZone = "Africa/Abidjan" | ... | "America/New_York" |  ...  | "Pacific/Wallis";
```

## Examples

```typescript
import { Country, CountryIso2, Currency, CurrencyCrypto, Locale, StateCa, StateCaAbbr, StateUs, StateUsAbbr, TimeZone } from '@zerodep/types';

// use types as required
```
