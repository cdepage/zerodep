# @zerodep/string-padleft

[![version](https://img.shields.io/npm/v/@zerodep/string-padleft?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padleft)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to prefix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/padleft) page.

## Signature

```typescript
declare const stringPadLeft: (value: string | number | bigint, size: number, char?: string) => string;
```

### Function Parameters

The `stringPadLeft` function has the following parameters:

- **value** - the value to modify
- **size** - the target size of the string
- **char** - optional character/string to pad with, default is a space character

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { stringPadLeft } from '@zerodep/string-padleft';

// CJS
const { stringPadLeft } = require('@zerodep/string-padleft');
```

```javascript
// with the default separator (a space character)
stringPadLeft('abc', 10); // "       abc"
stringPadLeft(123, 10); // "       123"
stringPadLeft(456n, 10); // "       456"

// with a custom separator
stringPadLeft('bc', 5, 'a'); // "aaabc"
stringPadLeft(123, 6, '0'); // "000123"
stringPadLeft(456n, 7, '_'); // "____456"

// when the value exceeds the requested size the full value is returned (non-destructive)
stringPadLeft('abcdefghij', 5, 'x'); // "abcdefghij"

// with anything that is not a string
stringPadLeft({ a: 'not string' }); // throws ZeroDepError: Value is not a string
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
