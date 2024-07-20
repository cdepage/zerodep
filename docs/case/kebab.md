# caseKebab()

[![version](https://img.shields.io/npm/v/@zerodep/case-kebab?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-kebab)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert a string to kebab-case, intended for converting variable names, that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseKebab: (value: string) => string;
```

### Function Parameters

The `caseKebab` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
caseKebab('From sentence case'); // "from-sentence-case"
caseKebab('fromCamelCase'); // "from-camel-case"
caseKebab('from_snake_case'); // "from-snake-case"
caseKebab('FromPascalCase'); // "from-pascal-case"
caseKebab(''); // ""

// with non-alphanumeric characters
caseKebab('A string with some !@#$%^& characters'); // "a-string-with-some-characters"
caseKebab('A #22 character long string'); // "a-22-character-long-string"
caseKebab("I'm a sp3c!al $741ng"); // "i-m-a-sp3c-al-741ng"

// with accented characters
caseKebab('àëîóüý Žøñç'); // "aeiouy-zonc"

// with leading special characters and numbers
caseKebab('__with    many --- spaces'); // "with-many-spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys-see-6-bananas"

// non-string values
caseKebab({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "case" functions
npm i@zerodep/case

# only this @zerodep package
npm i@zerodep/case-kebab'
```

then

```javascript
import { caseKebab } from '@zerodep/app';
// or
import { caseKebab } from '@zerodep/utilities';
// or
import { caseKebab } from '@zerodep/case';
// or
import { caseKebab } from '@zerodep/case-kebab';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_kebab` package to `@zerodep/case-kebab` for consistency across @zerodep ecosystem
