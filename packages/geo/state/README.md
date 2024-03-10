# @zerodep/geo-state

[![version](https://img.shields.io/npm/v/@zerodep/geo-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to get state abbreviation and information from a state name or abbreviation; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/geo/state) page.

## Examples

### geoStateIso Examples

```javascript
geoStateIso('n.y.'); // ['NY', 'US']
geoStateIso('oreg'); // ['OR', 'US']
geoStateIso('alberta'); // ['AB', 'CA']
```

### geoState Examples

```javascript
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
