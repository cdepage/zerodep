# @zerodep/address-secondary

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-secondary?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-secondary)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-secondary?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-secondary)
[![version](https://img.shields.io/npm/v/@zerodep/address-secondary?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-secondary)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where a secondary name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/address/secondary) page.

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
