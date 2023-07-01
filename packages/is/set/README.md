# @zerodep/is-set

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-set?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-set)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-set?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-set)
[![version](https://img.shields.io/npm/v/@zerodep/is-set?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-set)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Set.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/set) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isSet } from '@zerodep/is-set';
// or
const { isSet } = require('@zerodep/is-set');
```

### Positive Response

```javascript
isSet(new Set()); // true
isSet(new Set([1, 2, 3])); // true
```

### Negative Response

```javascript
isSet(['a', 'b', 'c']); // false
isSet(1000n); // false
isSet(true); // false
isSet(new Date()); // false
isSet(''); // false
isSet(new Error('message')); // false
isSet(3.14); // false
isSet(() => 'function'); // false
isSet(42); // false
isSet(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isSet(null); // false
isSet({ an: 'object' }); // false
isSet(new Promise(() => {})); // false
isSet(/[regex]+/gi); // false
isSet('a string'); // false
isSet(Symbol()); // false
isSet(new Int32Array(2)); // false
isSet(undefined); // false
```
