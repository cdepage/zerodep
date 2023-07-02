# @zerodep/string-padright

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/string-padright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padright)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/string-padright?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/string-padright)
[![version](https://img.shields.io/npm/v/@zerodep/string-padright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padright)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to suffix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/string/padright) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { stringPadRight } from '@zerodep/string-padright';
// or
const { stringPadRight } = require('@zerodep/string-padright');
```

### Using Default Space Separator

```javascript
stringPadRight('abc', 10); // "abc       "
stringPadRight(123, 10); // "123       "
stringPadRight(456n, 10); // "456       "
```

### Using Custom Separator

```javascript
stringPadRight('bc', 5, 'a'); // "bcaaa"
stringPadRight(123, 6, '0'); // "123000"
stringPadRight(456n, 7, '_'); // "456____"
```

### Edge Cases

```javascript
// when the value exceeds the requested size the full value is returned
stringPadRight('abcdefghij', 5, 'x'); // "abcdefghij"

// non-string values
stringPadRight({ not: 'a string' }, 2); // throws ZeroDepError: Value is not a string
```
