# stringWords()

[![version](https://img.shields.io/npm/v/@zerodep/string-words?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-words)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to split a sentence of words into an array of those words and remove punctuation. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const stringWords: (value: string, separator?: string | RegExp) => string[];
```

### Function Parameters

The `stringWords` function has the following parameters:

- **value** - the value to modify
- **separator** - optional character/string at which to split, default is a space character

## Examples

```javascript
// ESM
import { stringWords } from '@zerodep/app';

// CJS
const { stringWords } = require('@zerodep/app');
```

```javascript
// strings with various permutations
stringWords('California'); // ["California"]
stringWords('3.14 Pi'); // ["3.14", "Pi"]
stringWords("I'll be there for you. How about you?"); // ["I'll", "be", "there", "for", "you", "How", "about", "you"]
stringWords(''); // []

// with a custom separator
stringWords('this_is_a_snake_case_string', '_'); // ["this", "is", "a", "snake", "case", "string"]

// with anything that is not a string
stringWords({ a: 'not string' }); // throws ZeroDepError: Value is not a string
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

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/string.words` package to `@zerodep/string-words` for consistency across @zerodep ecosystem
