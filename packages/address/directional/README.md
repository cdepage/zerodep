# @zerodep/address-directional

[![version](https://img.shields.io/npm/v/@zerodep/address-directional?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-directional)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to find where a directional name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/directional) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { addressDirectional } from '@zerodep/address-directional';
// or
const { addressDirectional } = require('@zerodep/address-directional');
```

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
