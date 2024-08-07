# isTypedArray()

[![version](https://img.shields.io/npm/v/@zerodep/is-typedarray?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-typedarray)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Typed Array.

## Signature

```typescript
const isTypedArray(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isTypedArray(new Int8Array(2)); // true
isTypedArray(new Uint8Array(2)); // true
isTypedArray(new Uint8ClampedArray(2)); // true
isTypedArray(new Int16Array(2)); // true
isTypedArray(new Uint16Array(2)); // true
isTypedArray(new Int32Array(2)); // true
isTypedArray(new Uint32Array(2)); // true
isTypedArray(new Float32Array(2)); // true
isTypedArray(new Float64Array(2)); // true
```

### Negative Response

```javascript
isTypedArray(['a', 'b', 'c']); // false
isTypedArray(1000n); // false
isTypedArray(true); // false
isTypedArray(new Date()); // false
isTypedArray(''); // false
isTypedArray(new Error('message')); // false
isTypedArray(3.14); // false
isTypedArray(() => 'function'); // false
isTypedArray(42); // false
isTypedArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isTypedArray(null); // false
isTypedArray({ an: 'object' }); // false
isTypedArray(new Promise(() => {})); // false
isTypedArray(/[regex]+/gi); // false
isTypedArray(new Set([1, 2, 3])); // false
isTypedArray('a string'); // false
isTypedArray(Symbol()); // false
isTypedArray(undefined); // false
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
npm i @zerodep/is-typedarray
```

then

```javascript
import { isTypedArray } from '@zerodep/app';
// or
import { isTypedArray } from '@zerodep/utilities';
// or
import { isTypedArray } from '@zerodep/is';
// or
import { isTypedArray } from '@zerodep/is-typedarray';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.typedarray` package to `@zerodep/is-typedarray` for consistency across @zerodep ecosystem
