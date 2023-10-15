# @zerodep/case-sentence

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-sentence?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-sentence)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-sentence?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-sentence)
[![version](https://img.shields.io/npm/v/@zerodep/case-sentence?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-sentence)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to sentence case that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/sentence) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseSentence } from '@zerodep/case-sentence';
// or
const { caseSentence } = require('@zerodep/case-sentence');
```

### Use Cases

```javascript
caseSentence('From sentence case'); // "from sentence case"
caseSentence('fromCamelCase'); // "from camel case"
caseSentence('from.dot.case'); // "from dot case"
caseSentence('from_snake_case'); // "from snake case"
caseSentence('FromPascalCase'); // "from pascal case"
caseSentence(''); // ""

// with non-alphanumeric characters
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
