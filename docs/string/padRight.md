# stringPadRight()

[![version](https://img.shields.io/npm/v/@zerodep/string-padright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padright)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to suffix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const stringPadRight: (value: string | number | bigint, size: number, char?: string) => string;
```

### Function Parameters

The `stringPadRight` function has the following parameters:

- **value** - the value to modify
- **size** - the target size of the string
- **char** - optional character/string to pad with, default is a space character

## Examples

```javascript
// ESM
import { stringPadRight } from '@zerodep/app';

// CJS
const { stringPadRight } = require('@zerodep/app');
```

```javascript
// with the default separator (a space character)
stringPadRight('abc', 10); // "abc       "
stringPadRight(123, 10); // "123       "
stringPadRight(456n, 10); // "456       "

// with a custom separator
stringPadRight('bc', 5, 'a'); // "bcaaa"
stringPadRight(123, 6, '0'); // "123000"
stringPadRight(456n, 7, '_'); // "456____"

// when the value exceeds the requested size the full value is returned (non-destructive)
stringPadRight('abcdefghij', 5, 'x'); // "abcdefghij"

// with anything that is not a string
stringPadRight({ a: 'not string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/string-padright
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/string.padright` package to `@zerodep/string-padright` for consistency across @zerodep ecosystem
