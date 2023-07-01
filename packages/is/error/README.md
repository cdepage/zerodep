# @zerodep/is-eError

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![version](https://img.shields.io/npm/v/@zerodep/is-error?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an Error.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/error) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isError } from '@zerodep/is-error';
// or
const { isError } = require('@zerodep/is-error');
```

### Positive Response

```javascript
isError(new Error('message')); // true
```

### Negative Response

```javascript
isError(['a', 'b', 'c']); // false
isError(1000n); // false
isError(true); // false
isError(new Date()); // false
isError(''); // false
isError(3.14); // false
isError(() => 'function'); // false
isError(42); // false
isError(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isError(null); // false
isError({ an: 'object' }); // false
isError(new Promise(() => {})); // false
isError(/[regex]+/gi); // false
isError(new Set([1, 2, 3])); // false
isError('a string'); // false
isError(Symbol()); // false
isError(new Int32Array(2)); // false
isError(undefined); // false
```
