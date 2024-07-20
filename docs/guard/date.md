# guardDate()

[![version](https://img.shields.io/npm/v/@zerodep/guard-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-date)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardDate: (value: any) => void;
```

The `guardDate` function has the following parameters:

- **value** - the value to guard

## Examples

### Successful Cases

```javascript
guardDate(new Date()); // void
```

### Unsuccessful Cases

```javascript
guardDate([]); // throws ZeroDepError: Value is not a date
guardDate(['a', 'b', 'c']); // throws ZeroDepError: Value is not a date
guardDate(1000n); // throws ZeroDepError: Value is not a date
guardDate(true); // throws ZeroDepError: Value is not a date
guardDate(''); // throws ZeroDepError: Value is not a date
guardDate(new Error('message')); // throws ZeroDepError: Value is not a date
guardDate(3.14); // throws ZeroDepError: Value is not a date
guardDate(() => 'function'); // throws ZeroDepError: Value is not a date
guardDate(42); // throws ZeroDepError: Value is not a date
guardDate(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // throws ZeroDepError: Value is not a date
guardDate(null); // throws ZeroDepError: Value is not a date
guardDate({ an: 'object' }); // throws ZeroDepError: Value is not a date
guardDate(new Promise(() => {})); // throws ZeroDepError: Value is not a date
guardDate(/[regex]+/gi); // throws ZeroDepError: Value is not a date
guardDate(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a date
guardDate('a string'); // throws ZeroDepError: Value is not a date
guardDate(Symbol()); // throws ZeroDepError: Value is not a date
guardDate(new Int32Array(2)); // throws ZeroDepError: Value is not a date
guardDate(undefined); // throws ZeroDepError: Value is not a date
```

## Advanced Use

The guard may optionally be configured, via the `guardDateHOF` function, with additional run-time range checks.

### Signature

```typescript
const guardDateHOF: (options: GuardDateOptions) => (value: any) => void;

interface GuardDateOptions {
  earliest?: number;
  latest?: number;
}
```

### Configuration Options

The `GuardDateOptions` has the following configuration options, all are optional:

- **earliest** - the smallest/earliest date allowed
- **latest** - the largest/latest date allowed

### Advanced Examples

**Earliest & Latest Dates**

```typescript
import { guardDateHOF, GuardDateOptions } from '@zerodep/guard-date';

const config: GuardDateOptions = {
  earliest: new Date('1999-12-31'),
  latest: new Date('2038-01-19'),
};

const customDateGuard = guardDateHOF(config);

customDateGuard('1988-02-15'; // throws ZeroDepError: Date is less than 1999-12-31T00:00:00.000Z
customDateGuard('2021-02-28'); // void
customDateGuard('2151-06-06'); // throws ZeroDepError: Date is greater than 2038-01-19T00:00:00.000Z
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
npm i @zerodep/guard-date
```

then

```javascript
import { guardDate } from '@zerodep/app';
// or
import { guardDate } from '@zerodep/utilities';
// or
import { guardDate } from '@zerodep/guard';
// or
import { guardDate } from '@zerodep/guard-date';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.date` package to `@zerodep/guard-date` for consistency across @zerodep ecosystem
