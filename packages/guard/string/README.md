# @zerodep/guard-string

[![version](https://img.shields.io/npm/v/@zerodep/guard-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be a string; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardString } from '@zerodep/guard-string';
// or
const { guardString } = require('@zerodep/guard-string');
```

### Successful Cases

```javascript
guardString(''); // void
guardString('a string'); // void
```

### Unsuccessful Cases

```javascript
guardString([]); // throws ZeroDepError: Value is not a string
guardString(['a', 'b', 'c']); // throws ZeroDepError: Value is not a string
guardString(1000n); // throws ZeroDepError: Value is not a string
guardString(true); // throws ZeroDepError: Value is not a string
guardString(new Date()); // throws ZeroDepError: Value is not a string
guardString(new Error('message')); // throws ZeroDepError: Value is not a string
guardString(3.14); // throws ZeroDepError: Value is not a string
guardString(() => 'function'); // throws ZeroDepError: Value is not a string
guardString(42); // throws ZeroDepError: Value is not a string
guardString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a string
guardString(null); // throws ZeroDepError: Value is not a string
guardString({ an: 'object' }); // throws ZeroDepError: Value is not a string
guardString(new Promise(() => {})); // throws ZeroDepError: Value is not a string
guardString(/[regex]+/gi); // throws ZeroDepError: Value is not a string
guardString(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a string
guardString(Symbol()); // throws ZeroDepError: Value is not a string
guardString(new Int32Array(2)); // throws ZeroDepError: Value is not a string
guardString(undefined); // throws ZeroDepError: Value is not a string
```
