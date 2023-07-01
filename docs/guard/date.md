# guardDate()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/guard-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-date)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/guard-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/guard-date)
[![version](https://img.shields.io/npm/v/@zerodep/guard-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-date)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
const guardDate: (value: any) => void;
```

The `guardDate` function has the following parameters:

- **value** - the value to guard

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { guardDate } from '@zerodep/guard-date';
// or
const { guardDate } = require('@zerodep/guard-date');
```

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages- largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep guard functions - small file size
import { guardDate } from '@zerodep/guards';

# only this @zerodep function - tiny file size
import { guardDate } from '@zerodep/guard-date';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/guard.date` package to `@zerodep/guard-date` for consistency across @zerodep ecosystem
