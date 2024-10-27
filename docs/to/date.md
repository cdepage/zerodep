# toDate()

[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert a string, number, BigInt or Date to a Date. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const toDate: (value: string | number | BigInt | Date) => Date;
```

### Function Parameters

The `toDate` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
// ESM
import { toDate } from '@zerodep/app';

// CJS
const { toDate } = require('@zerodep/app');
```

```javascript
// BigInts
toDate(42n); // Date() object equivalent to 1970-01-01T00:00:42.000Z
toDate(0n); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-0n); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-42n); // Date() object equivalent to 1969-12-31T23:59:18.000Z
toDate(1384275600n); // Date() object equivalent to 2013-11-12T17:00:00.000Z

// Dates
toDate(new Date('1970-01-01T12:00:00.000Z')); // Date() object equivalent to 1970-01-01T12:00:00.000Z
toDate(new Date('2099-12-31')); // Date() object equivalent to 2099-12-31T12:00:00.000Z

// Floats
toDate(3.14); // Date() object equivalent to 1970-01-01T00:00:00.003Z
toDate(0.0); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-0.0); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-3.14); // Date() object equivalent to 1969-12-31T23:59:59.997Z
toDate(Math.E); // Date() object equivalent to 1970-01-01T00:00:00.002Z
toDate(Math.PI); // Date() object equivalent to 1970-01-01T00:00:00.003Z
toDate(Number.MIN_VALUE); // Date() object equivalent to 1970-01-01T00:00:00.000Z

// Numbers
toDate(1645722000); // Date() object equivalent to 2022-04-22T17:00:00.000Z
toDate(1640451600000); // Date() object equivalent to 2023-12-25T17:00:00.000Z

toDate(Number.POSITIVE_INFINITY); // throws ZeroDepError: Invalid Date
toDate(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Invalid Date
toDate(Number.MAX_VALUE); // throws ZeroDepError: Invalid Date
toDate(3e8); // Date() object equivalent to 1979-07-05T05:20:00.000Z
toDate(42); // Date() object equivalent to 1970-01-01T00:00:42.000Z
toDate(1); // Date() object equivalent to 1970-01-01T00:00:01.000Z
toDate(0); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-0); // Date() object equivalent to 1970-01-01T00:00:00.000Z
toDate(-1); // Date() object equivalent to 1969-12-31T23:59:59.000Z
toDate(-42); // Date() object equivalent to 1969-12-31T23:59:18.000Z
toDate(-3e8); // Date() object equivalent to 1960-06-29T18:40:00.000Z
toDate(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Invalid Date
toDate(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Invalid Date
toDate(Number.NaN); // throws ZeroDepError: Invalid Date

// Strings
toDate('2022-02-24'); // Date() object equivalent to 2022-02-24T00:00:00.000Z
toDate('12/25/2021'); // Date() object equivalent to 2021-12-25T00:00:00.000Z
toDate('09-Aug-2016'); // Date() object equivalent to 2016-08-09T00:00:00.000Z
toDate('11/12/13'); // Date() object equivalent to 2013-11-12T00:00:00.000Z

toDate(''); // throws ZeroDepError: Invalid Date
toDate('a longer string'); // throws ZeroDepError: Invalid Date
toDate('1000n'); // throws ZeroDepError: Invalid Date
toDate('3e8'); // throws ZeroDepError: Invalid Date
toDate('42'); // throws ZeroDepError: Invalid Date
toDate('3.14'); // throws ZeroDepError: Invalid Date
toDate('0'); // throws ZeroDepError: Invalid Date
toDate('-0'); // throws ZeroDepError: Invalid Date
toDate('-3.14'); // throws ZeroDepError: Invalid Date
toDate('-42'); // throws ZeroDepError: Invalid Date
toDate('-3e8'); // throws ZeroDepError: Invalid Date
toDate('-1000n'); // throws ZeroDepError: Invalid Date

// Other - anything that is not a string, number, BigInt or Date
toDate({ not: 'a string' }); // throws ZeroDepError: Invalid Date
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "to" functions
npm i @zerodep/to

# only this @zerodep package
npm i @zerodep/to-date
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/to.date` package to `@zerodep/to-date` for consistency across @zerodep ecosystem
