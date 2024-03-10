# guardArray()

[![version](https://img.shields.io/npm/v/@zerodep/guard-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be an array; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardArray: (value: any) => void;
```

The `guardArray` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardArray([]); // void
guardArray(['a', 'b', 'c']); // void
```

### Unsuccessful Cases

```javascript
guardArray(1000n); // throws ZeroDepError: Value is not an array
guardArray(true); // throws ZeroDepError: Value is not an array
guardArray(new Date()); // throws ZeroDepError: Value is not an array
guardArray(''); // throws ZeroDepError: Value is not an array
guardArray(new Error('message')); // throws ZeroDepError: Value is not an array
guardArray(3.14); // throws ZeroDepError: Value is not an array
guardArray(() => 'function'); // throws ZeroDepError: Value is not an array
guardArray(42); // throws ZeroDepError: Value is not an array
guardArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an array
guardArray(null); // throws ZeroDepError: Value is not an array
guardArray({ an: 'object' }); // throws ZeroDepError: Value is not an array
guardArray(new Promise(() => {})); // throws ZeroDepError: Value is not an array
guardArray(/[regex]+/gi); // throws ZeroDepError: Value is not an array
guardArray(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an array
guardArray('a string'); // throws ZeroDepError: Value is not an array
guardArray(Symbol()); // throws ZeroDepError: Value is not an array
guardArray(new Int32Array(2)); // throws ZeroDepError: Value is not an array
guardArray(undefined); // throws ZeroDepError: Value is not an array
```

## Advanced Use

The guard may optionally be configured, via the `guardArrayHOF` function, with additional run-time checks.

### Signature

```typescript
const guardArrayHOF: (options: GuardArrayOptions) => (value: any) => void;

interface GuardArrayOptions {
  minQuantity?: number;
  maxQuantity?: number;
  typeFn?: (value: any) => boolean;
}
```

#### Configuration Options

The `guardArrayHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of array elements that must be present
- **maxQuantity** - the maximum number of array elements that must be present
- **typeFn** - the function with which to validate the array values

### Advanced Examples

**Min & Max Array Length**

```typescript
import { guardArrayHOF, GuardArrayOptions } from '@zerodep/guard-array';

const config: GuardArrayOptions = {
  minQuantity: 1,
  maxQuantity: 5,
};
const customArrayGuard = guardArrayHOF(config);

const sampleArray1: any[] = [];
const sampleArray2: number[] = [1, 2, 3, 4];
const sampleArray3: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

customArrayGuard(sampleArray1); // throws ZeroDepError: Array has fewer than 1 items
customArrayGuard(sampleArray2); // void
customArrayGuard(sampleArray3); // throws ZeroDepError: Array has more than 5 items
```

**Array Value Checking**

```typescript
import { guardArrayHOF, GuardArrayOptions } from '@zerodep/guard-array';
import { isInteger } from '@zerodep/is-integer'; // function for type-checking

const config: GuardArrayOptions = {
  typeFn: isInteger,
};
const customArrayGuard = guardArrayHOF(config);

const sampleArray4: number[] = [1, 2, 'c'];
const sampleArray5: number[] = [0, -0];

customArrayGuard(sampleArray4); // throws ZeroDepError: An array item is of the incorrect type
customArrayGuard(sampleArray5); // void
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
npm i @zerodep/guard-array
```

then

```javascript
import { guardArray } from '@zerodep/app';
// or
import { guardArray } from '@zerodep/utilities';
// or
import { guardArray } from '@zerodep/guard';
// or
import { guardArray } from '@zerodep/guard-array';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.array` package to `@zerodep/guard-array` for consistency across @zerodep ecosystem
