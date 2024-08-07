# toBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/to-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to reliably convert a value to a boolean. Consideration for common boolean-like words and abbreviations are included. Values that cannot reliably be converted to a boolean will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const toBoolean: (value: unknown) => boolean;
```

## Behaviours

This method behaves differently than the native `Boolean()` coercion method:

**Numbers**

- native method will convert any non-zero number to `true` (including negative values)
- this `toBoolean` method will convert positive numbers to `true`, zero and negative values to `false`
- this `toBoolean` method will throw an exception for `NaN` values

**BigInts**

- native method will convert all BigInts to `true` (even On)
- this `toBoolean` method will convert positive BigInt values to `true`, zero and negative values to `false`

**Strings**

- native method will convert any non-empty string to `true`
- this `toBoolean` method will convert specific truthy/falsy strings and abbreviations to the appropriate boolean values, otherwise strings with length are `true`
- this `toBoolean` method will convert numbers or BigInts represented as strings as per the logic for Numbers and BigInts (above)

**Arrays**

- native method will convert arrays to `true`
- this `toBoolean` method will convert empty arrays to `false` and arrays with one or more items to `true`

**POJOs**

- native method will convert any POJOs to `true`
- this `toBoolean` method will convert empty POJOs to `false` and POJOs with any values `true`

**Dates**

- native method will convert any Date to `true`
- this `toBoolean` method will throw an exception for a Date as it cannot be reliably converted to a boolean

**Sets and Maps**

- native method will convert any Set or Map to `true`
- this `toBoolean` method will convert empty Sets and Maps to `false` and Sets and Maps with any values `true`

**Others**

- native method will convert anything with a type of "object" to `true` - this includes Symbols, Promises, Classes, WeakMaps, WeakSets, Functions, Regular Expressions, TypedArrays and Generators
- this `toBoolean` method will throw an exception for any other type as they cannot be reliably converted to a boolean


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

// boolean-like numbers as strings are treated as numbers
toBoolean('1'); // true
toBoolean('0'); // false <-- number "0"
toBoolean('-0'); // false <-- number "0"

// numerical strings
toBoolean('171.3'); // true
toBoolean('3e8'); // true
toBoolean('8,675,309'); // true
toBoolean('8.675.309,123'); // true
toBoolean('-171.3'); // false
toBoolean('-3e8'); // false
toBoolean('-8,675,309'); // false
toBoolean('-8.675.309,123'); // false

// any string that isn't a number or BigInt or one of the keywords/letters above
toBoolean('string of any length'); // true

// numbers - positive numbers are truthy, negative numbers are falsy, zero is always falsy
toBoolean(1); // true
toBoolean(42); // true
toBoolean(3.14); // true
toBoolean(100e10); // true
toBoolean(0); // false
toBoolean(-0); // false
toBoolean(-42); // false
toBoolean(-3.14); // false
toBoolean(-100e10); // false
toBoolean(NaN); // // throws ZeroDepError: Cannot reliably convert to boolean

// bigint - positive values are truthy, negative values are falsy, zero is always falsy
toBoolean(1n); // true
toBoolean(42n); // true
toBoolean(0n); // false
toBoolean(-0n); // false
toBoolean(-42n); // false

// empty values
toBoolean(null); // false
toBoolean(undefined); // false

// dates
toBoolean(new Date('2022-04-22T10:30:00.000Z')); // throws ZeroDepError: Cannot reliably convert to boolean

// objects - empty are falsy, non-empty are truthy
toBoolean({}); // false
toBoolean({ an: 'object' }); // true

// arrats - empty are falsy, non-empty are truthy
toBoolean([]); // false
toBoolean(['an', 'array']); // true
toBoolean([false]); // true <-- CAUTION: content not evaluated

// sets - empty are falsy, non-empty are truthy
toBoolean(new Set()); // false
toBoolean(new Set([0, 1, 2])); // true
toBoolean(new Set([0])); // true <-- CAUTION: content not evaluated

// maps - empty are falsy, non-empty are truthy
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
