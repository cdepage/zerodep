# @zerodep/case-kebab

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/case-kebab?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-kebab)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/case-kebab?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/case-kebab)
[![version](https://img.shields.io/npm/v/@zerodep/case-kebab?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-kebab)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert a string to kebab-case that also strips out non-alphanumeric characters and any leading numeric characters. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/case/kebab) page.

## Documentation

This is a standalone package export from the `@zerodep` ecosystem.

Full documentation for this method may be found at the [zerodep.app](https://zerodep.app/case/kebab) website.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { caseKebab } from '@zerodep/case-kebab';
// or
const { caseKebab } = require('@zerodep/case-kebab');
```

### Use Cases

```javascript
caseKebab('From sentence case'); // "from-sentence-case"
caseKebab('fromCamelCase'); // "from-camel-case"
caseKebab('from_snake_case'); // "from-snake-case"
caseKebab('FromPascalCase'); // "from-pascal-case"
caseKebab(''); // ""

// with non-alphanumeric characters
caseKebab('A string with some !@#$%^& characters'); // "a-string-with-some-characters"
caseKebab('A #22 character long string'); // "a-22-character-long-string"
caseKebab("I'm a sp3c!al $741ng"); // "i-m-a-sp3c-al-741ng"

// with accented characters
caseKebab('àëîóüý Žøñç'); // "aeiouy-zonc"

// with leading special characters and numbers
caseKebab('__with    many --- spaces'); // "with-many-spaces"
caseCamel('12 monkeys see 6 bananas'); // "monkeys-see-6-bananas"

// non-string values
caseKebab({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
