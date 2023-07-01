# @zerodep/guard-date

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-date)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-date)
[![version](https://img.shields.io/npm/v/@zerodep/guard-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-date)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/guard/date) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardDate } from '@zerodep/guard-date';
// or
const { guardDate } = require('@zerodep/guard-date');
```

### Successful Cases

```javascript
guardDate(new Date()); // void
```

### Unsuccessful Cases

```javascript
guardDate([]); // throws ZeroDepError: Value is not a date
guardDate(['a', 'b', 'c']); // throws ZeroDepError: Value is not a date
guardDate(1000n); // throws ZeroDepError: Value is not a date
guardDate(true); // throws ZeroDepError: Value is not a date
guardDate(''); // throws ZeroDepError: Value is not a date
guardDate(new Error('message')); // throws ZeroDepError: Value is not a date
guardDate(3.14); // throws ZeroDepError: Value is not a date
guardDate(() => 'function'); // throws ZeroDepError: Value is not a date
guardDate(42); // throws ZeroDepError: Value is not a date
guardDate(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a date
guardDate(null); // throws ZeroDepError: Value is not a date
guardDate({ an: 'object' }); // throws ZeroDepError: Value is not a date
guardDate(new Promise(() => {})); // throws ZeroDepError: Value is not a date
guardDate(/[regex]+/gi); // throws ZeroDepError: Value is not a date
guardDate(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a date
guardDate('a string'); // throws ZeroDepError: Value is not a date
guardDate(Symbol()); // throws ZeroDepError: Value is not a date
guardDate(new Int32Array(2)); // throws ZeroDepError: Value is not a date
guardDate(undefined); // throws ZeroDepError: Value is not a date
```
