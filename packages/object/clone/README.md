# @zerodep/object-clone

[![version](https://img.shields.io/npm/v/@zerodep/object-clone?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/object-clone)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a clone.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/object/clone) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { is/clone } from '@zerodep/object-clone';
// or
const { is/clone } = require('@zerodep/object-clone');
```

### Positive Response

```javascript
import { is/clone } from '@zerodep/app';

is/clone(clone()); // true
```

### Negative Response

```javascript
is / clone(['a', 'b', 'c']); // false
is / clone(1000n); // false
is / clone(true); // false
is / clone(new Date()); // false
is / clone(''); // false
is / clone(new Error('message')); // false
is / clone(3.14); // false
is / clone(() => 'function'); // false
is / clone(42); // false
is /
  clone(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  ); // false
is / clone(null); // false
is / clone({ an: 'object' }); // false
is / clone(new Promise(() => {})); // false
is / clone(/[regex]+/gi); // false
is / clone(new Set([1, 2, 3])); // false
is / clone('a string'); // false
is / clone(new Int32Array(2)); // false
is / clone(undefined); // false
```
