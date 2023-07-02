# @zerodep/guard-object

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-object)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-object)
[![version](https://img.shields.io/npm/v/@zerodep/guard-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be an object; it will throw a `ZeroDepError` if the guard fails.

Full documentation is available at the [zerodep.app](http://zerodep.app/guard/object) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardObject } from '@zerodep/guard-object';
// or
const { guardObject } = require('@zerodep/guard-object');
```

### Successful Cases

```javascript
guardObject({ an: 'object' }); // void
```

### Unsuccessful Cases

```javascript
guardObject([]); // throws ZeroDepError: Value is not an object
guardObject(['a', 'b', 'c']); // throws ZeroDepError: Value is not an object
guardObject(1000n); // throws ZeroDepError: Value is not an object
guardObject(true); // throws ZeroDepError: Value is not an object
guardObject(new Date()); // throws ZeroDepError: Value is not an object
guardObject(''); // throws ZeroDepError: Value is not an object
guardObject(new Error('message')); // throws ZeroDepError: Value is not an object
guardObject(3.14); // throws ZeroDepError: Value is not an object
guardObject(() => 'function'); // throws ZeroDepError: Value is not an object
guardObject(42); // throws ZeroDepError: Value is not an object
guardObject(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an object
guardObject(null); // throws ZeroDepError: Value is not an object
guardObject(new Promise(() => {})); // throws ZeroDepError: Value is not an object
guardObject(/[regex]+/gi); // throws ZeroDepError: Value is not an object
guardObject(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an object
guardObject('a string'); // throws ZeroDepError: Value is not an object
guardObject(Symbol()); // throws ZeroDepError: Value is not an object
guardObject(new Int32Array(2)); // throws ZeroDepError: Value is not an object
guardObject(undefined); // throws ZeroDepError: Value is not an object
```
