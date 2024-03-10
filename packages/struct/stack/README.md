# @zerodep/struct-stack

[![version](https://img.shields.io/npm/v/@zerodep/struct-stack?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-stack)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A factory function that returns an optionally-typed Stack data structure instance

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/stack) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { structStackFactory } from '@zerodep/struct-stack';
// or
const { structStackFactory } = require('@zerodep/struct-stack');
```

### Use Case

```typescript
const stack = structStackFactory(['a', 'b']);

// add items to the stack
stack.push('c');
stack.push('d');

// size()
stack.size(); // 4

// pop()
stack.pop(); // "d"

// peek()
stack.peek(); // "c"

// toArray()
stack.toArray(); // ["a", "b", "c"]
```
