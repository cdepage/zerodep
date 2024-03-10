# @zerodep/string-trimright

[![version](https://img.shields.io/npm/v/@zerodep/string-trimright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trimright)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to remove a specific character from the start and end of a string. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/trimright) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringTrimRight } from '@zerodep/string-trimright';
// or
const { stringTrimRight } = require('@zerodep/string-trimright');
```

### Using Default Space Separator

```javascript
stringTrimRight('   some string   '); // "some string"
```

### Using Custom Separator

```javascript
stringTrimRight('xx some string  xx', 'x'); // "xx some string "
```

### Unsuccessful Response

```javascript
stringTrimRight({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
