# @zerodep/guard-array

[![version](https://img.shields.io/npm/v/@zerodep/guard-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be an array; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardArray } from '@zerodep/guard-array';
// or
const { guardArray } = require('@zerodep/guard-array');
```

### Successful Cases

```javascript
guardArray([]); // void
guardArray(['a', 'b', 'c']); // void
```

### Unsuccessful Cases

```javascript
guardArray(1000n); // throws ZeroDepError: Value is not an array
guardArray(true); // throws ZeroDepError: Value is not an array
guardArray(new Date()); // throws ZeroDepError: Value is not an array
guardArray(''); // throws ZeroDepError: Value is not an array
guardArray(new Error('message')); // throws ZeroDepError: Value is not an array
guardArray(3.14); // throws ZeroDepError: Value is not an array
guardArray(() => 'function'); // throws ZeroDepError: Value is not an array
guardArray(42); // throws ZeroDepError: Value is not an array
guardArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an array
guardArray(null); // throws ZeroDepError: Value is not an array
guardArray({ an: 'object' }); // throws ZeroDepError: Value is not an array
guardArray(new Promise(() => {})); // throws ZeroDepError: Value is not an array
guardArray(/[regex]+/gi); // throws ZeroDepError: Value is not an array
guardArray(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an array
guardArray('a string'); // throws ZeroDepError: Value is not an array
guardArray(Symbol()); // throws ZeroDepError: Value is not an array
guardArray(new Int32Array(2)); // throws ZeroDepError: Value is not an array
guardArray(undefined); // throws ZeroDepError: Value is not an array
```
