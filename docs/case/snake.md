# caseSnake()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-snake?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-snake)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-snake?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-snake)
[![version](https://img.shields.io/npm/v/@zerodep/case-snake?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-snake)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to snake_case that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseSnake: (value: string) => string;
```

### Function Parameters

The `caseSnake` function has the following parameters:

- **value** - the value to convert

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseSnake } from '@zerodep/case-snake';
// or
const { caseSnake } = require('@zerodep/case-snake');
```

### Use Cases

```javascript
caseSnake('From sentence case'); // "from_sentence_case"
caseSnake('fromCamelCase'); // "from_camel_case"
caseSnake('from_snake_case'); // "from_snake_case"
caseSnake('FromPascalCase'); // "from_pascal_case"
caseSnake(''); // ""

// with non-alphanumeric characters
caseSnake('A string with some !@#$%^& characters'); // "a_string_with_some_characters"
caseSnake('A #22 character long string'); // "a_22_character_long_string"
caseSnake("I'm a sp3c!al $741ng"); // "i_m_a_sp3c_al_741ng"

// with accented characters
caseSnake('àëîóüý Žøñç'); // "aeiouy_zonc"

// with leading special characters and numbers
caseSnake('__with    many --- spaces'); // "with_many_spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys_see_6_bananas"

// non-string values
caseSnake({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

# all @zerodep case functions - small file size
npm i @zerodep/case

# only this @zerodep function - tiny file size
npm i @zerodep/case-snake
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_snake` package to `@zerodep/case-snake` for consistency across @zerodep ecosystem
