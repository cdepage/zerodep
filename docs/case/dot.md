# caseDot()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-dot?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-dot)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-dot?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-dot)
[![version](https://img.shields.io/npm/v/@zerodep/case-dot?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-dot)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to dot.case, intended for converting variable names, that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const caseDot: (value: string) => string;
```

### Function Parameters

The `caseDot` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
caseDot('From sentence case'); // "from.sentence.case"
caseDot('fromCamelCase'); // "from.camel.case"
caseDot('from_snake_case'); // "from.snake.case"
caseDot('FromPascalCase'); // "from.pascal.case"
caseDot(''); // ""

// with non-alphanumeric characters
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

then

```javascript
import { caseDot } from '@zerodep/app';
// or
import { caseDot } from '@zerodep/utilities';
// or
import { caseDot } from '@zerodep/case';
// or
import { caseDot } from '@zerodep/case-dot';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Added**

- created the `@zerodep/case-dot` package
