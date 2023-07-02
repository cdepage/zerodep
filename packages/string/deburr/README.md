# @zerodep/string-deburr

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-deburr?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-deburr)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-deburr?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-deburr)
[![version](https://img.shields.io/npm/v/@zerodep/string-deburr?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-deburr)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to convert accented characters to their equivalent ASCII values. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/deburr) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringDeburr } from '@zerodep/string-deburr';
// or
const { stringDeburr } = require('@zerodep/string-deburr');
```

### Use Cases

```javascript
stringDeburr('àëîóüý Žøñç'); // "aeioUy Zonc"
stringDeburr('Hello There!ç'); // "Hello THere!"
```

### Unsuccessful Response

```javascript
stringDeburr({ not: 'a string' }); // throws ZeroDepError: Value is not a string
```
