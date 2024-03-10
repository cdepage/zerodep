# @zerodep/is-pojo

[![version](https://img.shields.io/npm/v/@zerodep/is-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a Plain Old Javascript Object (POJO) that is serializable.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/pojo) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isPojo } from '@zerodep/is-pojo';
// or
const { isPojo } = require('@zerodep/is-pojo');
```

### Positive Response

```javascript
isPojo([]); // true
isPojo(['a', 1, true]); // true
isPojo({}); // true
isPojo({ a: 'string', b: 2, c: false }); // true
```

### Negative Response

```javascript
isPojo(null); // false - CAUTION
isPojo({ aMap: new Map() }); // false - CAUTION
isPojo({ aSet: new Set() }); // false - CAUTION

isPojo(1000n); // false
isPojo(true); // false
isPojo(new Date()); // false
isPojo(''); // false
isPojo(new Error('message')); // false
isPojo(3.14); // false
isPojo(() => 'function'); // false
isPojo(42); // false
isPojo(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isPojo(null); // false
isPojo(new Promise(() => {})); // false
isPojo(/[regex]+/gi); // false
isPojo(new Set([1, 2, 3])); // false
isPojo('a string'); // false
isPojo(Symbol()); // false
isPojo(new Int32Array(2)); // false
isPojo(undefined); // false
```
