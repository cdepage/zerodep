# @zerodep/guard-integer

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-integer)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-integer)
[![version](https://img.shields.io/npm/v/@zerodep/guard-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be an integer; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/integer) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardInteger } from '@zerodep/guard-integer';
// or
const { guardInteger } = require('@zerodep/guard-integer');
```

### Successful Cases

```javascript
guardInteger(42); // void
```

### Unsuccessful Cases

```javascript
guardInteger([]); // throws ZeroDepError: Value is not an integer
guardInteger(['a', 'b', 'c']); // throws ZeroDepError: Value is not an integer
guardInteger(1000n); // throws ZeroDepError: Value is not an integer
guardInteger(true); // throws ZeroDepError: Value is not an integer
guardInteger(new Date()); // throws ZeroDepError: Value is not an integer
guardInteger(''); // throws ZeroDepError: Value is not an integer
guardInteger(new Error('message')); // throws ZeroDepError: Value is not an integer
guardInteger(3.14); // throws ZeroDepError: Value is not an integer
guardInteger(() => 'function'); // throws ZeroDepError: Value is not an integer
guardInteger(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an integer
guardInteger(null); // throws ZeroDepError: Value is not an integer
guardInteger({ an: 'object' }); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise(() => {})); // throws ZeroDepError: Value is not an integer
guardInteger(/[regex]+/gi); // throws ZeroDepError: Value is not an integer
guardInteger(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an integer
guardInteger('a string'); // throws ZeroDepError: Value is not an integer
guardInteger(Symbol()); // throws ZeroDepError: Value is not an integer
guardInteger(new Int32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(undefined); // throws ZeroDepError: Value is not an integer
```
