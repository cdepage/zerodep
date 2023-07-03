# @zerodep/geo-state

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/geo-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-state)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/geo-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-state)
[![version](https://img.shields.io/npm/v/@zerodep/geo-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time geo to require a value to be a STATE (plain old javascript object); it will throw a `ZeroDepError` if the geo fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/geo/state) page.

## Examples

### Successful Cases

```javascript
geoStateIso('n.y.'); // ['NY', 'US']
geoStateIso('oreg'); // ['OR', 'US']
geoStateIso('alberta'); // ['AB', 'CA']

geoState(['utah']);
// {
//   stateName: 'Utah',
//   stateAbbr: 'UT',
//   stateFips: '49',
//   regionCensus: 'West',
//   regionDivision: 'Mountain',
//   regionBea: 'Rocky Mountain',
//   countryName: 'United States',
//   countryIso2: 'US',
// }

geoState('bc');
// {
//   stateName: 'British Columbia',
//   stateAbbr: 'BC',
//   stateFips: '00',
//   regionCensus: undefined,
//   regionDivision: undefined,
//   regionBea: undefined,
//   countryName: 'Canada',
//   countryIso2: 'CA',
// }
```

### Unsuccessful Cases

```javascript
geoStateIso('unknown'); // thows ZeroDepError: Could not find a state or province for "UNKNOWN"

geoState('unknown'); // thows ZeroDepError: Could not find a state or province for "UNKNOWN"
```
