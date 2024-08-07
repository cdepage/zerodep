# guardInteger()

[![version](https://img.shields.io/npm/v/@zerodep/guard-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be an integer; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardInteger: (value: any) => void;
```

The `guardInteger` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardInteger(42); // void
```

### Unsuccessful Cases

```javascript
guardInteger([]); // throws ZeroDepError: Value is not an integer
guardInteger(['a', 'b', 'c']); // throws ZeroDepError: Value is not an integer
guardInteger(1000n); // throws ZeroDepError: Value is not an integer
guardInteger(true); // throws ZeroDepError: Value is not an integer
guardInteger(new Date()); // throws ZeroDepError: Value is not an integer
guardInteger(''); // throws ZeroDepError: Value is not an integer
guardInteger(new Error('message')); // throws ZeroDepError: Value is not an integer
guardInteger(3.14); // throws ZeroDepError: Value is not an integer
guardInteger(() => 'function'); // throws ZeroDepError: Value is not an integer
guardInteger(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not an integer
guardInteger(null); // throws ZeroDepError: Value is not an integer
guardInteger({ an: 'object' }); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise(() => {})); // throws ZeroDepError: Value is not an integer
guardInteger(/[regex]+/gi); // throws ZeroDepError: Value is not an integer
guardInteger(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an integer
guardInteger('a string'); // throws ZeroDepError: Value is not an integer
guardInteger(Symbol()); // throws ZeroDepError: Value is not an integer
guardInteger(new Int32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(undefined); // throws ZeroDepError: Value is not an integer
```

## Advanced Use

The guard may optionally be configured, via the `guardIntegerHOF` function, with additional range checks.

### Signature

```typescript
const guardIntegerHOF: (options: GuardIntegerOptions) => (value: any) => void;

interface GuardIntegerOptions {
  min?: number;
  max?: number;
}
```

#### Configuration Options

The `guardIntegerHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

**Min & Max Values**

```typescript
import { guardIntegerHOF, GuardIntegerOptions } from '@zerodep/guard-integer';

const config: GuardIntegerOptions = {
  minQuantity: 50,
  maxQuantity: 100,
};

const customIntegerGuard = guardIntegerHOF(config);

customIntegerGuard(29); // throws ZeroDepError: Integer is less than 50
customIntegerGuard(73); // void
customIntegerGuard(101); // throws ZeroDepError: Integer is greater than 100
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
npm i @zerodep/guard-integer
```

then

```javascript
import { guardInteger } from '@zerodep/app';
// or
import { guardInteger } from '@zerodep/utilities';
// or
import { guardInteger } from '@zerodep/guard';
// or
import { guardInteger } from '@zerodep/guard-integer';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.integer` package to `@zerodep/guard-integer` for consistency across @zerodep ecosystem
