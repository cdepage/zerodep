# isPromise()

[![version](https://img.shields.io/npm/v/@zerodep/is-promise?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-promise)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a pending, resolved or rejected Promise.

## Signature

```typescript
const isPromise(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isPromise(new Promise(() => {})); // true
isPromise(Promise.resolve()); // true
isPromise(Promise.reject()); // true
```

### Negative Response

```javascript
isPromise(['a', 'b', 'c']); // false
isPromise(1000n); // false
isPromise(true); // false
isPromise(new Date()); // false
isPromise(''); // false
isPromise(new Error('message')); // false
isPromise(3.14); // false
isPromise(() => 'function'); // false
isPromise(42); // false
isPromise(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isPromise(null); // false
isPromise({ an: 'object' }); // false
isPromise(/[regex]+/gi); // false
isPromise(new Set([1, 2, 3])); // false
isPromise('a string'); // false
isPromise(Symbol()); // false
isPromise(new Int32Array(2)); // false
isPromise(undefined); // false
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
npm i @zerodep/is-promise
```

then

```javascript
import { isPromise } from '@zerodep/app';
// or
import { isPromise } from '@zerodep/utilities';
// or
import { isPromise } from '@zerodep/is';
// or
import { isPromise } from '@zerodep/is-promise';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.promise` package to `@zerodep/is-promise` for consistency across @zerodep ecosystem
