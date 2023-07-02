# stringWords()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-words?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-words)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-words?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-words)
[![version](https://img.shields.io/npm/v/@zerodep/string-words?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-words)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to split a sentence of words into an array of those words and remove punctuation. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const stringWords: (value: string, separator?: string | RegExp) => string[];
```

### Function Parameters

The `stringWords` function has the following parameters:

- **value** - the value to modify
- **separator** - optional character/string at which to split, default is a space character

## Examples

### Using Default Space Separator

```javascript
stringWords('California'); // ["California"]
stringWords('3.14 Pi'); // ["3.14", "Pi"]
stringWords("I'll be there for you. How about you?"); // ["I'll", "be", "there", "for", "you", "How", "about", "you"]
stringWords(''); // []
```

### Using Custom Separator

```javascript
stringWords('this_is_a_snake_case_string', '_'); // ["this", "is", "a", "snake", "case", "string"]
```

### Unsuccessful Response

```javascript
stringWords({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/string-words
```

then

```javascript
import { stringWords } from '@zerodep/app';
// or
import { stringWords } from '@zerodep/utilities';
// or
import { stringWords } from '@zerodep/string';
// or
import { stringWords } from '@zerodep/string-words';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/string.words` package to `@zerodep/string-words` for consistency across @zerodep ecosystem
