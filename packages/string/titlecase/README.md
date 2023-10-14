# @zerodep/string-titlecase

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-titlecase?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-titlecase)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-titlecase?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-titlecase)
[![version](https://img.shields.io/npm/v/@zerodep/string-titlecase?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-titlecase)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

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
