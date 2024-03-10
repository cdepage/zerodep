# @zerodep/guard-pojo

[![version](https://img.shields.io/npm/v/@zerodep/guard-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be a POJO (plain old javascript object); it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/guard/pojo) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardPojo } from '@zerodep/guard-pojo';
// or
const { guardPojo } = require('@zerodep/guard-pojo');
```

### Successful Cases

```javascript
guardPojo({ an: 'object' }); // void
```

### Unsuccessful Cases

```javascript
guardPojo([]); // throws ZeroDepError: Value is not a JSON object
guardPojo(['a', 'b', 'c']); // throws ZeroDepError: Value is not a JSON object
guardPojo(1000n); // throws ZeroDepError: Value is not a JSON object
guardPojo(true); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Date()); // throws ZeroDepError: Value is not a JSON object
guardPojo(''); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Error('message')); // throws ZeroDepError: Value is not a JSON object
guardPojo(3.14); // throws ZeroDepError: Value is not a JSON object
guardPojo(() => 'function'); // throws ZeroDepError: Value is not a JSON object
guardPojo(42); // throws ZeroDepError: Value is not a JSON object
guardPojo(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a JSON object
guardPojo(null); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Promise(() => {})); // throws ZeroDepError: Value is not a JSON object
guardPojo(/[regex]+/gi); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a JSON object
guardPojo('a string'); // throws ZeroDepError: Value is not a JSON object
guardPojo(Symbol()); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Int32Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(undefined); // throws ZeroDepError: Value is not a JSON object
```
