# @zerodep/string-words

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-words?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-words)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-words?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-words)
[![version](https://img.shields.io/npm/v/@zerodep/string-words?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-words)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to split a sentence of words into an array of those words and remove punctuation. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/words) page.

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
