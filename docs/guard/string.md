# guardString()

[![version](https://img.shields.io/npm/v/@zerodep/guard-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a string; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardString: (value: any) => void;
```

The `guardString` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardString(''); // void
guardString('a string'); // void
```

### Unsuccessful Cases

```javascript
guardString([]); // throws ZeroDepError: Value is not a string
guardString(['a', 'b', 'c']); // throws ZeroDepError: Value is not a string
guardString(1000n); // throws ZeroDepError: Value is not a string
guardString(true); // throws ZeroDepError: Value is not a string
guardString(new Date()); // throws ZeroDepError: Value is not a string
guardString(new Error('message')); // throws ZeroDepError: Value is not a string
guardString(3.14); // throws ZeroDepError: Value is not a string
guardString(() => 'function'); // throws ZeroDepError: Value is not a string
guardString(42); // throws ZeroDepError: Value is not a string
guardString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a string
guardString(null); // throws ZeroDepError: Value is not a string
guardString({ an: 'object' }); // throws ZeroDepError: Value is not a string
guardString(new Promise(() => {})); // throws ZeroDepError: Value is not a string
guardString(/[regex]+/gi); // throws ZeroDepError: Value is not a string
guardString(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a string
guardString(Symbol()); // throws ZeroDepError: Value is not a string
guardString(new Int32Array(2)); // throws ZeroDepError: Value is not a string
guardString(undefined); // throws ZeroDepError: Value is not a string
```

## Advanced Use

The guard may optionally be configured, via the `guardStringHOF` function, with additional run-time checks.

### Signature

```typescript
const guardStringHOF: (options: GuardStringOptions) => (value: any) => void;

interface GuardStringOptions {
  minLength?: number;
  maxLength?: number;
}
```

#### Configuration Options

The `guardStringHOF` has the following configuration options, all are optional:

- **minLength** - the minimum length of the string
- **maxLength** - the maximum length of the string

### Advanced Examples

**Min & Max Length**

```typescript
import { guardStringHOF, GuardStringOptions } from '@zerodep/guard-string';

const config: GuardStringOptions = {
  minLength: 5,
  maxLength: 10,
};

const customStringGuard = guardStringHOF(config);

customStringGuard('abc'); // throws ZeroDepError: String is shorter than 5 character(s)
customStringGuard('testing'); // void
customStringGuard('a long string'); // throws ZeroDepError: String is longer than 10 character(s)
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
npm i @zerodep/guard-string
```

then

```javascript
import { guardString } from '@zerodep/app';
// or
import { guardString } from '@zerodep/utilities';
// or
import { guardString } from '@zerodep/guard';
// or
import { guardString } from '@zerodep/guard-string';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.string` package to `@zerodep/guard-string` for consistency across @zerodep ecosystem
