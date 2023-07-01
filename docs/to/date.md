# toDate()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/to-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-integer)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/to-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-integer)
[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string, number, BigInt or Date to a Date. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const toDate: (value: string | number | bigint | Date) => Date;
```

### Function Parameters

The `toDate` function has the following parameters:

- **value** - the value to convert

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

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep to functions - small file size
import { toDate } from '@zerodep/to';

# only this @zerodep function - tiny file size
import { toDate } from '@zerodep/to-date';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/to.date` package to `@zerodep/to-date` for consistency across @zerodep ecosystem
