# @zerodep/case-sentence

[![version](https://img.shields.io/npm/v/@zerodep/case-sentence?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-sentence)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility that deburrs a string, converts it to sentence case, strips all non-alphanumeric characters and removes leading numbers.

This utility is intended for database field names, CSV header conversion, and other field normalizations, among other uses.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/sentence) page.

## Signature

```typescript
declare const caseSentence: (value: string) => string;
```

## Examples

```javascript
// ESM
import { caseSentence } from '@zerodep/case-sentence';

// CJS
const { caseSentence } = require('@zerodep/case-sentence');
```

```javascript
caseSentence('from sentence case'); // "from sentence case"
caseSentence('from.dot.case'); // "from dot case"
caseSentence('fromCamelCase'); // "from camel case"
caseSentence('from_snake_case'); // "from snake case"
caseSentence('FromPascalCase'); // "from pascal case"
caseSentence(''); // ""

// with non-alphanumeric characters in the string
caseSentence('A string with some !@#$%^& characters'); // "a string with some characters"
caseSentence('A #22 character long string'); // "a 22 character long string"
caseSentence("I'm a sp3c!al $741ng"); // "i m a sp3c al 741ng"

// with accented characters
caseSentence('àëîóüý Žøñç'); // "aeiouy zonc"

// with leading special characters and numbers
caseSentence('__with    many --- spaces'); // "with many spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys see 6 bananas"

// non-string values
caseSentence({ not: 'a string' }); // throws ZeroDepError: Value is not a string
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
