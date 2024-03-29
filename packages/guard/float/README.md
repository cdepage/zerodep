# @zerodep/guard-float

[![version](https://img.shields.io/npm/v/@zerodep/guard-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/float) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardFloat } from '@zerodep/guard-float';
// or
const { guardFloat } = require('@zerodep/guard-float');
```

### Successful Cases

```javascript
guardFloat(3.14); // void
```

### Unsuccessful Cases

```javascript
guardFloat([]); // throws ZeroDepError: Value is not a float
guardFloat(['a', 'b', 'c']); // throws ZeroDepError: Value is not a float
guardFloat(1000n); // throws ZeroDepError: Value is not a float
guardFloat(true); // throws ZeroDepError: Value is not a float
guardFloat(new Date()); // throws ZeroDepError: Value is not a float
guardFloat(''); // throws ZeroDepError: Value is not a float
guardFloat(new Error('message')); // throws ZeroDepError: Value is not a float
guardFloat(() => 'function'); // throws ZeroDepError: Value is not a float
guardFloat(42); // throws ZeroDepError: Value is not a float
guardFloat(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a float
guardFloat(null); // throws ZeroDepError: Value is not a float
guardFloat({ an: 'object' }); // throws ZeroDepError: Value is not a float
guardFloat(new Promise(() => {})); // throws ZeroDepError: Value is not a float
guardFloat(/[regex]+/gi); // throws ZeroDepError: Value is not a float
guardFloat(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a float
guardFloat('a string'); // throws ZeroDepError: Value is not a float
guardFloat(Symbol()); // throws ZeroDepError: Value is not a float
guardFloat(new Int32Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(undefined); // throws ZeroDepError: Value is not a float
```
