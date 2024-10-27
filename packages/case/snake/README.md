# @zerodep/case-snake

[![version](https://img.shields.io/npm/v/@zerodep/case-snake?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-snake)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that deburrs a string, converts it to snake_case, strips all non-alphanumeric characters and removes leading numbers.

This utility is intended for database field names, CSV header conversion, and other field normalizations, among other uses.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/snake) page.

## Signature

```typescript
declare const caseSnake: (value: string) => string;
```

## Examples

```javascript
// ESM
import { caseSnake } from '@zerodep/case-snake';

// CJS
const { caseSnake } = require('@zerodep/case-snake');
```

```javascript
caseSnake('from sentence case'); // "from_sentence_case"
caseSnake('from.dot.case'); // "from_dot_case"
caseSnake('fromCamelCase'); // "from_camel_case"
caseSnake('from_snake_case'); // "from_snake_case"
caseSnake('FromPascalCase'); // "from_pascal_case"
caseSnake(''); // ""

// with non-alphanumeric characters in the string
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

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - supports both ECMAScript modules and common JavaScript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully Typed** - typescript definitions are provided/built-in to every package for a superior developer experience
- **Semantically Named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, valuable changelogs for understand changes
- **MIT Licensed** - permissively licensed for maximum usability
