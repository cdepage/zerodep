# stringPadRight()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-padright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padright)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-padright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padright)
[![version](https://img.shields.io/npm/v/@zerodep/string-padright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padright)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to suffix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringPadRight: (value: string | number | bigint, size: number, char?: string) => string;
```

### Function Parameters

The `stringPadRight` function has the following parameters:

- **value** - the value to modify
- **size** - the target size of the string
- **char** - optional character/string to pad with, default is a space character

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringPadRight } from '@zerodep/string-padright';
// or
const { stringPadRight } = require('@zerodep/string-padright');
```

### Using Default Space Separator

```javascript
stringPadRight('abc', 10); // "abc       "
stringPadRight(123, 10); // "123       "
stringPadRight(456n, 10); // "456       "
```

### Using Custom Separator

```javascript
stringPadRight('bc', 5, 'a'); // "bcaaa"
stringPadRight(123, 6, '0'); // "123000"
stringPadRight(456n, 7, '_'); // "456____"
```

### Edge Cases

```javascript
// when the value exceeds the requested size the full value is returned
stringPadRight('abcdefghij', 5, 'x'); // "abcdefghij"

// non-string values
stringPadRight({ not: 'a string' }, 2); // throws ZeroDepError: Value is not a string
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

then

```javascript
import { stringPadRight } from '@zerodep/app';
// or
import { stringPadRight } from '@zerodep/utilities';
// or
import { stringPadRight } from '@zerodep/string';
// or
import { stringPadRight } from '@zerodep/string-padright';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.padright` package to `@zerodep/string-padright` for consistency across @zerodep ecosystem
