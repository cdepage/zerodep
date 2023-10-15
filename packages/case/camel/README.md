# @zerodep/case-camel

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-camel?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-camel)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-camel?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-camel)
[![version](https://img.shields.io/npm/v/@zerodep/case-camel?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-camel)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to camelCase that also strips out non-alphanumeric characters and any leading numeric characters.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/camel) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseCamel } from '@zerodep/case-camel';
// or
const { caseCamel } = require('@zerodep/case-camel');
```

### Use Cases

```javascript
caseCamel('From sentence case'); // "fromSentenceCase"
caseCamel('from.dot.case'); // "fromDotCase"
caseCamel('from-kebab-case'); // "fromKebabCase"
caseCamel('from_snake_case'); // "fromSnakeCase"
caseCamel('FromPascalCase'); // "fromPascalCase"
caseCamel(''); // ""

// with non-alphanumeric characters
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
