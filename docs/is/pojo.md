# isPojo()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-pojo)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-pojo)
[![version](https://img.shields.io/npm/v/@zerodep/is-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-pojo)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Plain Old Javascript Object (POJO) that is serializable.

## Signature

```typescript
const isPojo(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isPojo([]); // true
isPojo(['a', 1, true]); // true
isPojo({}); // true
isPojo({ a: 'string', b: 2, c: false }); // true
```

### Negative Response

```javascript
isPojo(null); // false - CAUTION
isPojo({ aMap: new Map() }); // false - CAUTION
isPojo({ aSet: new Set() }); // false - CAUTION

isPojo(1000n); // false
isPojo(true); // false
isPojo(new Date()); // false
isPojo(''); // false
isPojo(new Error('message')); // false
isPojo(3.14); // false
isPojo(() => 'function'); // false
isPojo(42); // false
isPojo(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isPojo(null); // false
isPojo(new Promise(() => {})); // false
isPojo(/[regex]+/gi); // false
isPojo(new Set([1, 2, 3])); // false
isPojo('a string'); // false
isPojo(Symbol()); // false
isPojo(new Int32Array(2)); // false
isPojo(undefined); // false
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# only this @zerodep package
npm i @zerodep/is-pojo
```

then

```javascript
import { isPojo } from '@zerodep/app';
// or
import { isPojo } from '@zerodep/utilities';
// or
import { isPojo } from '@zerodep/is';
// or
import { isPojo } from '@zerodep/is-pojo';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.pojo` package to `@zerodep/is-pojo` for consistency across @zerodep ecosystem
