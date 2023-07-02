# @zerodep/struct-queue

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct-queue?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-queue)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct-queue?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-queue)
[![version](https://img.shields.io/npm/v/@zerodep/struct-queue?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-queue)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A queue data structure implementation with event emitting.

Full documentation is available at the [zerodep.app](http://zerodep.app/to/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { queueFactory } from '@zerodep/struct-queue';
// or
const { queueFactory } = require('@zerodep/struct-queue');
```

### Use Case

```typescript
queue.enque('item 1');
queue.enque('item 2');
queue.enque('item 3');

queue.front(); // "item 1"
queue.dequeue(); // "item 1"
queue.front(); // "item 2"
queue.size(); // 2
```
