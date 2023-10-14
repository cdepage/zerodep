# @zerodep/is-map

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-map?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-map)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-map?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-map)
[![version](https://img.shields.io/npm/v/@zerodep/is-map?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-map)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Map.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/map) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isMap } from '@zerodep/is-map';
// or
const { isMap } = require('@zerodep/is-map');
```

### Positive Response

```javascript
isMap(new Map()); // true
isMap(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // true
```

### Negative Response

```javascript
isMap(['a', 'b', 'c']); // false
isMap(1000n); // false
isMap(true); // false
isMap(new Date()); // false
isMap(''); // false
isMap(new Error('message')); // false
isMap(3.14); // false
isMap(() => 'function'); // false
isMap(42); // false
isMap(null); // false
isMap({ an: 'object' }); // false
isMap(new Promise(() => {})); // false
isMap(/[regex]+/gi); // false
isMap(new Set([1, 2, 3])); // false
isMap('a string'); // false
isMap(Symbol()); // false
isMap(new Int32Array(2)); // false
isMap(undefined); // false
```
