# stringTrimLeft()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-trimleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimleft)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-trimleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-trimleft)
[![version](https://img.shields.io/npm/v/@zerodep/string-trimleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trimleft)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to remove a specific character from the start of a string. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringTrim: (value: string, char?: string) => string;
```

### Function Parameters

The `stringTrimLeft` function has the following parameters:

- **value** - the value to trim
- **char** - optional character/string to remove, default is a space character

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringTrimLeft } from '@zerodep/string-trimleft';
// or
const { stringTrimLeft } = require('@zerodep/string-trimleft');
```

### Using Default Space Separator

```javascript
stringTrimLeft('   some string   '); // "some string   "
```

### Using Custom Separator

```javascript
stringTrimLeft('xx some string  xx', 'x'); // " some string  xx"
```

### Unsuccessful Response

```javascript
stringTrimLeft({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep string functions - small file size
import { stringTrimLeft } from '@zerodep/string';

# only this @zerodep function - tiny file size
import { stringTrimLeft } from '@zerodep/string-trimleft';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.trimleft` package to `@zerodep/string-trimleft` for consistency across @zerodep ecosystem
