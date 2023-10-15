# caseSentence()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-sentence?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-sentence)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-sentence?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-sentence)
[![version](https://img.shields.io/npm/v/@zerodep/case-sentence?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-sentence)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to sentence case, intended for converting variable names, that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseSentence: (value: string) => string;
```

### Function Parameters

The `caseSentence` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
caseSentence('From sentence case'); // "from sentence case"
caseSentence('fromCamelCase'); // "from camel case"
caseSentence('from_snake_case'); // "from snake case"
caseSentence('FromPascalCase'); // "from pascal case"
caseSentence(''); // ""

// with non-alphanumeric characters
caseSentence('A string with some !@#$%^& characters'); // "a string with some characters"
caseSentence('A #22 character long string'); // "a 22 character long string"
caseSentence("I'm a sp3c!al $741ng"); // "i m a sp3c al 741ng"

// with accented characters
caseSentence('àëîóüý Žøñç'); // "aeiouy zonc"

// with leading special characters and numbers
caseSentence('__with    many --- spaces'); // "with many spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys see 6 bananas"

// non-string values
caseSentence({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "case" functions
npm i @zerodep/case

# only this @zerodep package
npm i @zerodep/case-sentence
```

then

```javascript
import { caseSentence } from '@zerodep/app';
// or
import { caseSentence } from '@zerodep/utilities';
// or
import { caseSentence } from '@zerodep/case';
// or
import { caseSentence } from '@zerodep/case-sentence';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_sentence` package to `@zerodep/case-sentence` for consistency across @zerodep ecosystem
