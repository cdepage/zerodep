# @zerodep/address-secondary

[![version](https://img.shields.io/npm/v/@zerodep/address-secondary?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-secondary)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to find where a secondary name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/secondary) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressSecondary } from '@zerodep/address-secondary';
// or
const { addressSecondary } = require('@zerodep/address-secondary');
```

### Use Case

```javascript
addressSecondary('basement 1234 Main Street East Los Angeles CA, US');
//  [
//    {
//      secondary: 'BSMT',
//      source: 'basement',
//      ndx: 0,
//      length: 8,
//      hasUnit: false,
//    },
//  ]

addressSecondary('office 1234 Main Street East ph 4 Los Angeles CA, US');
// [
//   {
//     secondary: 'OFC',
//     source: 'office',
//     ndx: 0,
//     length: 6,
//     hasUnit: true,
//   },
//   {
//     secondary: 'PH',
//     source: 'ph',
//     ndx: 29,
//     length: 2,
//     hasUnit: true,
//   },
// ]
```
