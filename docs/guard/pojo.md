# guardPojo()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-pojo)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-pojo?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-pojo)
[![version](https://img.shields.io/npm/v/@zerodep/guard-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-pojo)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a POJO (plain old javascript object); it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardPojo: (value: any) => void;
```

The `guardPojo` function has the following parameters:

- **value** - the value to guard

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

## Advanced Use

The guard may optionally be configured, via the `guardPojoHOF` function, with additional run-time checks.

### Signature

```typescript
const guardPojoHOF: (options: GuardPojoOptions) => (value: any) => void;

interface GuardPojoOptions {
  minQuantity?: number;
  maxQuantity?: number;
}
```

#### Configuration Options

The `guardPojoHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of properties in the object
- **maxQuantity** - the maximum number of properties in the object

### Advanced Examples

**Min & Max Quantity**

```typescript
import { guardPojoHOF, GuardPojoOptions } from '@zerodep/guard-pojo';

const config: guardPojoOptions = {
  minQuantity: 2,
  maxQuantity: 3,
};

const customPojoGuard = guardPojoHOF(config);

const sampleObject1: Record<string, any> = {};
const sampleObject2: Record<string, any> = { a: 1, b: 2 };
const sampleObject3: Record<string, any> = { a: 1, b: 2, c: 3, d: 4, e: 5 };

customPojoGuard(sampleObject1); // throws ZeroDepError: JSON object has fewer than 2 items
customPojoGuard(sampleObject2); // void
customPojoGuard(sampleObject3); // throws ZeroDepError: JSON object has more than 3 items
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages- largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep guard functions - small file size
import { guardPojo } from '@zerodep/guards';

# only this @zerodep function - tiny file size
import { guardPojo } from '@zerodep/guard-pojo';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.pojo` package to `@zerodep/guard-pojo` for consistency across @zerodep ecosystem
