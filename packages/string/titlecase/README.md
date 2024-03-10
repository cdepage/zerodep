# @zerodep/string-titlecase

[![version](https://img.shields.io/npm/v/@zerodep/string-titlecase?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-titlecase)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert the first letter of each word to an uppercase value, with special exceptions for English contractions and possessives. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/titlecase) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringTitleCase } from '@zerodep/string-titlecase';
// or
const { stringTitleCase } = require('@zerodep/string-titlecase');
```

### Successful Response

```javascript
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
```

### Unsuccessful Response

```javascript
stringTitleCase({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
