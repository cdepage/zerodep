# @zerodep/is-empty

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-empty?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-empty)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-empty?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-empty)
[![version](https://img.shields.io/npm/v/@zerodep/is-empty?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, string, object, Map, Set, WeakMap or WeakSet.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/empty) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isEmpty } from '@zerodep/is-empty';
// or
const { isEmpty } = require('@zerodep/is-empty');
```

### Positive Response

```javascript
isEmpty([]); // true
isEmpty(''); // true
isEmpty(null); // true
isEmpty({}); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty(new WeakMap()); // true
isEmpty(new WeakSet()); // true
isEmpty(undefined); // true
```

### Negative Response

```javascript
isEmpty(['a', 'b', 'c']); // false
isEmpty(1000n); // false
isEmpty(true); // false
isEmpty(new Date()); // false
isEmpty(new Error('message')); // false
isEmpty(3.14); // false
isEmpty(() => 'function'); // false
isEmpty(42); // false
isEmpty(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isEmpty({ an: 'object' }); // false
isEmpty(new Promise(() => {})); // false
isEmpty(/[regex]+/gi); // false
isEmpty(new Set([1, 2, 3])); // false
isEmpty('a string'); // false
isEmpty(Symbol()); // false
isEmpty(new Int32Array(2)); // false
```
