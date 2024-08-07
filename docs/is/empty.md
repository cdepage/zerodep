# isEmpty()

[![version](https://img.shields.io/npm/v/@zerodep/is-empty?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, string, object, Map, Set, WeakMap or WeakSet.

## Signature

```typescript
const isEmpty(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isEmpty([]); // true
isEmpty(''); // true
isEmpty(null); // true
isEmpty({}); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty(new WeakMap()); // true
isEmpty(new WeakSet()); // true
isEmpty(undefined); // true
```

### Negative Response

```javascript
isEmpty(['a', 'b', 'c']); // false
isEmpty(1000n); // false
isEmpty(true); // false
isEmpty(new Date()); // false
isEmpty(new Error('message')); // false
isEmpty(3.14); // false
isEmpty(() => 'function'); // false
isEmpty(42); // false
isEmpty(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isEmpty({ an: 'object' }); // false
isEmpty(new Promise(() => {})); // false
isEmpty(/[regex]+/gi); // false
isEmpty(new Set([1, 2, 3])); // false
isEmpty('a string'); // false
isEmpty(Symbol()); // false
isEmpty(new Int32Array(2)); // false
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
npm i @zerodep/is-empty
```

then

```javascript
import { isEmpty } from '@zerodep/app';
// or
import { isEmpty } from '@zerodep/utilities';
// or
import { isEmpty } from '@zerodep/is';
// or
import { isEmpty } from '@zerodep/is-empty';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.empty` package to `@zerodep/is-empty` for consistency across @zerodep ecosystem
