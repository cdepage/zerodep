# @zerodep/is-boolean

[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a boolean.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isBoolean } from '@zerodep/is-boolean';
// or
const { isBoolean } = require('@zerodep/is-boolean');
```

### Positive Response

```javascript
isBoolean(true); // true
isBoolean(false); // true
isBoolean(new Boolean(true)); // true
```

### Negative Response

```javascript
isBoolean(['a', 'b', 'c']); // false
isBoolean(1000n); // false
isBoolean(new Date()); // false
isBoolean(''); // false
isBoolean(new Error('message')); // false
isBoolean(3.14); // false
isBoolean(() => 'function'); // false
isBoolean(42); // false
isBoolean(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBoolean(null); // false
isBoolean({ an: 'object' }); // false
isBoolean(new Promise(() => {})); // false
isBoolean(/[regex]+/gi); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean('a string'); // false
isBoolean(Symbol()); // false
isBoolean(new Int32Array(2)); // false
isBoolean(undefined); // false
```
