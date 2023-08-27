# guardFloat()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-float)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-float)
[![version](https://img.shields.io/npm/v/@zerodep/guard-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardFloat: (value: any) => void;
```

The `guardFloat` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardFloat(3.14); // void
```

### Unsuccessful Cases

```javascript
guardFloat([]); // throws ZeroDepError: Value is not a float
guardFloat(['a', 'b', 'c']); // throws ZeroDepError: Value is not a float
guardFloat(1000n); // throws ZeroDepError: Value is not a float
guardFloat(true); // throws ZeroDepError: Value is not a float
guardFloat(new Date()); // throws ZeroDepError: Value is not a float
guardFloat(''); // throws ZeroDepError: Value is not a float
guardFloat(new Error('message')); // throws ZeroDepError: Value is not a float
guardFloat(() => 'function'); // throws ZeroDepError: Value is not a float
guardFloat(42); // throws ZeroDepError: Value is not a float
guardFloat(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a float
guardFloat(null); // throws ZeroDepError: Value is not a float
guardFloat({ an: 'object' }); // throws ZeroDepError: Value is not a float
guardFloat(new Promise(() => {})); // throws ZeroDepError: Value is not a float
guardFloat(/[regex]+/gi); // throws ZeroDepError: Value is not a float
guardFloat(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a float
guardFloat('a string'); // throws ZeroDepError: Value is not a float
guardFloat(Symbol()); // throws ZeroDepError: Value is not a float
guardFloat(new Int32Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(undefined); // throws ZeroDepError: Value is not a float
```

## Advanced Use

The guard may optionally be configured, via the `guardFloatHOF` function, with additional range checks.

### Signature

```typescript
const guardFloatHOF: (options: GuardFloatOptions) => (value: any) => void;

interface GuardFloatOptions {
  min?: number;
  max?: number;
}
```

### Configuration Options

The `guardFloatHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

**Min & Max Values**

```typescript
import { guardFloatHOF, GuardFloatOptions } from '@zerodep/guard-float';

const config: GuardFloatOptions = {
  minQuantity: 37,
  maxQuantity: 98.6,
};

const customFloatGuard = guardFloatHOF(config);

customFloatGuard(32.1); // throws ZeroDepError: Float is less than 37
customFloatGuard(55); // void
customFloatGuard(103.8); // throws ZeroDepError: Float is greater than 98.6
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-float
```

then

```javascript
import { guardFloat } from '@zerodep/app';
// or
import { guardFloat } from '@zerodep/utilities';
// or
import { guardFloat } from '@zerodep/guard';
// or
import { guardFloat } from '@zerodep/guard-float';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.float` package to `@zerodep/guard-float` for consistency across @zerodep ecosystem
