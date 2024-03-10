# guardPojo()

[![version](https://img.shields.io/npm/v/@zerodep/guard-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A run-time guard to require a value to be a POJO (plain old javascript object); it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardPojo: (value: any) => void;
```

The `guardPojo` function has the following parameters:

- **value** - the value to guard

## Examples

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-pojo
```

then

```javascript
import { guardPojo } from '@zerodep/app';
// or
import { guardPojo } from '@zerodep/utilities';
// or
import { guardPojo } from '@zerodep/guard';
// or
import { guardPojo } from '@zerodep/guard-pojo';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.pojo` package to `@zerodep/guard-pojo` for consistency across @zerodep ecosystem
