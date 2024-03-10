# stringLowerFirst()

[![version](https://img.shields.io/npm/v/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-lowerfirst)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "string" functions
npm i @zerodep/string

# only this @zerodep package
npm i @zerodep/string-lowerfirst
```

then

```javascript
import { stringLowerFirst } from '@zerodep/app';
// or
import { stringLowerFirst } from '@zerodep/utilities';
// or
import { stringLowerFirst } from '@zerodep/string';
// or
import { stringLowerFirst } from '@zerodep/string-lowerfirst';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.lowerfirst` package to `@zerodep/string-lowerfirst` for consistency across @zerodep ecosystem
