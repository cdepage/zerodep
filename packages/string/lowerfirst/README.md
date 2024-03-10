# @zerodep/string-lowerfirst

[![version](https://img.shields.io/npm/v/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-lowerfirst)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert the first letter of a provided string to a lowercase value. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/lowerfirst) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringLowerFirst } from '@zerodep/string-lowerfirst';
// or
const { stringLowerFirst } = require('@zerodep/string-lowerfirst');
```

### Successful Response

```javascript
stringLowerFirst('California'); // "california"
stringLowerFirst('New York'); // "new York"
stringLowerFirst('vermont'); // "vermont"
```

### Unsuccessful Response

```javascript
stringLowerFirst({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
