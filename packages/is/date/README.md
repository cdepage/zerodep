# @zerodep/is-date

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-date)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-date)
[![version](https://img.shields.io/npm/v/@zerodep/is-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-date)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Date object.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/date) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isDate } from '@zerodep/is-date';
// or
const { isDate } = require('@zerodep/is-date');
```

### Positive Response

```javascript
isDate(new Date()); // true
```

### Negative Response

```javascript
isDate(['a', 'b', 'c']); // false
isDate(1000n); // false
isDate(true); // false
isDate(''); // false
isDate(new Error('message')); // false
isDate(3.14); // false
isDate(() => 'function'); // false
isDate(42); // false
isDate(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isDate(null); // false
isDate({ an: 'object' }); // false
isDate(new Promise(() => {})); // false
isDate(/[regex]+/gi); // false
isDate(new Set([1, 2, 3])); // false
isDate('a string'); // false
isDate(Symbol()); // false
isDate(new Int32Array(2)); // false
isDate(undefined); // false
```
