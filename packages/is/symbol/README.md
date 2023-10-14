# @zerodep/is-symbol

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-symbol?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-symbol)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-symbol?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-symbol)
[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Symbol.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/symbol) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isSymbol } from '@zerodep/is-symbol';
// or
const { isSymbol } = require('@zerodep/is-symbol');
```

### Positive Response

```javascript
import { isSymbol } from '@zerodep/app';

isSymbol(Symbol()); // true
```

### Negative Response

```javascript
isSymbol(['a', 'b', 'c']); // false
isSymbol(1000n); // false
isSymbol(true); // false
isSymbol(new Date()); // false
isSymbol(''); // false
isSymbol(new Error('message')); // false
isSymbol(3.14); // false
isSymbol(() => 'function'); // false
isSymbol(42); // false
isSymbol(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isSymbol(null); // false
isSymbol({ an: 'object' }); // false
isSymbol(new Promise(() => {})); // false
isSymbol(/[regex]+/gi); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol('a string'); // false
isSymbol(new Int32Array(2)); // false
isSymbol(undefined); // false
```
