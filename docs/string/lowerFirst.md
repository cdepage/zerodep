# stringLowerFirst()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-lowerfirst)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-lowerfirst)
[![version](https://img.shields.io/npm/v/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-lowerfirst)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert the first letter of a provided string to a lowercase value. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringLowerFirst: (value: string) => string;
```

### Function Parameters

The `stringLowerFirst` function has the following parameters:

- **value** - the value to modify

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringLowerFirst } from '@zerodep/string-lowerfirst';
// or
const { stringLowerFirst } = require('@zerodep/string-lowerfirst');
```

### Successful Response

```javascript
stringLowerFirst('California'); // "california"
stringLowerFirst('New York'); // "new York"
stringLowerFirst('vermont'); // "vermont"
```

### Unsuccessful Response

```javascript
stringLowerFirst({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep string functions - small file size
import { stringLowerFirst } from '@zerodep/string';

# only this @zerodep function - tiny file size
import { stringLowerFirst } from '@zerodep/string-lowerfirst';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.lowerfirst` package to `@zerodep/string-lowerfirst` for consistency across @zerodep ecosystem
