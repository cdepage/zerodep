# isRegex()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-regex?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-regex)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-regex?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-regex)
[![version](https://img.shields.io/npm/v/@zerodep/is-regex?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-regex)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a regular expression.

## Signature

```typescript
const isRegex(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isRegex } from '@zerodep/is-regex';
// or
const { isRegex } = require('@zerodep/is-regex');
```

### Positive Response

```javascript
isRegex(/[regex]+/gi); // true
isRegex(new RegExp('$[a-c]{2}]', 'gi')); // true
```

### Negative Response

```javascript
isRegex(['a', 'b', 'c']); // false
isRegex(1000n); // false
isRegex(true); // false
isRegex(new Date()); // false
isRegex(''); // false
isRegex(new Error('message')); // false
isRegex(3.14); // false
isRegex(() => 'function'); // false
isRegex(42); // false
isRegex(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isRegex(null); // false
isRegex({ an: 'object' }); // false
isRegex(new Promise(() => {})); // false
isRegex(new Set([1, 2, 3])); // false
isRegex('a string'); // false
isRegex(Symbol()); // false
isRegex(new Int32Array(2)); // false
isRegex(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isRegex } from '@zerodep/is';

# only this @zerodep function
import { isRegex } from '@zerodep/is-regex';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.regex` package to `@zerodep/is-regex` for consistency across @zerodep ecosystem
