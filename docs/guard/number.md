# guardNumber()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-number)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-number)
[![version](https://img.shields.io/npm/v/@zerodep/guard-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a number; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardNumber: (value: any) => void;
```

The `guardNumber` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardNumber(3.14); // void
guardNumber(42); // void
```

### Unsuccessful Cases

```javascript
guardNumber([]); // throws ZeroDepError: Value is not a number
guardNumber(['a', 'b', 'c']); // throws ZeroDepError: Value is not a number
guardNumber(1000n); // throws ZeroDepError: Value is not a number
guardNumber(true); // throws ZeroDepError: Value is not a number
guardNumber(new Date()); // throws ZeroDepError: Value is not a number
guardNumber(''); // throws ZeroDepError: Value is not a number
guardNumber(new Error('message')); // throws ZeroDepError: Value is not a number
guardNumber(() => 'function'); // throws ZeroDepError: Value is not a number
guardNumber(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a number
guardNumber(null); // throws ZeroDepError: Value is not a number
guardNumber({ an: 'object' }); // throws ZeroDepError: Value is not a number
guardNumber(new Promise(() => {})); // throws ZeroDepError: Value is not a number
guardNumber(/[regex]+/gi); // throws ZeroDepError: Value is not a number
guardNumber(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a number
guardNumber('a string'); // throws ZeroDepError: Value is not a number
guardNumber(Symbol()); // throws ZeroDepError: Value is not a number
guardNumber(new Int32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(undefined); // throws ZeroDepError: Value is not a number
```

## Advanced Use

The guard may optionally be configured, via the `guardNumberHOF` function, with additional checks.

### Signature

```typescript
const guardNumberHOF: (options: GuardNumberOptions) => (value: any) => void;

interface GuardNumberOptions {
  min?: number;
  max?: number;
}
```

#### Configuration Options

The `guardNumberHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

**Min & Max Values**

```typescript
import { guardNumberHOF, GuardNumberOptions } from '@zerodep/guard-number';

const config: GuardNumberOptions = {
  minQuantity: 1,
  maxQuantity: 5,
};

const customNumberGuard = guardNumberHOF(config);

customNumberGuard(-18); // throws ZeroDepError: Number is less than 1
customNumberGuard(3); // void
customNumberGuard(11); // throws ZeroDepError: Number is greater than 5
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages- largest file size
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-number
```

then

```javascript
import { guardNumber } from '@zerodep/app';
// or
import { guardNumber } from '@zerodep/utilities';
// or
import { guardNumber } from '@zerodep/guard';
// or
import { guardNumber } from '@zerodep/guard-number';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.number` package to `@zerodep/guard-number` for consistency across @zerodep ecosystem
