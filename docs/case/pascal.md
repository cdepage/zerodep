# casePascal()

[![version](https://img.shields.io/npm/v/@zerodep/case-pascal?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-pascal)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert a string to PascalCase, intended for converting variable names, that also strips out non-alphanumeric characters and any leading numeric characters.

## Signature

```typescript
const casePascal: (value: string) => string;
```

### Function Parameters

The `casePascal` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
casePascal('From sentence case'); // "FromSentenceCase"
casePascal('from-kebab-case'); // "FromKebabCase"
casePascal('from_snake_case'); // "FromSnakeCase"
casePascal('FromPascalCase'); // "FromPascalCase"
casePascal(''); // ""

// with non-alphanumeric characters
casePascal('A string with some !@#$%^& characters'); // "AStringWithSomeCharacters"
casePascal('A #22 character long string'); // "A22CharacterLongString"
casePascal("I'm a sp3c!al $741ng"); // "IMASp3cAl741ng"

// with accented characters
casePascal('àëîóüý Žøñç'); // "AeiouyZonc"

// with leading special characters and numbers
casePascal('__with    many --- spaces'); // "WithManySpaces"
casePascal('12 monkeys see 6 bananas'); // "MonkeysSee6Bananas"

// non-string values
casePascal({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
npm i @zerodep/case-pascal
```

then

```javascript
import { casePascal } from '@zerodep/app';
// or
import { casePascal } from '@zerodep/utilities';
// or
import { casePascal } from '@zerodep/case';
// or
import { casePascal } from '@zerodep/case-pascal';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_pascal` package to `@zerodep/case-pascal` for consistency across @zerodep ecosystem
