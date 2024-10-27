# caseDot()

[![version](https://img.shields.io/npm/v/@zerodep/case-dot?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-dot)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that deburrs a string, converts it to dot.case, strips all non-alphanumeric characters and removes leading numbers.

This utility is intended for database field names, CSV header conversion, and other field normalizations, among other uses.

## Signature

```typescript
declare const caseDot: (value: string) => string;
```

### Function Parameters

The `caseDot` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
// ESM
import { caseDot } from '@zerodep/app';

// CJS
const { caseDot } = require('@zerodep/app');
```

```javascript
caseDot('from sentence case'); // "from.sentence.case"
caseDot('from.dot.case'); // "from.dot.case"
caseDot('fromCamelCase'); // "from.camel.case"
caseDot('from_snake_case'); // "from.snake.case"
caseDot('FromPascalCase'); // "from.pascal.case"
caseDot(''); // ""

// with non-alphanumeric characters in the string
caseDot('A string with some !@#$%^& characters'); // "a.string.with.some.characters"
caseDot('A #22 character long string'); // "a.22.character.long.string"
caseDot("I'm a sp3c!al $741ng"); // "i.m.a.sp3c.al.741ng"

// with accented characters
caseDot('àëîóüý Žøñç'); // "aeiouy.zonc"

// with leading special characters and numbers
caseDot('__with    many --- spaces'); // "with.many.spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys.see.6.bananas"

// non-string values
caseDot({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/case-dot
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Added**

- created the `@zerodep/case-dot` package
