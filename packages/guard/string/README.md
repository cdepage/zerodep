# @zerodep/guard-string

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-string?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-string)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-string?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-string)
[![version](https://img.shields.io/npm/v/@zerodep/guard-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-string)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a string; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/guard/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardString } from '@zerodep/guard-string';
// or
const { guardString } = require('@zerodep/guard-string');
```

### Successful Cases

```javascript
guardString(''); // void
guardString('a string'); // void
```

### Unsuccessful Cases

```javascript
guardString([]); // throws ZeroDepError: Value is not a string
guardString(['a', 'b', 'c']); // throws ZeroDepError: Value is not a string
guardString(1000n); // throws ZeroDepError: Value is not a string
guardString(true); // throws ZeroDepError: Value is not a string
guardString(new Date()); // throws ZeroDepError: Value is not a string
guardString(new Error('message')); // throws ZeroDepError: Value is not a string
guardString(3.14); // throws ZeroDepError: Value is not a string
guardString(() => 'function'); // throws ZeroDepError: Value is not a string
guardString(42); // throws ZeroDepError: Value is not a string
guardString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a string
guardString(null); // throws ZeroDepError: Value is not a string
guardString({ an: 'object' }); // throws ZeroDepError: Value is not a string
guardString(new Promise(() => {})); // throws ZeroDepError: Value is not a string
guardString(/[regex]+/gi); // throws ZeroDepError: Value is not a string
guardString(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a string
guardString(Symbol()); // throws ZeroDepError: Value is not a string
guardString(new Int32Array(2)); // throws ZeroDepError: Value is not a string
guardString(undefined); // throws ZeroDepError: Value is not a string
```
