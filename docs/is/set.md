# isSet()

[![version](https://img.shields.io/npm/v/@zerodep/is-set?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-set)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Set.

## Signature

```typescript
const isSet(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isSet(new Set()); // true
isSet(new Set([1, 2, 3])); // true
```

### Negative Response

```javascript
isSet(['a', 'b', 'c']); // false
isSet(1000n); // false
isSet(true); // false
isSet(new Date()); // false
isSet(''); // false
isSet(new Error('message')); // false
isSet(3.14); // false
isSet(() => 'function'); // false
isSet(42); // false
isSet(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isSet(null); // false
isSet({ an: 'object' }); // false
isSet(new Promise(() => {})); // false
isSet(/[regex]+/gi); // false
isSet('a string'); // false
isSet(Symbol()); // false
isSet(new Int32Array(2)); // false
isSet(undefined); // false
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
npm i @zerodep/is-set
```

then

```javascript
import { isSet } from '@zerodep/app';
// or
import { isSet } from '@zerodep/utilities';
// or
import { isSet } from '@zerodep/is';
// or
import { isSet } from '@zerodep/is-set';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.set` package to `@zerodep/is-set` for consistency across @zerodep ecosystem
