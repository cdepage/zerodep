# @zerodep/address-data

Get address-related information about a state/province by its name or abbreviation.

This package is part of the [zerodep.app](http://zerodep.app) ecosystem; see the website for full documentation.

### Typescript Signature

```typescript
export interface AddressCountyInfo {
  countyName: string;
  fips: string;
}

export interface AddressState {
  stateName: string;
  stateAbbr: string;
  countryName: string;
  countryAbbr: string;
  fips: string;
  counties: AddressCountyInfo[];
}

export declare const addressState: (state: string, country?: string) => AddressState;
```
