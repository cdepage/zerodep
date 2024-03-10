# geoCountry() & geoCountryIso()

[![version](https://img.shields.io/npm/v/@zerodep/geo-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/geo-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to get country ISO codes and information from a country name or abbreviation; it will throw a `ZeroDepError` on failure.

## Signature

In the definition below `CountryIso2` are from [@zerodep/types](/types.md).

```typescript
const geoCountryIso: (country: string) => CountryIso2;
// and
const geoCountry: (country: string) => GeoCountry;

interface GeoCountry {
  countryName: string;
  countryIso2: string;
  countryIso3: string;
  countryCode: number;
}
```

The `geoCountryIso` and `geoCountry` functions have the following parameters:

- **country** - a country name or common abbreviations

## Examples

### Successful Cases

```javascript
geoCountryIso('usa'); // 'US'
geoCountryIso('canada'); // 'CA'
geoCountryIso('great britain'); // 'GB'

geoCountry(['es']);
// {
//   countryName: 'Spain',
//   countryIso2: 'ES',
//   countryIso3: 'ESP',
//   countryCode: 724,
// }
```

### Unsuccessful Cases

```javascript
geoCountryIso('unknown'); // thows ZeroDepError: Could not find a country for "UNKNOWN"

geoCountry('unknown'); // thows ZeroDepError: Could not find a country for "UNKNOWN"
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "geo" functions
npm i @zerodep/geo

# only this @zerodep package
npm i @zerodep/geo-country
```

then

```javascript
import { geoCountryIso, geoCountry } from '@zerodep/app';
// or
import { geoCountryIso, geoCountry } from '@zerodep/geo';
// or
import { geoCountryIso, geoCountry } from '@zerodep/guard-array';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-02

**Added**

- added the `geoCountryIso` and `geoCountry` functions
