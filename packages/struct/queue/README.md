# @zerodep/struct-queue

[![version](https://img.shields.io/npm/v/@zerodep/struct-queue?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-queue)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A queue data structure implementation with event emitting.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/queue) site.

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
