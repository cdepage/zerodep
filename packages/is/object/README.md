# @zerodep/is-object

[![version](https://img.shields.io/npm/v/@zerodep/is-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a non-null object.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/object) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isObject } from '@zerodep/is-object';
// or
const { isObject } = require('@zerodep/is-object');
```

### Positive Response

```javascript
isObject({ an: 'object' }); // true
```

### Negative Response

```javascript
isObject(null); // false - CAUTION

isObject(['a', 'b', 'c']); // false
isObject(1000n); // false
isObject(true); // false
isObject(new Date()); // false
isObject(''); // false
isObject(new Error('message')); // false
isObject(3.14); // false
isObject(() => 'function'); // false
isObject(42); // false
isObject(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isObject(new Promise(() => {})); // false
isObject(/[regex]+/gi); // false
isObject(new Set([1, 2, 3])); // false
isObject('a string'); // false
isObject(Symbol()); // false
isObject(new Int32Array(2)); // false
isObject(undefined); // false
```
