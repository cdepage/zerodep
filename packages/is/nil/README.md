# @zerodep/is-nil

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-nil)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-nil)
[![version](https://img.shields.io/npm/v/@zerodep/is-nil?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-nil)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is `null` or `undefined`.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/nil) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isNil } from '@zerodep/is-nil';
// or
const { isNil } = require('@zerodep/is-nil');
```

### Positive Response

```javascript
isNil(null); // true
isNil(undefined); // true
```

### Negative Response

```javascript
isNil(''); // false - CAUTION

isNil(['a', 'b', 'c']); // false
isNil(1000n); // false
isNil(true); // false
isNil(new Date()); // false
isNil(new Error('message')); // false
isNil(3.14); // false
isNil(() => 'function'); // false
isNil(42); // false
isNil(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNil({ an: 'object' }); // false
isNil(new Promise(() => {})); // false
isNil(/[regex]+/gi); // false
isNil(new Set([1, 2, 3])); // false
isNil('a string'); // false
isNil(Symbol()); // false
isNil(new Int32Array(2)); // false
```
