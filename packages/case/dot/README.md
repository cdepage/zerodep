# @zerodep/case-dot

[![version](https://img.shields.io/npm/v/@zerodep/case-dot?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-dot)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert a string to dot.case that also strips out non-alphanumeric characters and any leading numeric characters.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/dot) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseDot } from '@zerodep/case-dot';
// or
const { caseDot } = require('@zerodep/case-dot');
```

### Use Cases

```javascript
caseDot('From sentence case'); // "from.sentence.case"
caseDot('fromCamelCase'); // "from.camel.case"
caseDot('from.dot.case'); // "from.dot.case"
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
caseDot('12 monkeys see 6 bananas'); // "monkeys.see.6.bananas"

// non-string values
caseDot({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
