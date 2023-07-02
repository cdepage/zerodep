# @zerodep/struct-stack

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct-stack?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-stack)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct-stack?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-stack)
[![version](https://img.shields.io/npm/v/@zerodep/struct-stack?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-stack)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A factory function that returns an optionally-typed Stack data structure instance

Full documentation is available at the [zerodep.app](http://zerodep.app/to/string) page.

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
