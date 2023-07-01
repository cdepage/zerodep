# @zerodep/string-lowerfirst

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-lowerfirst)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-lowerfirst)
[![version](https://img.shields.io/npm/v/@zerodep/string-lowerfirst?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-lowerfirst)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert the first letter of a provided string to a lowercase value. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/lowerfirst) page.

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
