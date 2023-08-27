# addressParse()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-parse?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-parse) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-parse?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-parse) [![version](https://img.shields.io/npm/v/@zerodep/address-parse?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-parse) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/app?style=flat-square)

A utility that parses an address into its component pieces based on American and Canadian standards.

This parser will:

- strip accented characters, capitalize all values and remove punctuation
- convert secondary unit types, street types and directional values to the USPS-preferred abbreviated formats
- identify secondary units located either before or after the street address
- handle PO Boxes, rural routes, highway contracts and some other address types
- intelligently determine the state by a zipcode, if no state provided
- package and present the address information in an easy-to-use format

Note that this is only a parser and does not guarantee that an address exists or is correct as it only works given the information provided. Given the variety of address formats and creativity of how people write addresses, this parser occasionally mis-identifies the specific components but the "line" values are usually stil. correct.

## Signature

```typescript
interface AddressPieces {
  city?: string;
  state?: string;
  country?: string;
  zip?: string | number;
}

interface Address {
  // main address data
  attn?: string; // Atention line
  careOf?: string; // Alternate recipient name
  secondary?: string; // Secondary unit
  line1?: string; // First line of the mailing address
  line2?: string; // Second line of the mailing address
  line3?: string; // Third line of the mailing address
  city?: string; // City name
  state?: string; // 2-letter state abbreviation
  zip?: string; // Zip or postal code
  zipExt?: string; // American zip code extension
  country?: string; // 2-letter country abbreviation

  // identified components: this info is used in the "line" fields above
  pmb?: string; // Private mailbox
  msc?: string; // Mail stop code
  poBox?: string; // Post office box
  rural?: string; // Rural routing
  highway?: string; // Highway contract
  military?: string;
  generalDelivery?: string; // General delivery
  secondaryType?: string; // Type of secondary unit
  secondaryNumber?: string; // Identifier of the secondary unit
  buildingNumber?: string; // Building number
  directionalPre?: string; // Leading directional prefix
  streetNamePre?: string; // Name of the street
  streetType?: string; // Type of street
  streetNamePost?: string; // Name of the street
  directionalPost?: string; // Trailing directional prefix
  street?: string; // The complete street address line
}

addressParse: (line: string, options?: AddressPieces) => Address;
```

## Residential Addresses

