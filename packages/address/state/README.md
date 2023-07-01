# @zerodep/address-state

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-state)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-state)
[![version](https://img.shields.io/npm/v/@zerodep/address-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-state)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A stand-alone utility to get information about a state from a state name or abbreviation.

Full documentation is available at the [zerodep.app](http://zerodep.app/address/state) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressState } from '@zerodep/address-state';
// or
const { addressState } = require('@zerodep/address-state');
```

**Successful Case - US**

```javascript
addressState('vermont');
// or
addressState('VERMONT', 'US');
// or
addressState('vt');

// {
//   stateName: "Vermont",
//   stateAbbr: "VT"
//   stateFips: '50',
//   countryName: "United States of America",
//   countryAbbr: "US",
//   counties: [
//     { countyName: "Addison County", countyFips: "50001" },
//     { countyName: "Bennington County", countyFips: "50003" },
//     { countyName: "Caledonia County", countyFips: "50005" },
//     { countyName: "Chittenden County", countyFips: "50007" },
//     { countyName: "Essex County", countyFips: "50009" },
//     { countyName: "Franklin County", countyFips: "50011" },
//     { countyName: "Grand Isle County", countyFips: "50013" },
//     { countyName: "Lamoille County", countyFips: "50015" },
//     { countyName: "Orange County", countyFips: "50017" },
//     { countyName: "Orleans County", countyFips: "50019" },
//     { countyName: "Rutland County", countyFips: "50021" },
//     { countyName: "Washington County", countyFips: "50023" },
//     { countyName: "Windham County", countyFips: "50025" },
//     { countyName: "Windsor County", countyFips: "50027" },
//   ]
// }
```

**Successful Case - CA**

```javascript
addressState('alberta');
// or
addressState('ALTA', 'CA');
// or
addressState('ab');

// {
//   stateName: "Alberta",
//   stateAbbr: "AB"
//   stateFips: '00',
//   countryName: "Canada",
//   countryAbbr: "CA",
//   counties: []
// }
```

**Unsuccessful Case**

```javascript
addressState('unknown');
// throws Error('Could not find a state or province for "unknown"')
```
