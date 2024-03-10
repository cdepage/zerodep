# geoState() & geoStateIso()

[![version](https://img.shields.io/npm/v/@zerodep/geo-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to get state abbreviation and information from a state name or abbreviation; it will throw a `ZeroDepError` if the guard fails.

## Signature

In the definition below `StateUsAbbr`, `StateCaAbbr` and `CountryIso2` are from [@zerodep/types](/types.md).

```typescript
const geoStateIso: (state: string) => [StateUsAbbr | StateCaAbbr, CountryIso2];
// and
const geoState: (state: string) => GeoState;

interface GeoState extends GeoStateInfoMap {
  stateName: string;
  stateAbbr: string;
  stateFips: string;
  regionCensus?: string;
  regionDivision?: string;
  regionBea?: string;
  countryName: string;
  countryIso2: string;
}
```

The `geoStateIso` and `geoState` functions have the following parameters:

- **state** - a state name or common abbreviations

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

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "geo" functions
npm i @zerodep/geo

# only this @zerodep package
npm i @zerodep/geo-state
```

then

```javascript
import { geoStateIso, geoState } from '@zerodep/app';
// or
import { geoStateIso, geoState } from '@zerodep/geo';
// or
import { geoStateIso, geoState } from '@zerodep/guard-array';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-02

**Added**

- added the `geoStateIso` and `geoState` functions
