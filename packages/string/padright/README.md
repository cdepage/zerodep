# @zerodep/string-padright

[![version](https://img.shields.io/npm/v/@zerodep/string-padright?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/string-padright)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to suffix a value with a specified character to create a string of a specific length. Non-string values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/string/padright) page.

## Signature

```typescript
declare const stringPadRight: (value: string | number | bigint, size: number, char?: string) => string;
```

### Function Parameters

The `stringPadRight` function has the following parameters:

- **value** - the value to modify
- **size** - the target size of the string
- **char** - optional character/string to pad with, default is a space character

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { stringPadRight } from '@zerodep/string-padright';

// CJS
const { stringPadRight } = require('@zerodep/string-padright');
```

```javascript
// with the default separator (a space character)
stringPadRight('abc', 10); // "abc       "
stringPadRight(123, 10); // "123       "
stringPadRight(456n, 10); // "456       "

// with a custom separator
stringPadRight('bc', 5, 'a'); // "bcaaa"
stringPadRight(123, 6, '0'); // "123000"
stringPadRight(456n, 7, '_'); // "456____"

// when the value exceeds the requested size the full value is returned (non-destructive)
stringPadRight('abcdefghij', 5, 'x'); // "abcdefghij"

// with anything that is not a string
stringPadRight({ a: 'not string' }); // throws ZeroDepError: Value is not a string
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
