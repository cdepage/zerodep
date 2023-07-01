# @zerodep/string-padleft

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-padleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padleft)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-padleft?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padleft)
[![version](https://img.shields.io/npm/v/@zerodep/string-padleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padleft)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to prefix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/padleft) page.

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
