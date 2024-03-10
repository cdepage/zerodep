# @zerodep/is-weakset

[![version](https://img.shields.io/npm/v/@zerodep/is-weakset?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakset)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a Weak Set.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/weakset) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isWeakSet } from '@zerodep/is-weakset';
// or
const { isWeakSet } = require('@zerodep/is-weakset');
```

### Positive Response

```javascript
// prepare a weak map
const ws = new WeakSet();
const obj = {};
ws.add(obj);

isWeakSet(ws); // true
```

### Negative Response

```javascript
isWeakSet(['a', 'b', 'c']); // false
isWeakSet(1000n); // false
isWeakSet(true); // false
isWeakSet(new Date()); // false
isWeakSet(''); // false
isWeakSet(new Error('message')); // false
isWeakSet(3.14); // false
isWeakSet(() => 'function'); // false
isWeakSet(42); // false
isWeakSet(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isWeakSet(null); // false
isWeakSet({ an: 'object' }); // false
isWeakSet(new Promise(() => {})); // false
isWeakSet(/[regex]+/gi); // false
isWeakSet(new Set([1, 2, 3])); // false
isWeakSet('a string'); // false
isWeakSet(Symbol()); // false
isWeakSet(new Int32Array(2)); // false
isWeakSet(undefined); // false
```
