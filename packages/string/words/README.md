# @zerodep/string-words

[![version](https://img.shields.io/npm/v/@zerodep/string-words?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-words)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to split a sentence of words into an array of those words and remove punctuation. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/words) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringWords } from '@zerodep/string-words';
// or
const { stringWords } = require('@zerodep/string-words');
```

### Using Default Space Separator

```javascript
stringWords('California'); // ["California"]
stringWords('3.14 Pi'); // ["3.14", "Pi"]
stringWords("I'll be there for you. How about you?"); // ["I'll", "be", "there", "for", "you", "How", "about", "you"]
stringWords(''); // []
```

### Using Custom Separator

```javascript
stringWords('this_is_a_snake_case_string', '_'); // ["this", "is", "a", "snake", "case", "string"]
```

### Unsuccessful Response

```javascript
stringWords({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
