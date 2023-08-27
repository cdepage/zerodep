# @zerodep/address-zip

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-zip?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-zip)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-zip?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-zip)
[![version](https://img.shields.io/npm/v/@zerodep/address-zip?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-zip)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where zip/postal codes (and US 5-digit extensions) are in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/address/zip) page.

NOTE: currently supports US and CA zip/postal codes

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressZip } from '@zerodep/address-zip';
// or
const { addressZip } = require('@zerodep/address-zip');
```

### Well Formatted Case

```javascript
addressZip('1234 Main St, Los Angeles CA, US 90210-1234');
//  [
//    {
//      zip: '90210',
//      zipExt: '1234',
//      countryIso2s: ['US'],
//      source: '90210-1234',
//      ndx: 34,
//      length: 10,
//    },
//  ]
```

### Canadian and American Codes

```javascript
addressZip('12345 Main Street, Toronto ON, Canada M4A 3B6');
// [
//   {
//     zip: 'M4A 3B6',
//     countryIso2s: ['CA'],
//     source: 'M4A 3B6',
//     ndx: 38,
//     length: 7,
//   },
//   {
//     zip: '12345',
//     countryIso2s: ['US'],
//     source: '12345',
//     ndx: 0,
//     length: 5,
//   },
// ]
```
