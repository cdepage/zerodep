# @zerodep/is-regex

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-regex?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-regex)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-regex?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-regex)
[![version](https://img.shields.io/npm/v/@zerodep/is-regex?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-regex)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a regular expression.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/regex) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isRegex } from '@zerodep/is-regex';
// or
const { isRegex } = require('@zerodep/is-regex');
```

### Positive Response

```javascript
isRegex(/[regex]+/gi); // true
isRegex(new RegExp('$[a-c]{2}]', 'gi')); // true
```

### Negative Response

```javascript
isRegex(['a', 'b', 'c']); // false
isRegex(1000n); // false
isRegex(true); // false
isRegex(new Date()); // false
isRegex(''); // false
isRegex(new Error('message')); // false
isRegex(3.14); // false
isRegex(() => 'function'); // false
isRegex(42); // false
isRegex(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isRegex(null); // false
isRegex({ an: 'object' }); // false
isRegex(new Promise(() => {})); // false
isRegex(new Set([1, 2, 3])); // false
isRegex('a string'); // false
isRegex(Symbol()); // false
isRegex(new Int32Array(2)); // false
isRegex(undefined); // false
```