```javascript
import { addressNormalize } from '@zerodep/app';

// WITH TRAILING SECONDARY UNIT, NO STATE
addressNormalize('7335 pumpkin hill st. northwest, #14b, atlanta, 30303');
// {
//    secondary: 'STE 14B',
//    line1: '7335 PUMPKIN HILL ST NW',
//    city: 'ATLANTA',
//    state: 'GA',
//    zip: '30303',
//    country: 'US',
//
//    secondaryType: 'STE',
//    secondaryNumber: '14B',
//    buildingNumber: '7335',
//    streetNamePre: 'PUMPKIN HILL',
//    streetType: 'ST',
//    directionalPost: 'NW',
//    street: '7335 PUMPKIN HILL ST NW',
// }

// WITH LEADING SECONDARY UNIT
addressNormalize('apt 12 9655 river road northeast salem oregon 97303-1234 usa');
// {
//    secondary: 'APT 12',
//    line1: '9655 RIVER RD NE',
//    city: 'SALEM',
//    state: 'OR',
//    zip: '97303',
//    zipExt: '1234',
//    country: 'US',
//
//    secondaryType: 'APT',
//    secondaryNumber: '12',
//    buildingNumber: '9655,
//    streetNamePre: 'RIVER',
//    streetType: 'RD',
//    directionalPost: 'NE'
//    street: '9655 RIVER RD NE',
// }

// WITH OPTIONAL FIELDS, FRACTIONAL ADDRESS & DUPLICATED CITY
addressNormalize('6435 1/2 tulip road space 67 springfield', {
  city: 'springfield',
  zip: '97478',
});
// {
//    secondary: 'SPC 67',
//    line1: '6435 1/2 TULIP RD',
//    city: 'SPRINGFIELD',
//    state: 'OR',
//    zip: '97478',
//    country: 'US',
//
//    secondaryType: 'SPC',
//    secondaryNumber: '67',
//    buildingNumber: '6435 1/2,
//    streetNamePre: 'TULIP',
//    streetType: 'RD',
//    street: '6435 1/2 TULIP RD',
// }

// DUAL ADDRESS
addressNormalize('1201 broad street east pob 1001 falls church va 22041-1001');
// {
//    secondary: 'SPC 67',
//    line1: '1201 BROAD ST E',
//    line2: 'PO BOX 1001',
//    city: 'FALLS CHURCH',
//    state: 'VA',
//    zip: '22041',
//    zipExt: '1001',
//    country: 'US',
//
//    poBox: 'PO BOX 1001',
//    buildingNumber: '1201,
//    streetNamePre: 'BROAD',
//    streetType: 'ST',
//    directionalPost: 'E',
//    street: '1201 BROAD ST E'
// }

// WITH PRIVATE MAIL BOX
addressNormalize('10 main st ste 11 pmb 234 herndon va 22071-2716');
// {
//    secondary: 'STE 11',
//    line1: 'PMB 234',
//    line2: '10 MAIN ST',
//    city: 'HERNDON',
//    state: 'VA',
//    zip: '22071',
//    zipExt: '2716',
//    country: 'US',
//
//    pmb: 'PMB 234',
//    secondaryType: 'STE',
//    secondaryNumber: '11',
//    buildingNumber: '10',
//    streetNamePre: 'MAIN',
//    streetType: 'ST',
//    street: '10 MAIN ST'
// }

// CANADIAN ADDRESS
addressNormalize('30 nelson street, penthouse, toronto, on m5v0h5');
// {
//    secondary: 'PH',
//    line1: '30 NELSON ST',
//    city: 'TORONTO',
//    state: 'ON',
//    zip: 'M5V 0H5',
//    country: 'CA',
//
//    secondaryType: 'PH',
//    buildingNumber: '30',
//    streetNamePre: 'NELSON',
//    streetType: 'ST',
//    street: '30 NELSON ST'
// }
```

## Other Address Types

```javascript
import { addressNormalize } from '@zerodep/app';

// POST OFFICE BOX
addressNormalize('post office box 3094 collierville tn 38027');
// {
//    line1: 'PO BOX 3094',
//    city: 'COLLIERVILLE',
//    state: 'TN',
//    zip: '38027',
//    country: 'US',
//
//    poBox: 'PO BOX 3094',
// }

// RURAL ROUTE
addressNormalize('ruralroute #9 box #23a hornbrook california 96044');
// {
//    line1: 'RR 9 BOX 23A',
//    city: 'HORNBROOK',
//    state: 'CA',
//    zip: '96044',
//    country: 'US',
//
//    rural: 'RR 9 BOX 23A',
// }

// GENERAL DELIVERY
addressNormalize('gen del tampa fl 33602-9999');
// {
//    line1: 'GD',
//    city: 'TAMPA',
//    state: 'FL',
//    zip: '33602',
//    zipExt: '9999',
//    country: 'US',
//
//    generalDelivery: 'GD',
// }

// HIGHWAY CONTRACT
addressNormalize('highway contract route 68 box 23a', { city: 'vale', state: 'co' });
// {
//   line1: 'HC 68 BOX 23A',
//   city: 'VALE',
//   state: 'CO',
//   country: 'US',
//
//   highway: 'HC 68 BOX 23A',
// }
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
import { addressNormalize } from '@zerodep/parsers';

// all @zerodep address functions
import { addressNormalize } from '@zerodep/address';

# only this @zerodep package
import { addressNormalize } from '@zerodep/address-normalize';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.3.0] - 2023-07-03

**Added**

- added the `addressParse()` function
