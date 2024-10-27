# stringLowerFirst()

[![version](https://img.shields.io/npm/v/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-lowerfirst)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert the first letter of a provided string to a lowercase value. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const stringLowerFirst: (value: string) => string;
```

### Function Parameters

The `stringLowerFirst` function has the following parameters:

- **value** - the value to modify

## Examples

```javascript
// ESM
import { stringLowerFirst } from '@zerodep/app';

// CJS
const { stringLowerFirst } = require('@zerodep/app');
```

```javascript
// with accented strings
stringLowerFirst('California'); // "california"
stringLowerFirst('New York'); // "new York"
stringLowerFirst('vermont'); // "vermont"

// with anything that is not a string
stringLowerFirst({ a: 'not string' }); // throws ZeroDepError: Value is not a string
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

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/string.lowerfirst` package to `@zerodep/string-lowerfirst` for consistency across @zerodep ecosystem
