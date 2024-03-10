# @zerodep/case-pascal

[![version](https://img.shields.io/npm/v/@zerodep/case-pascal?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/case-pascal)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert a string to PascalCase that also strips out non-alphanumeric characters and any leading numeric characters.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/case/pascal) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { casePascal } from '@zerodep/case-pascal';
// or
const { casePascal } = require('@zerodep/case-pascal');
```

### Use Cases

```javascript
casePascal('From sentence case'); // "FromSentenceCase"
casePascal('from-kebab-case'); // "FromKebabCase"
casePascal('from.dot.case'); // "FromDotCase"
casePascal('from_snake_case'); // "FromSnakeCase"
casePascal('FromPascalCase'); // "FromPascalCase"
casePascal(''); // ""

// with non-alphanumeric characters
casePascal('A string with some !@#$%^& characters'); // "AStringWithSomeCharacters"
casePascal('A #22 character long string'); // "A22CharacterLongString"
casePascal("I'm a sp3c!al $741ng"); // "IMASp3cAl741ng"

// with accented characters
casePascal('àëîóüý Žøñç'); // "AeiouyZonc"

// with leading special characters and numbers
casePascal('__with    many --- spaces'); // "WithManySpaces"
casePascal('12 monkeys see 6 bananas'); // "MonkeysSee6Bananas"

// non-string values
casePascal({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
