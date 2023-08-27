# geo Data Maps

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/geo-data?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-data)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/geo-data?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/geo-data)
[![version](https://img.shields.io/npm/v/@zerodep/geo-data?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-data)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

This package contains `Map` objects of data for countries and states.

These maps are located in this package:

- [GeoCountryInfoMap](#GeoCountryInfoMap)
- [GeoCountryNameMap](#GeoCountryNameMap)
- [StateInfoMap](#StateInfoMap)
- [StateNameMap](#StateNameMapCa--StateNameMapUS)

## GeoCountryInfoMap

A map of country ISO2 codes and their associated proper names, abbreviations and country code/numbers.

### Signature

```typescript
type GeoCountryInfoMap = Map<CountryIso2, CountryInfo>;

interface CountryInfo {
  countryName: Country;
  countryIso3: string;
  countryCode: number;
}
```

### Use

```javascript
geoCountryInfoMap.get('CA'); // { countryName: 'Canada', countryIso3: 'CAN', countryCode: 124 }
geoCountryInfoMap.get('FR'); // { countryName: 'France', countryIso3: 'FRA', countryCode: 250 }
geoCountryInfoMap.get('US'); // { countryName: 'United States', countryIso3: 'USA', countryCode: 840 }
```

## GeoCountryNameMap

A map of country ISO2 codes and their associated names and common abbreviations.

### Signature

```typescript
type GeoCountryNameMap = Map<CountryIso2, string[]>;
```

### Use

```javascript
geoCountryNameMap.get('CA'); // ['canada', 'can']

geoCountryInfoMap.get('GB');
// [
//   'united kingdom of great britain and northern ireland',
//   'united kingdom ',
//   'great britain',
//   'northern ireland',
//   'uk',
//   'gbr',
// ]

geoCountryInfoMap.get('US');
// [
//   'united states of america',
//   'united states',
//   'america',
//   'us of a',
//   'usa',
// ],
```

## StateInfoMap

A map of 2-letter state or province abbreviations and their associated names and other attributes.

### Signature

```typescript
type StateInfoMap = Map<StateUsAbbr | StateCaAbbr, GeoStateInfoMap>;

interface GeoStateInfoMap {
  stateName: StateCa | StateUs;
  stateFips: string;
  regionCensus?: RegionCensus;
  regionDivision?: RegionDivision;
  regionBea?: RegionBea;
}
```

### Use

```javascript
stateInfoMap.get('CA');
// {
//   stateName: 'California',
//   stateFips: '06',
//   regionCensus: 'West',
//   regionDivision: 'Pacific',
//   regionBea: 'Far West',
// }

stateInfoMap.get('NY');
// {
//  stateName: 'New York',
//  stateFips: '36',
//  regionCensus: 'Northeast',
//  regionDivision: 'Middle Atlantic',
//  regionBea: 'Mideast',
// }

geoCountryInfoMap.get('QC');
// {
//   stateName: 'Quebec',
//   stateFips: '00'
// }

geoCountryInfoMap.get('AB');
// {
//   stateName: 'Alberta',
//   stateFips: '00'
// }
```

## StateNameMapCA & StateNameMapUS

A map of 2-letter state or province abbreviations and their associated names and common abbreviations.

### Signature

```typescript
type type StateNameMap = Map<StateCaAbbr | StateUsAbbr, string[]>;
```

### Use

```javascript
// US
geoStateNameMapUS.get('CO'); // ['colorado', 'col', 'colo']
geoStateNameMapUS.get('NE'); // ['nebraska', 'neb', 'nebr']

// CA
geoStateNameMapCA.get('AB'); // ['alberta', 'alta', 'alb']
geoStateNameMapCA.get('QC'); // ['quebec']
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
npm i @zerodep/parsers

// all @zerodep "geo" packages
npm i @zerodep/geo

# only this @zerodep package
npm i @zerodep/geo-data
```

then

```javascript
import { geoCountryInfoMap, geoCountryNameMap, stateInfoMap, geoStateNameMapCA, geoStateNameMapUS } from '@zerodep/app';
// or
import { geoCountryInfoMap, geoCountryNameMap, stateInfoMap, geoStateNameMapCA, geoStateNameMapUS } from '@zerodep/parsers';
// or
import { geoCountryInfoMap, geoCountryNameMap, stateInfoMap, geoStateNameMapCA, geoStateNameMapUS } from '@zerodep/geo';
// or
import { geoCountryInfoMap, geoCountryNameMap, stateInfoMap, geoStateNameMapCA, geoStateNameMapUS } from '@zerodep/geo-data';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-03

**Added**

- added this package
