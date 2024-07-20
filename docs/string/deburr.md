# stringDeburr()

[![version](https://img.shields.io/npm/v/@zerodep/string-deburr?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-deburr)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert accented characters to their equivalent ASCII values. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringDeburr: (value: string) => string;
```

### Function Parameters

The `stringDeburr` function has the following parameters:

- **value** - the value to modify

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringDeburr } from '@zerodep/string-deburr';
// or
const { stringDeburr } = require('@zerodep/string-deburr');
```

### Use Cases

```javascript
stringDeburr('àëîóüý Žøñç'); // "aeioUy Zonc"
stringDeburr('Hello There!ç'); // "Hello THere!"
```

### Unsuccessful Response

```javascript
stringDeburr({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/string-deburr
```

then

```javascript
import { stringDeburr } from '@zerodep/app';
// or
import { stringDeburr } from '@zerodep/utilities';
// or
import { stringDeburr } from '@zerodep/string';
// or
import { stringDeburr } from '@zerodep/string-deburr';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.deburr` package to `@zerodep/string-deburr` for consistency across @zerodep ecosystem
