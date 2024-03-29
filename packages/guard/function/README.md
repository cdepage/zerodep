# @zerodep/guard-function

[![version](https://img.shields.io/npm/v/@zerodep/guard-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be a function; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/iguard/function) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardFunction } from '@zerodep/guard-function';
// or
const { guardFunction } = require('@zerodep/guard-function');
```

### Successful Cases

```javascript
guardFunction(() => 'function'); // void
```

### Unsuccessful Cases

```javascript
guardFunction([]); // throws ZeroDepError: Value is not a function
guardFunction(['a', 'b', 'c']); // throws ZeroDepError: Value is not a function
guardFunction(1000n); // throws ZeroDepError: Value is not a function
guardFunction(true); // throws ZeroDepError: Value is not a function
guardFunction(new Date()); // throws ZeroDepError: Value is not a function
guardFunction(''); // throws ZeroDepError: Value is not a function
guardFunction(new Error('message')); // throws ZeroDepError: Value is not a function
guardFunction(3.14); // throws ZeroDepError: Value is not a function
guardFunction(42); // throws ZeroDepError: Value is not a function
guardFunction(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a function
guardFunction(null); // throws ZeroDepError: Value is not a function
guardFunction({ an: 'object' }); // throws ZeroDepError: Value is not a function
guardFunction(new Promise(() => {})); // throws ZeroDepError: Value is not a function
guardFunction(/[regex]+/gi); // throws ZeroDepError: Value is not a function
guardFunction(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a function
guardFunction('a string'); // throws ZeroDepError: Value is not a function
guardFunction(Symbol()); // throws ZeroDepError: Value is not a function
guardFunction(new Int32Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(undefined); // throws ZeroDepError: Value is not a function
```
