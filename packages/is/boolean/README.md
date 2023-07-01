# @zerodep/is-boolean

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-boolean)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-boolean?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-boolean)
[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a boolean.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isBoolean } from '@zerodep/is-boolean';
// or
const { isBoolean } = require('@zerodep/is-boolean');
```

### Positive Response

```javascript
isBoolean(true); // true
isBoolean(false); // true
isBoolean(new Boolean(true)); // true
```

### Negative Response

```javascript
isBoolean(['a', 'b', 'c']); // false
isBoolean(1000n); // false
isBoolean(new Date()); // false
isBoolean(''); // false
isBoolean(new Error('message')); // false
isBoolean(3.14); // false
isBoolean(() => 'function'); // false
isBoolean(42); // false
isBoolean(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBoolean(null); // false
isBoolean({ an: 'object' }); // false
isBoolean(new Promise(() => {})); // false
isBoolean(/[regex]+/gi); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean('a string'); // false
isBoolean(Symbol()); // false
isBoolean(new Int32Array(2)); // false
isBoolean(undefined); // false
```
