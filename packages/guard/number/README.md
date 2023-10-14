# @zerodep/guard-number

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-number)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-number)
[![version](https://img.shields.io/npm/v/@zerodep/guard-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a number; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/number) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardNumber } from '@zerodep/guard-number';
// or
const { guardNumber } = require('@zerodep/guard-number');
```

### Successful Cases

```javascript
guardNumber(3.14); // void
guardNumber(42); // void
```

### Unsuccessful Cases

```javascript
guardNumber([]); // throws ZeroDepError: Value is not a number
guardNumber(['a', 'b', 'c']); // throws ZeroDepError: Value is not a number
guardNumber(1000n); // throws ZeroDepError: Value is not a number
guardNumber(true); // throws ZeroDepError: Value is not a number
guardNumber(new Date()); // throws ZeroDepError: Value is not a number
guardNumber(''); // throws ZeroDepError: Value is not a number
guardNumber(new Error('message')); // throws ZeroDepError: Value is not a number
guardNumber(() => 'function'); // throws ZeroDepError: Value is not a number
guardNumber(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a number
guardNumber(null); // throws ZeroDepError: Value is not a number
guardNumber({ an: 'object' }); // throws ZeroDepError: Value is not a number
guardNumber(new Promise(() => {})); // throws ZeroDepError: Value is not a number
guardNumber(/[regex]+/gi); // throws ZeroDepError: Value is not a number
guardNumber(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a number
guardNumber('a string'); // throws ZeroDepError: Value is not a number
guardNumber(Symbol()); // throws ZeroDepError: Value is not a number
guardNumber(new Int32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(undefined); // throws ZeroDepError: Value is not a number
```
