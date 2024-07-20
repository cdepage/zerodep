# guardBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/guard-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a boolean; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardBoolean: (value: any) => void;
```

The `guardBoolean` function has the following parameters:

- **value** - the value to guard

## Examples

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-boolean
```

then

```javascript
import { guardBoolean } from '@zerodep/app';
// or
import { guardBoolean } from '@zerodep/utilities';
// or
import { guardBoolean } from '@zerodep/guard';
// or
import { guardBoolean } from '@zerodep/guard-boolean';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.boolean` package to `@zerodep/guard-boolean` for consistency across @zerodep ecosystem
