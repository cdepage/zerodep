# @zerodep/is-float

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-float)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-float)
[![version](https://img.shields.io/npm/v/@zerodep/is-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a float.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/float) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isFloat } from '@zerodep/is-float';
// or
const { isFloat } = require('@zerodep/is-float');
```

### Positive Response

```javascript
isFloat(3.14); // true
isFloat(new Number(98.6)); // true
```

### Negative Response

```javascript
isFloat(Infinity); // false - CAUTION
isFloat(Number.isNan); // false - CAUTION

isFloat(['a', 'b', 'c']); // false
isFloat(1000n); // false
isFloat(true); // false
isFloat(new Date()); // false
isFloat(''); // false
isFloat(new Error('message')); // false
isFloat(() => 'function'); // false
isFloat(42); // false
isFloat(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isFloat(null); // false
isFloat({ an: 'object' }); // false
isFloat(new Promise(() => {})); // false
isFloat(/[regex]+/gi); // false
isFloat(new Set([1, 2, 3])); // false
isFloat('a string'); // false
isFloat(Symbol()); // false
isFloat(new Int32Array(2)); // false
isFloat(undefined); // false
```
