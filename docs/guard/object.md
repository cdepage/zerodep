# guardObject()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-object)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-object)
[![version](https://img.shields.io/npm/v/@zerodep/guard-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-object)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be an object; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardObject: (value: any) => void;
```

The `guardObject` function has the following parameters:

- **value** - the value to guard

## Examples

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

## Advanced Use

The guard may optionally be configured, via the `guardObjectHOF` function, with additional run-time quantity and value checks.

### Signature

```typescript
const guardObjectHOF: (options: GuardObjectOptions) => (value: any) => void;

interface GuardObjectOptions {
  minQuantity?: number;
  maxQuantity?: number;
}
```

#### Configuration Options

The `guardObjectHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of properties in the object
- **maxQuantity** - the maximum number of properties in the object

### Advanced Examples

**Min & Max Quantity**`

```typescript
import { guardObjectHOF, GuardObjectOptions } from '@zerodep/guard-object';

const config: GuardObjectOptions = {
  minQuantity: 2,
  maxQuantity: 5,
};

const customObjectGuard = guardObjectHOF(config);

const sampleObject1: Record<string, any> = {};
const sampleObject2: Record<string, any> = { a: 1, b: 2 };
const sampleObject3: Record<string, any> = { a: 1, b: 2, c: 3, d: 4, e: 5 };

customObjectGuard(sampleObject1); // throws ZeroDepError: Object has fewer than 2 items
customObjectGuard(sampleObject2); // void
customObjectGuard(sampleObject3); // throws ZeroDepError: Object has more than 5 items
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
npm i @zerodep/guard-object
```

then

```javascript
import { guardObject } from '@zerodep/app';
// or
import { guardObject } from '@zerodep/utilities';
// or
import { guardObject } from '@zerodep/guard';
// or
import { guardObject } from '@zerodep/guard-object';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.object` package to `@zerodep/guard-object` for consistency across @zerodep ecosystem
