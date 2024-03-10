# @zerodep/string-padleft

[![version](https://img.shields.io/npm/v/@zerodep/string-padleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padleft)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to prefix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/padleft) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringPadLeft } from '@zerodep/string-padleft';
// or
const { stringPadLeft } = require('@zerodep/string-padleft');
```

### Using Default Space Separator

```javascript
stringPadLeft('abc', 10); // "       abc"
stringPadLeft(123, 10); // "       123"
stringPadLeft(456n, 10); // "       456"
```

### Using Custom Separator

```javascript
stringPadLeft('bc', 5, 'a'); // "aaabc"
stringPadLeft(123, 6, '0'); // "000123"
stringPadLeft(456n, 7, '_'); // "____456"
```

### Edge Cases

```javascript
// when the value exceeds the requested size the full value is returned
stringPadLeft('abcdefghij', 5, 'x'); // "abcdefghij"

// non-string values
stringPadLeft({ not: 'a string' }, 2); // throws ZeroDepError: Value is not a string
```
