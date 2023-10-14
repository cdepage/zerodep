# @zerodep/is-null

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-null?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-null)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-null?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-null)
[![version](https://img.shields.io/npm/v/@zerodep/is-null?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-null)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is `null`.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/null) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isNull } from '@zerodep/is-null';
// or
const { isNull } = require('@zerodep/is-null');
```

### Positive Response

```javascript
isNull(null); // true
```

### Negative Response

```javascript
isNull(['a', 'b', 'c']); // false
isNull(1000n); // false
isNull(true); // false
isNull(new Date()); // false
isNull(''); // false
isNull(new Error('message')); // false
isNull(3.14); // false
isNull(() => 'function'); // false
isNull(42); // false
isNull(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNull({ an: 'object' }); // false
isNull(new Promise(() => {})); // false
isNull(/[regex]+/gi); // false
isNull(new Set([1, 2, 3])); // false
isNull('a string'); // false
isNull(Symbol()); // false
isNull(new Int32Array(2)); // false
isNull(undefined); // false
```
