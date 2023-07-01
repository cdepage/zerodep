# caseKebab()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-kebab?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-kebab)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-kebab?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-kebab)
[![version](https://img.shields.io/npm/v/@zerodep/case-kebab?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-kebab)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to kebab-case that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseKebab: (value: string) => string;
```

### Function Parameters

The `caseKebab` function has the following parameters:

- **value** - the value to convert

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseKebab } from '@zerodep/case-kebab';
// or
const { caseKebab } = require('@zerodep/case-kebab');
```

### Use Cases

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

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

# all @zerodep case functions - small file size
npm i@zerodep/case

# only this @zerodep function - tiny file size
npm i@zerodep/case-kebab'
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/case_kebab` package to `@zerodep/case-kebab` for consistency across @zerodep ecosystem
