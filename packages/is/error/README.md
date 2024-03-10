# @zerodep/is-Error

[![version](https://img.shields.io/npm/v/@zerodep/is-error?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to determine if a value is an Error or specific instance/subclass of an Error type.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/error) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isError } from '@zerodep/is-error';
// or
const { isError } = require('@zerodep/is-error');
```

### Positive Response

```javascript
isError(new Error('message')); // true

isError(new Error()); // true

// using custom error subclasses
class MyError extends Error {}
isError(new MyError('message'), Error); // true
isError(new MyError('message'), MyError); // true
```

### Negative Special Cases

```javascript
// force error message to be a number (or any non-string value)
const err1 = new Error();
err1.message = 123;
isError(err1); // false

// force error message to be null
const err2 = new Error();
err2.message = null; // force error message to be null
isError(err2); // false

// force error message to be undefined
const err3 = new Error();
err23message = undefined;
isError(err3); // false

// using error subclasses
isError(new SyntaxError('message'), RangeError); // false

// using custom error subclasses
class ErrorA extends Error {}
class ErrorB extends Error {}
isError(new ErrorA('message'), ErrorB); // false
```

### Negative Response

```javascript
isError(['a', 'b', 'c']); // false
isError(1000n); // false
isError(true); // false
isError(new Date()); // false
isError(''); // false
isError(3.14); // false
isError(() => 'function'); // false
isError(42); // false
isError(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isError(null); // false
isError({ an: 'object' }); // false
isError(new Promise(() => {})); // false
isError(/[regex]+/gi); // false
isError(new Set([1, 2, 3])); // false
isError('a string'); // false
isError(Symbol()); // false
isError(new Int32Array(2)); // false
isError(undefined); // false
```
