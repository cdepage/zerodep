# isError()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![version](https://img.shields.io/npm/v/@zerodep/is-error?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to determine if a value is an Error or specific instance/subclass of an Error type.

## Signature

```typescript
const isError(maybeError: unknown, errorType?: any) => boolean;
```

### Function Parameters

The `isError` function has the following parameters:

- **maybeError** - the value to check
- **errorType** - [optional] error type/instance

## Examples

### Positive Simple Cases

```javascript
isError(new Error('message')); // true

isError(new Error()); // true
```

### Positive Cases with Error Type Checking

```javascript
// using native error types
isError(new Error('message'), Error); // true
isError(new SyntaxError('message'), Error); // true

// using custom error subclasses
class MyError extends Error {}
isError(new MyError('message'), Error); // true
isError(new MyError('message'), MyError); // true
```

### Negative Cases with Error Type Checking

```javascript
// using native error types
isError(new RangeError('message'), SyntaxError); // false

// using custom error subclasses
class ErrorA extends Error {}
class ErrorB extends Error {}
isError(new ErrorA('message'), ErrorB); // false
```

### Negative Special Cases

```javascript
// force error message to be a number (or any non-string value)
const err1 = new Error();
err1.message = 123;
isError(err1); // false

// force error message to be null
const err2 = new Error();
err2.message = null;
isError(err2); // false

// force error message to be undefined
const err3 = new Error();
err3.message = undefined;
isError(err3); // false
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

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# only this @zerodep package
npm i @zerodep/is-error
```

then

```javascript
import { isError } from '@zerodep/app';
// or
import { isError } from '@zerodep/utilities';
// or
import { isError } from '@zerodep/is';
// or
import { isError } from '@zerodep/is-error';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.1.0] - 2023-10-15

**Changed**

- added an optional error subclass/type check
- added a check to ensure the error's `message` property is a string (if it exists)

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.error` package to `@zerodep/is-error` for consistency across @zerodep ecosystem
