# addressParse()

[![version](https://img.shields.io/npm/v/@zerodep/address-parse?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-parse)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
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

Note that this is only a parser and does not guarantee that an address exists or is correct as it only works given the information provided. Given the variety of address formats and creativity of how people write addresses, this parser occasionally mis-identifies the specific components but the "line" values are usually stil. correct.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/deburr) page.

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressZip } from '@zerodep/address-parse';

// CJS
const { addressZip } = require('@zerodep/address-parse');
```

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

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - supports both ECMAScript modules and common JavaScript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully Typed** - typescript definitions are provided/built-in to every package for a superior developer experience
- **Semantically Named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, valuable changelogs for understand changes
- **MIT Licensed** - permissively licensed for maximum usability
