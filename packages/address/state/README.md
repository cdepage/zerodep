# @zerodep/address-country

[![version](https://img.shields.io/npm/v/@zerodep/address-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to find where a state name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/state) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressState } from '@zerodep/address-state';
// or
const { addressState } = require('@zerodep/address-state');
```

### Well Formatted Case

```javascript
// American address
addressState('1234 Main Street, Los Angeles California, 90210');
//  [
//    {
//      stateAbbr: 'CA',
//      source: 'California',
//      ndx: 30,
//      length: 10
//    },
//  ]

// Canadian address
addressState('13375 rue rita pierrefonds quebec h8z1j3');
// [
//   {
//     "stateAbbr": "QC",
//     "source": "quebec",
//     "ndx": 27,
//     "length": 6
//   }
// ]
```

### With Multiple Results

```javascript
addressCountry('#4 Washington Street, Portland OR 97603');
// [
//   {
//     "stateAbbr": "OR",
//     "source": "OR",
//     "ndx": 31,
//     "length": 2
//   },
//   {
//     "stateAbbr": "WA",
//     "source": "Washington",
//     "ndx": 3,
//     "length": 10
//   }
// ]
```

### Successful Case - Mixed Countries

```javascript
addressState('1234 oregon street, toronto ont');
// [
//   {
//     "stateAbbr": "ON",
//     "source": "ont",
//     "ndx": 28,
//     "length": 3
//   },
//   {
//     "stateAbbr": "OR",
//     "source": "oregon",
//     "ndx": 5,
//     "length": 6
//   }
// ]
```
