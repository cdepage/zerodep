# isBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a boolean.

## Signature

```typescript
const isBoolean(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isBoolean(true); // true
isBoolean(false); // true
isBoolean(new Boolean(true)); // true
```

### Negative Response

```javascript
isBoolean(['a', 'b', 'c']); // false
isBoolean(1000n); // false
isBoolean(new Date()); // false
isBoolean(''); // false
isBoolean(new Error('message')); // false
isBoolean(3.14); // false
isBoolean(() => 'function'); // false
isBoolean(42); // false
isBoolean(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBoolean(null); // false
isBoolean({ an: 'object' }); // false
isBoolean(new Promise(() => {})); // false
isBoolean(/[regex]+/gi); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean('a string'); // false
isBoolean(Symbol()); // false
isBoolean(new Int32Array(2)); // false
isBoolean(undefined); // false
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
npm i @zerodep/is-boolean
```

then

```javascript
import { isBoolean } from '@zerodep/app';
// or
import { isBoolean } from '@zerodep/utilities';
// or
import { isBoolean } from '@zerodep/is';
// or
import { isBoolean } from '@zerodep/is-boolean';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.boolean` package to `@zerodep/is-boolean` for consistency across @zerodep ecosystem
