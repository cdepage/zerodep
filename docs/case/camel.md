# caseCamel()

[![version](https://img.shields.io/npm/v/@zerodep/case-camel?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-camel)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that deburrs a string, converts it to camelCase, strips all non-alphanumeric characters and removes leading numbers.

This utility is intended for database field names, CSV header conversion, and other field normalizations, among other uses.

## Signature

```typescript
declare const caseCamel: (value: string) => string;
```

### Function Parameters

The `caseCamel` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
// ESM
import { caseCamel } from '@zerodep/app';

// CJS
const { caseCamel } = require('@zerodep/app');
```

```javascript
caseCamel('from sentence case'); // "fromSentenceCase"
caseCamel('from.dot.case'); // "fromDotCase"
caseCamel('from-kebab-case'); // "fromKebabCase"
caseCamel('from_snake_case'); // "fromSnakeCase"
caseCamel('FromPascalCase'); // "fromPascalCase"
caseCamel(''); // ""

// with non-alphanumeric characters in the string
caseCamel('A string with some !@#$%^& characters'); // "aStringWithSomeCharacters"
caseCamel('A #22 character long string'); // "a22CharacterLongString"
caseCamel("I'm a sp3c!al $741ng"); // "iMASp3cAl741ng"

// with accented characters
caseCamel('àëîóüý Žøñç'); // "aeiouyZonc"

// with leading special characters and numbers
caseCamel('__with    many --- spaces'); // "withManySpaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeysSee6Bananas"

// non-string values
caseCamel({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/case-camel
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/case_camel` package to `@zerodep/case-camel` for consistency across @zerodep ecosystem
