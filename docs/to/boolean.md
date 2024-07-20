# toBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/to-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to reliably convert a value to a boolean. Consideration for common boolean-like words and abbreviations are included. Values that cannot reliably be converted to a boolean will cause a `ZeroDepError` to be thrown.

This method behaves differently than the native `Boolean()` method:

- native method will convert any non-empty string to `true`
- native method will convert objects, Symbols and non-zero BigInts to `true`
- native method will convert any non-zero number to true (including negative values)
- native method will convert `NaN` to false
- this `toBoolean` method will convert specific truthy/falsy strings and abbreviations to the appropriate boolean value
- this `toBoolean` method will convert 0 or 1 integers and BigInts to boolean equivalents, and throw an error for all other values
- this `toBoolean` method will convert empty POJOs, arrays, Sets and Maps to `false`, those with one or more values to `true`
- this `toBoolean` method will throw an error for all other `object` types

## Signature

```typescript
const toBoolean: (value: unknown) => number;
```

### Function Parameters

The `toBoolean` function has the following parameters:

- **value** - the value to convert to a boolean

## Examples

### Use Cases

```javascript
// booleans
toBoolean(true); // true
toBoolean(false); // false

// boolean-like strings (case insensitive, includes English, Spanish & French terms)
toBoolean('true'); // true
toBoolean('t'); // true
toBoolean('yes'); // true
toBoolean('y'); // true
toBoolean('cierto'); // true
toBoolean('c'); // true
toBoolean('verdadero'); // true
toBoolean('vrais'); // true
toBoolean('v'); // true
toBoolean('si'); // true
toBoolean('sí'); // true
toBoolean('s'); // true
toBoolean('oui'); // true
toBoolean('ouais'); // true
toBoolean('o'); // true <-- letter "o"

toBoolean('false'); // false
toBoolean('falso'); // false
toBoolean('faux'); // false
toBoolean('f'); // false
toBoolean('no'); // false
toBoolean('non'); // false
toBoolean('n'); // false
toBoolean(''); // false

// boolean-like numbers as strings
toBoolean('1'); // true
toBoolean('0'); // false <-- number "0"
toBoolean('-0'); // false <-- number "0"
toBoolean('2'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('-1'); // throws ZeroDepError: Cannot reliably convert to boolean

// numbers
toBoolean(1); // true
toBoolean(0); // false
toBoolean(-0); // false
toBoolean(42); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(3.14); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(100e10); // throws ZeroDepError: Cannot reliably convert to boolean

// bigint
toBoolean(1n); // true
toBoolean(0n); // false
toBoolean(-0n); // false
toBoolean(42n); // throws ZeroDepError: Cannot reliably convert to boolean

// empty values
toBoolean(null); // false
toBoolean(undefined); // false

// numerical strings
toBoolean('-171.3'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('3e8'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('8,675,309'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean('8.675.309,123'); // throws ZeroDepError: Cannot reliably convert to boolean

// dates
toBoolean(new Date('2022-04-22T10:30:00.000Z')); // throws ZeroDepError: Cannot reliably convert to boolean

// objects
toBoolean({}); // false
toBoolean({ an: 'object' }); // true

toBoolean([]); // false
toBoolean(['an', 'array']); // true
toBoolean([true]); // false <-- content not evaluated

toBoolean(new Set()); // false
toBoolean(new Set([0, 1, 2])); // true
toBoolean(new Set([0])); // false <-- content not evaluated

toBoolean(new Map()); // false
toBoolean(new Map([['a', 'anything']])); // true
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
npm i @zerodep/to-boolean
```

then

```javascript
import { toBoolean } from '@zerodep/app';
// or
import { toBoolean } from '@zerodep/utilities';
// or
import { toBoolean } from '@zerodep/to';
// or
import { toBoolean } from '@zerodep/to-boolean';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2024-07-20

**Added**

- added the `@zerodep/to.boolean` package
