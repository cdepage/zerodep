# addressParse()

[![version](https://img.shields.io/npm/v/@zerodep/address-parse?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-parse)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![types](https://badgen.net/npm/types/@zerodep/app?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that parses an address into its component pieces based on American and Canadian standards.

This parser will:

- strip accented characters, capitalize all values and remove punctuation
- convert secondary unit types, street types and directional values to the USPS-preferred abbreviated formats
- identify secondary units located either before or after the street address
- handle PO Boxes, rural routes, highway contracts and some other address types
- intelligently determine the state by a zipcode, if no state provided
- package and present the address information in an easy-to-use format

This is only a parser and does not guarantee that an address exists or is correct as it only works given the information provided. Given the variety of address formats and creativity of how people write addresses, this parser occasionally mis-identifies the specific components but the "line" values are usually stil. correct.

## Signature

```typescript
declare const addressParse: (line: string, options?: AddressOptions) => Address;

interface Address {
  source: string; // The source address provided
  normalized: string; // The normalized version of the source address

  secondary?: string; // Secondary unit
  street?: string; // Building, street and directionals
  city?: string; // City name
  state?: string; // 2-letter state abbreviation
  zip?: string; // Zip or postal code
  zipExt?: string; // American zip code extension
  countryIso2?: string; // 2-letter country abbreviation
}

// if provided, these values will be used authoritatively
interface AddressOptions {
  city?: string;
  state?: string;
  zip?: string;
  zipExt?: string;
  country?: string;
}
```

## Examples

```javascript
// COMPLETE ADDRESS
addressParse('apt 12 9655 east river road northeast salem oregon 97303-1234 usa');
// {
//    source: 'apt 12 9655 east river road northeast salem oregon 97303-1234 usa',
//    normalized: 'APT 12 9655 EAST RIVER RD NE SALEM OREGON 97303-1234 USA',
//    secondary: 'APT 12',
//    street: '9655 E RIVER RD NE',
//    city: 'SALEM',
//    stateAbbr: 'OR',
//    zip: '97303',
//    zipExt: '1234',
//    countryIso2: 'US',
// }

// FRACTIONAL ADDRESS
addressParse('3813 1/2 Some Road, Los Angeles, CA');
// {
//    source: '3813 1/2 Some Road, Los Angeles, CA',
//    normalized: '3813 1/2 SOME ROAD LOS ANGELES CA',
//    street: '3813 1/2 SOME RD',
//    city: 'LOS ANGELES',
//    stateAbbr: 'CA',
// }

// CANADIAN ADDRESS
addressParse('30 nelson street, penthouse, toronto, on m5v0h5');
// {
//    source: '30 nelson street, penthouse, toronto, on m5v0h5',
//    normalized: '30 NELSON STREET PH TORONTO ON M5V0H5',
//    secondary: 'PH',
//    street: '30 NELSON ST',
//    city: 'TORONTO',
//    stateAbbr: 'ON',
//    zip: 'M5V 0H5',
// }

// POST OFFICE BOX
addressParse('post office box 3094 collierville tn 38027');
// {
//    source: 'post office box 3094 collierville tn 38027',
//    normalized: 'PO BOX 3094 COLLIERVILLE TN 38027',
//    street: 'PO BOX 3094',
//    city: 'COLLIERVILLE',
//    stateAbbr: 'TN',
//    zip: '38027',
// }

// GENERAL DELIVERY
addressParse('gen del tampa fl 33602-9999');
// {
//    source: 'gen del tampa fl 33602-9999',
//    normalized: 'GENERAL DELIVERY TAMPA FL 33602-9999',
//    street: 'GENERAL DELIVERY',
//    city: 'TAMPA',
//    stateAbbr: 'FL',
//    zip: '33602',
//    zipExt: '9999',
// }

// HIGHWAY CONTRACT
addressParse('highway contract route 68 box 23a', { city: 'vale', state: 'co' });
// {
//    source: 'highway contract route 68 box 23a',
//    normalized: 'HC 68 BOX 23A',
//    city: 'VALE',
//    stateAbbr: 'CO',
//    street: 'HC',
// }
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
import { addressParse } from '@zerodep/parsers';

// all @zerodep address functions
import { addressParse } from '@zerodep/address';

# only this @zerodep package
import { addressParse } from '@zerodep/address-parse';
```

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.4.0] - 2023-10-14

**Changed**

- added a max length check the address normalizer and parser to prevent ReDoS attacks

#### [2.3.0] - 2023-07-03

**Added**

- added the `addressParse()` function
