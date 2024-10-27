# @zerodep/case-camel

[![version](https://img.shields.io/npm/v/@zerodep/case-camel?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-camel)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that deburrs a string, converts it to camelCase, strips all non-alphanumeric characters and removes leading numbers.

This utility is intended for database field names, CSV header conversion, and other field normalizations, among other uses.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/dot) page.

## Signature

```typescript
declare const caseCamel: (value: string) => string;
```

## Examples

```javascript
// ESM
import { caseCamel } from '@zerodep/case-camel';

// CJS
const { caseCamel } = require('@zerodep/case-camel');
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
