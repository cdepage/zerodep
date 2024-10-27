# @zerodep/string-titlecase

[![version](https://img.shields.io/npm/v/@zerodep/string-titlecase?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-titlecase)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert the first letter of each word to an uppercase value, with special exceptions for English contractions and possessives. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/titlecase) page.

## Signature

```typescript
declare const stringTitleCase: (value: string) => string;
```

### Function Parameters

The `stringTitleCase` function has the following parameters:

- **value** - the value to modify

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { stringTitleCase } from '@zerodep/string-titlecase';

// CJS
const { stringTitleCase } = require('@zerodep/string-titlecase');
```

```javascript
// strings with various permutations
stringTitleCase('california'); // "California"
stringTitleCase('New york'); // "New York"
stringTitleCase('sanchez-ferrero'); // "Sanches-Ferrero"
stringTitleCase('this is IMPORANT'); // "This Is IMPORANT"
stringTitleCase("o'neill"); // "O'Neill"
stringTitleCase('3.14 pi'); // "3.14 Pi"
stringTitleCase('éclair'); // "Éclair"
stringTitleCase("john's"); // "John's"
stringTitleCase("i'll be there"); // "I'll Be There"
stringTitleCase(''); // ""

// with anything that is not a string
stringTitleCase({ a: 'not string' }); // throws ZeroDepError: Value is not a string
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
