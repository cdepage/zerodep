# @zerodep/address-data

[![version](https://img.shields.io/npm/v/@zerodep/address-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-data)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

Get address-related information about a state/province by its name or abbreviation.

This package is part of the [zerodep.app](http://zerodep.app) ecosystem; see the website for full documentation.

### Typescript Signature

```typescript
export interface AddressCountyInfo {
  countyName: string;
  fips: string;
}

export interface GeoState {
  stateName: string;
  stateAbbr: string;
  countryName: string;
  countryAbbr: string;
  fips: string;
  counties: AddressCountyInfo[];
}

export declare const addressState: (state: string, country?: string) => GeoState;
```
