# caseSnake()

[![version](https://img.shields.io/npm/v/@zerodep/case-snake?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-snake)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert a string to snake_case, intended for converting variable names, that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseSnake: (value: string) => string;
```

### Function Parameters

The `caseSnake` function has the following parameters:

- **value** - the value to convert

## Examples

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "case" functions
npm i @zerodep/case

# only this @zerodep package
npm i @zerodep/case-snake
```

then

```javascript
import { caseSnake } from '@zerodep/app';
// or
import { caseSnake } from '@zerodep/utilities';
// or
import { caseSnake } from '@zerodep/case';
// or
import { caseSnake } from '@zerodep/case-snake';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_snake` package to `@zerodep/case-snake` for consistency across @zerodep ecosystem
