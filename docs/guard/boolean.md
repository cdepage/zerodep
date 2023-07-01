# guardBoolean()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-boolean)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-boolean)
[![version](https://img.shields.io/npm/v/@zerodep/guard-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-boolean)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a boolean; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardBoolean: (value: any) => void;
```

The `guardBoolean` function has the following parameters:

- **value** - the value to guard

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardBoolean } from '@zerodep/guard-boolean';
// or
const { guardBoolean } = require('@zerodep/guard-boolean');
```

### Successful Cases

```javascript
guardBoolean(true); // void
guardBoolean(false); // void
```

### Unsuccessful Cases

```javascript
guardBoolean([]); // throws ZeroDepError: Value is not a boolean
guardBoolean(['a', 'b', 'c']); // throws ZeroDepError: Value is not a boolean
guardBoolean(1000n); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Date()); // throws ZeroDepError: Value is not a boolean
guardBoolean(''); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Error('message')); // throws ZeroDepError: Value is not a boolean
guardBoolean(3.14); // throws ZeroDepError: Value is not a boolean
guardBoolean(() => 'function'); // throws ZeroDepError: Value is not a boolean
guardBoolean(42); // throws ZeroDepError: Value is not a boolean
guardBoolean(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a boolean
guardBoolean(null); // throws ZeroDepError: Value is not a boolean
guardBoolean({ an: 'object' }); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Promise(() => {})); // throws ZeroDepError: Value is not a boolean
guardBoolean(/[regex]+/gi); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a boolean
guardBoolean('a string'); // throws ZeroDepError: Value is not a boolean
guardBoolean(Symbol()); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Int32Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(undefined); // throws ZeroDepError: Value is not a boolean
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages- largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep guard functions - small file size
import { guardBoolean } from '@zerodep/guards';

# only this @zerodep function - tiny file size
import { guardBoolean } from '@zerodep/guard-boolean';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.boolean` package to `@zerodep/guard-boolean` for consistency across @zerodep ecosystem
