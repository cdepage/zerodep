# addressDirectional()

[![version](https://img.shields.io/npm/v/@zerodep/address-directional?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-directional)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a directional name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a directional is not found an empty array will be returned.

## Signature

```typescript
const addressDirectional: (address: string) => Addressdirectional[];

interface Addressdirectional {
  directional: string;
  source: string;
  ndx: number;
  length: number;
}
```

The `addressDirectional` function has the following parameters:

- **address** - an address string

The `addressDirectional` result has the following properties:

- **directional** - the standardized directional value
- **source** - the string that matched to identify the directional
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string

## Examples

### Use Case

```javascript
addressDirectional('1234 Main Street East, Los Angeles CA, US');
//  [
//    {
//      directional: 'E',
//      source: 'East',
//      ndx: 17,
//      length: 4,
//    },
//  ]
```

### Unsuccessful Case

```javascript
addressDirectional('unknown');
// []
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
npm i @zerodep/parsers

# all @zerodep "address" packages
npm i @zerodep/address

# only this @zerodep package
npm i @zerodep/address-directional
```

then

```javascript
import { addressDirectional } from '@zerodep/add';
// or
import { addressDirectional } from '@zerodep/parsers';
// or
import { addressDirectional } from '@zerodep/address';
// or
import { addressDirectional } from '@zerodep/address-directional';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.3.0] - 2023-07-03

**Added**

- added the `addressdirectional()` function
