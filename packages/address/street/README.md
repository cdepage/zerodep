# @zerodep/address-street

[![version](https://img.shields.io/npm/v/@zerodep/address-street?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-street)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to find where a street name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/street) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressStreet } from '@zerodep/address-street';
// or
const { addressStreet } = require('@zerodep/address-street');
```

### Well Formatted Case

```javascript
addressStreet('1234 Main St, Los Angeles CA, US 90210');
//  [
//    {
//      streetType: 'ST',
//      source: 'St',
//      ndx: 10,
//      length: 2,
//      sourceIsAbbr: true,
//    },
//  ]
```

### With Multiple Street Names/Abbreviations

```javascript
addressStreet('36 trail street, edmonton ab');
// [
//   {
//     streetType: 'TR',
//     source: 'trail',
//     ndx: 3,
//     length: 5,
//     sourceIsAbbr: false,
//   },
//   {
//     streetType: 'ST',
//     source: 'street',
//     ndx: 9,
//     length: 6,
//     sourceIsAbbr: false,
//   },
// ]
```
