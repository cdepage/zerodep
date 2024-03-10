# @zerodep/case-snake

[![version](https://img.shields.io/npm/v/@zerodep/case-snake?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-snake)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert a string to snake_case that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/snake) page.

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
caseSnake('from.dot.case'); // "from_dot_case"
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
