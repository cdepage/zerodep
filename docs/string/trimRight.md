# stringTrimRight()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-trimright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimright)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-trimright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimright)
[![version](https://img.shields.io/npm/v/@zerodep/string-trimright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trimright)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to remove a specific character from the start and end of a string. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringTrimRight: (value: string, char?: string) => string;
```

### Function Parameters

The `stringTrimRight` function has the following parameters:

- **value** - the value to trim
- **char** - optional character/string to remove, default is a space character

## Examples

### Using Default Space Separator

```javascript
stringTrimRight('   some string   '); // "some string"
```

### Using Custom Separator

```javascript
stringTrimRight('xx some string  xx', 'x'); // "xx some string "
```

### Unsuccessful Response

```javascript
stringTrimRight({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/string-trimright
```

then

```javascript
import { stringTrimRight } from '@zerodep/app';
// or
import { stringTrimRight } from '@zerodep/utilities';
// or
import { stringTrimRight } from '@zerodep/string';
// or
import { stringTrimRight } from '@zerodep/string-trimright';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.trimright` package to `@zerodep/string-trimright` for consistency across @zerodep ecosystem
