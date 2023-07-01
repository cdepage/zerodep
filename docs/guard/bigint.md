# guardBigInt()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-bigint?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-bigint)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-bigint?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-bigint)
[![version](https://img.shields.io/npm/v/@zerodep/guard-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-bigint)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a BigInt; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardBigInt: (value: any) => void;
```

The `guardBigInt` function has the following parameters:

- **value** - the value to guard

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardBigInt } from '@zerodep/guard-bigint';
// or
const { guardBigInt } = require('@zerodep/guard-bigint');
```

### Successful Cases

```javascript
guardBigInt(1000n); // void
```

### Unsuccessful Cases

```javascript
guardBigInt([]); // throws ZeroDepError: Value is not a BigInt
guardBigInt(['a', 'b', 'c']); // throws ZeroDepError: Value is not a BigInt
guardBigInt(true); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Date()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(''); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Error('message')); // throws ZeroDepError: Value is not a BigInt
guardBigInt(3.14); // throws ZeroDepError: Value is not a BigInt
guardBigInt(() => 'function'); // throws ZeroDepError: Value is not a BigInt
guardBigInt(42); // throws ZeroDepError: Value is not a BigInt
guardBigInt(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a BigInt
guardBigInt(null); // throws ZeroDepError: Value is not a BigInt
guardBigInt({ an: 'object' }); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Promise(() => {})); // throws ZeroDepError: Value is not a BigInt
guardBigInt(/[regex]+/gi); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a BigInt
guardBigInt('a string'); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Symbol()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Int32Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(undefined); // throws ZeroDepError: Value is not a BigInt
```

## Advanced Use

The guard may optionally be configured, via the `guardBigIntHOF` function, with run-time range checks.

### Signature

```typescript
const guardBigIntHOF: (options: GuardBigIntOptions) => (value: any) => void;

interface GuardBigIntOptions {
  min?: BigInt;
  max?: BigInt;
}
```

#### Configuration Options

The `GuardBigIntOptions` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

**Examples**

All @zerodep packages support both ESM and CJS.

```javascript
import { guardBigIntHOF, GuardBigIntOptions } from '@zerodep/guard-bigint';
// or
const { guardBigIntHOF, GuardBigIntOptions } = require('@zerodep/guard-bigint');
```

**Min & Max Values**

```typescript
// with min & max quantity
const config1: GuardBigIntOptions = {
  min: 1000n,
  max: 5000n,
};
const customBigIntGuard1 = guardBigIntHOF(config1);

customBigIntGuard1(50n); // throws ZeroDepError: BigInt is less than 1000
customBigIntGuard1(5000n); // void
customBigIntGuard1(250000n); // throws ZeroDepError: BigInt is greater than 9999
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages- largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep guard functions - small file size
import { guardBigInt } from '@zerodep/guards';

# only this @zerodep function - tiny file size
import { guardBigInt } from '@zerodep/guard-bigint';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.bigint` package to `@zerodep/guard-bigint` for consistency across @zerodep ecosystem
