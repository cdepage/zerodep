# @zerodep/is-number

[![version](https://img.shields.io/npm/v/@zerodep/is-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a finite number.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/number) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isNumber } from '@zerodep/is-number';
// or
const { isNumber } = require('@zerodep/is-number');
```

### Positive Response

```javascript
isNumber(3.14); // true
isNumber(42); // true
```

### Negative Response

```javascript
isNumber(Infinity); // false - CAUTION
isNumber(Number.isNan); // false - CAUTION

isNumber(['a', 'b', 'c']); // false
isNumber(1000n); // false
isNumber(true); // false
isNumber(new Date()); // false
isNumber(''); // false
isNumber(new Error('message')); // false
isNumber(() => 'function'); // false
isNumber(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNumber(null); // false
isNumber({ an: 'object' }); // false
isNumber(new Promise(() => {})); // false
isNumber(/[regex]+/gi); // false
isNumber(new Set([1, 2, 3])); // false
isNumber('a string'); // false
isNumber(Symbol()); // false
isNumber(new Int32Array(2)); // false
isNumber(undefined); // false
```
