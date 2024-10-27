# stringTrimLeft()

[![version](https://img.shields.io/npm/v/@zerodep/string-trimleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trimleft)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to remove a specific character from the start of a string. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const stringTrim: (value: string, char?: string) => string;
```

### Function Parameters

The `stringTrimLeft` function has the following parameters:

- **value** - the value to trim
- **char** - optional character/string to remove, default is a space character

## Examples

```javascript
// ESM
import { stringTrimLeft } from '@zerodep/app';

// CJS
const { stringTrimLeft } = require('@zerodep/app');
```

```javascript
// with the default separator (a space character)
stringTrimLeft('   some string   '); // "some string   "

// with a custom separator
stringTrimLeft('xx some string  xx', 'x'); // " some string  xx"

// with anything that is not a string
stringTrimLeft({ a: 'not string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/string-trimleft
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/string.trimleft` package to `@zerodep/string-trimleft` for consistency across @zerodep ecosystem
