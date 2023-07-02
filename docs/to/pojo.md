# toPojo()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/to-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-pojo)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/to-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/to-pojo)
[![version](https://img.shields.io/npm/v/@zerodep/to-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert serializable objects or arrays of serializable values or objects to a Plain Old Javascript Object (POJO); this will use native `toJSON()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const toPojo: <T = Record<string, Serializables> | Serializables[]>(value: Serializables[] | { [key: string]: Serializables } | Map<string, Serializables> | Set<Serializables> | null) => T | null;

type Serializables = bigint | boolean | null | number | string | undefined | Date | Map<string, Serializables> | Set<Serializables> | { [key: string]: Serializables } | { toJSON: () => Serializables; [key: string]: any };
```

### Function Parameters

The `toPojo` function has the following parameters:

- **value** - the value to modify
- **separator** - optional character/string at which to split, default is a space character

## Examples

### Use Cases

```javascript
toPojo({}); // {}
toPojo({ a: 'one', b: 'two' }); // { "a": 'one', "b": 'two' }

toPojo([]); // []
toPojo([1, 2, 3]); // [1, 2, 3]
toPojo(['a', 'b', 'c']); // ["a", "b", "c"]

// Sets are converted to arrays
toPojo(new Set()); // []
toPojo(new Set([1, 2, 3])); // [1, 2, 3]

// Maps are converted to nested arrays
toPojo(new Map()); // []
toPojo(new Map([['a', 1]])); // [["a", 1]]

toPojo(null); // null
toPojo(undefined); // null

toPojo({
  string: 'a string',
  date: new Date('2022-02-24'),
  int: 42,
  float: 3.14,
  bigInt: 8675309n,
  boolT: true,
  boolF: false,
});
// {
//   "string": "a string",
//   "date": "2022-02-24T00:00:00.000Z", <-- CAUTION: Dates are converted to ISO-8601 format
//   "int": 42,
//   "float": 3.14,
//   "bigInt": "8675309", <-- CAUTION: BigInts are converted to strings
//   "boolT": true,
//   "boolF": false,
// }

// invalid values
toPojo('a string'); // throws ZeroDepError: Cannot convert to JSON
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
npm i @zerodep/to-pojo
```

then

```javascript
import { toPojo } from '@zerodep/app';
// or
import { toPojo } from '@zerodep/utilities';
// or
import { toPojo } from '@zerodep/to';
// or
import { toPojo } from '@zerodep/to-pojo';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/to.pojo` package to `@zerodep/to-pojo` for consistency across @zerodep ecosystem
