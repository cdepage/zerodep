# @zerodep/is-string

[![version](https://img.shields.io/npm/v/@zerodep/is-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isString } from '@zerodep/is-string';
// or
const { isString } = require('@zerodep/is-string');
```

### Positive Response

```javascript
import { isString } from '@zerodep/app';

isString(''); // true
isString('a string'); // true
isString(new String('a string')); // true
```

### Negative Response

```javascript
isString(['a', 'b', 'c']); // false
isString(1000n); // false
isString(true); // false
isString(new Date()); // false
isString(new Error('message')); // false
isString(3.14); // false
isString(() => 'function'); // false
isString(42); // false
isString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isString(null); // false
isString({ an: 'object' }); // false
isString(new Promise(() => {})); // false
isString(/[regex]+/gi); // false
isString(new Set([1, 2, 3])); // false
isString(Symbol()); // false
isString(new Int32Array(2)); // false
isString(undefined); // false
```
