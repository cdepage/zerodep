# @zerodep/to-date

[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert a string, number, BigInt or Date to a Date. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/date) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { toDate } from '@zerodep/to-date';
// or
const { toDate } = require('@zerodep/to-date');
```

### Use Cases

```javascript
// with a string
toDate('2022-02-24'); // Date() object equivalent to 2022-04-22T17:00:00.000Z
toDate('12/25/2021'); // Date() object equivalent to 2023-12-25T17:00:00.000Z
toDate('09-Aug-2016'); // Date() object equivalent to 2019-08-09T17:00:00.000Z
toDate('11/12/13'); // Date() object equivalent to 2013-11-12T17:00:00.000Z

// with a number or big int
toDate(1645722000); // Date() object equivalent to 2022-04-22T17:00:00.000Z
toDate(1640451600000); // Date() object equivalent to 2023-12-25T17:00:00.000Z
toDate(1384275600n); // Date() object equivalent to 2013-11-12T17:00:00.000Z

// invalid values
toDate({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
