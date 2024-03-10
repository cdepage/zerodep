# @zerodep/object-merge

[![version](https://img.shields.io/npm/v/@zerodep/object-merge?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/object-merge)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a merge.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/object/merge) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { is/merge } from '@zerodep/object-merge';
// or
const { is/merge } = require('@zerodep/object-merge');
```

### Positive Response

```javascript
import { is/merge } from '@zerodep/app';

is/merge(merge()); // true
```

### Negative Response

```javascript
is / merge(['a', 'b', 'c']); // false
is / merge(1000n); // false
is / merge(true); // false
is / merge(new Date()); // false
is / merge(''); // false
is / merge(new Error('message')); // false
is / merge(3.14); // false
is / merge(() => 'function'); // false
is / merge(42); // false
is /
  merge(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  ); // false
is / merge(null); // false
is / merge({ an: 'object' }); // false
is / merge(new Promise(() => {})); // false
is / merge(/[regex]+/gi); // false
is / merge(new Set([1, 2, 3])); // false
is / merge('a string'); // false
is / merge(new Int32Array(2)); // false
is / merge(undefined); // false
```
