# toString()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/to-string?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-string)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/to-string?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-string)
[![version](https://img.shields.io/npm/v/@zerodep/to-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert stringifiable values to a string; this will use native `toString()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const toString: (value: Stringifiables) => string;

type Stringifiables = bigint | boolean | null | number | string | undefined | Date | Map<string, Stringifiables> | Set<Stringifiables> | Stringifiables[] | { [key: string]: Stringifiables } | { toString: () => string; [key: string]: any };
```

### Function Parameters

The `toString` function has the following parameters:

- **value** - the value to convert

## Examples

### Use Cases

```javascript
// booleans
toString(true); // "true"
toString(false); // "false"

// numbers
toString(42); // "42"
toString(3.14); // "3.14"
toString(100e10); // "1000000000000"
toString(Number.NaN); // "NaN"
toString(Number.POSITIVE_INFINITY); // "Infinity"

// bigint
toString(8675309n); // "8675309"

// strings
toString('Some string'); // "Some string"

// null + undefined
toString(null); // ""
toString(undefined); // ""

// objects
toString({}); // "{}";
toString({ a: 'a', b: 'b' }); // "{\"a\":\"a\",\"b\":\"b\"}"

// arrays
toString([]); // "[]"
toString(['a', 'b', 'c']); // "[\"a\",\"b\",\"c\"]"

// dates
toString(new Date('2022-02-24')); // "2022-02-24T00:00:00.000Z"

// Sets
toString(new Set()); // "[]"
toString(new Set([1, 2, 3])); // "[1, 2, 3]"

// Maps
toString(new Map()); // "{}"
toString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // "{\"a\":1, \"b\":2 }

// invalid values
toString(new Promise()); // throws ZeroDepError: Cannot convert to JSON
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

// all @zerodep "to" functions
npm i @zerodep/to

# only this @zerodep package
npm i @zerodep/to-string
```

then

```javascript
import { toString } from '@zerodep/app';
// or
import { toString } from '@zerodep/utilities';
// or
import { toString } from '@zerodep/to';
// or
import { toString } from '@zerodep/to-string';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/to.string` package to `@zerodep/to-string` for consistency across @zerodep ecosystem
