# @zerodep/address-country

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-country)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-country)
[![version](https://img.shields.io/npm/v/@zerodep/address-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where a country name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/country) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressCountry } from '@zerodep/address-country';
// or
const { addressCountry } = require('@zerodep/address-country');
```

### Well Formatted Case

```javascript
addressCountry('1234 Main Street, Los Angeles CA, America');
//  [
//    {
//      countryIso2: 'US',
//      source: 'America',
//      ndx: 34,
//      length: 7,
//    },
//  ]
```

### With Check-in-Middle Flag Enabled

```javascript
const CHECK_IN_MIDDLE = true;
addressCountry('1234 Main Street, Los Angeles CA, United States 90210', CHECK_IN_MIDDLE);
// [
//   {
//     countryIso2: 'US',
//     source: 'United States',
//     ndx: 34,
//     length: 13,
//   },
//   {
//     countryIso2: 'CA',
//     source: 'CA',
//     ndx: 30,
//     length: 2,
//   },
// ]
```
