# @zerodep/string-trim

[![version](https://img.shields.io/npm/v/@zerodep/string-trim?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-trim)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to remove a specific character from the start and end of a string. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/trim) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringTrim } from '@zerodep/string-trim';
// or
const { stringTrim } = require('@zerodep/string-trim');
```

### Using Default Space Separator

```javascript
stringTrim('   some string   '); // "some string"
```

### Using Custom Separator

```javascript
stringTrim('xx some string  xx', 'x'); // " some string "
```

### Unsuccessful Response

```javascript
stringTrim({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
