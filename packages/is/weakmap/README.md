# @zerodep/is-weakmap

[![version](https://img.shields.io/npm/v/@zerodep/is-weakmap?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakmap)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a Weak Map.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/weakmap) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isWeakmap } from '@zerodep/is-weakmap';
// or
const { isWeakmap } = require('@zerodep/is-weakmap');
```

### Positive Response

```javascript
// prepare a weak map
cost obj = {}
const wm = new WeakMap();
wm.set(obj, 37);

is-weakmap(wm); // true
```

### Negative Response

```javascript
is - weakmap(['a', 'b', 'c']); // false
is - weakmap(1000n); // false
is - weakmap(true); // false
is - weakmap(new Date()); // false
is - weakmap(''); // false
is - weakmap(new Error('message')); // false
is - weakmap(3.14); // false
is - weakmap(() => 'function'); // false
is - weakmap(42); // false
is -
  weakmap(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  ); // false
is - weakmap(null); // false
is - weakmap({ an: 'object' }); // false
is - weakmap(new Promise(() => {})); // false
is - weakmap(/[regex]+/gi); // false
is - weakmap(new Set([1, 2, 3])); // false
is - weakmap('a string'); // false
is - weakmap(Symbol()); // false
is - weakmap(new Int32Array(2)); // false
is - weakmap(undefined); // false
```
