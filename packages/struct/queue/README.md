# @zerodep/struct-queue

[![version](https://img.shields.io/npm/v/@zerodep/struct-queue?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-queue)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A queue data structure implementation with event emitting.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/queue) site.

## Signature

```typescript
declare const structQueueFactory: <T = any>(name: string, items?: T[]) => Queue<T>;

interface Queue<T> {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  front: () => T | undefined;
  size: () => number;
  isEmpty: () => boolean;
  clear: () => void;
  toArray: () => T[];
}

interface QueueEvents<T> {
  enqueued: { name: string; ts: number; payload: T };
  dequeued: { name: string; ts: number; payload: T };
  emptied: { name: string; ts: number };
}
```

### Factory Parameters

The `structQueueFactory` function has the following parameters:

- **name** - a name of the queue, primarily for use in the EventEmitter to differentiate events from multiple queues
- **items** - an optional array of items with which to populate the queue, last item in the array is the top item in the queue, or, first item is at the bottom of the queue

### Queue Methods

The `structQueueFactory` returns an object with the following methods:

- **enqueue()** - adds an item to the end of the queue
- **dequeue()** - gets and removes an item from the front of the queue
- **front()** - gets the item from the front of the queue, does not remove it
- **size()** - how many items are in the queue
- **isEmpty()** - check if the queue is empty
- **clear()** - removes all items from the queue
- **toArray()** - converts the queue to an array suitable for serialization, first item in the queue is the first item in the array

### Emitted Event Data

The `structQueueFactory` events return an object with the following shape:

- **name** - the name of the queue
- **ts** - the number is milliseconds since the unix epoch
- **payload** - the item that was enqueued or dequeued

## Examples

```javascript
// ESM
import { queueFactory } from '@zerodep/struct-queue';

// CJS
const { queueFactory } = require('@zerodep/struct-queue');
```

### Simple Case

```javascript
const queue = structQueueFactory('Queue #1');

// add items to the queue
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

queue.size(); // 3

queue.pop(); // "a"

queue.peek(); // "b"

queue.toArray(); // ["b", "c"]
```

### Populate at Creation

```javascript
const queue = structQueueFactory('Queue #2', ['aa', 'bb', 'cc', 'dd']);

queue.size(); // 4

queue.toArray(); // ["aa", "bb", "cc", "dd"]
```

### Export/Serialize a Queue

```javascript
const queue = structQueueFactory('Queue #3', ['aa', 'bb', 'cc', 'dd']);
queue.enqueue('ee');
queue.enqueue('ff');

const items = queue.toArray();
console.log(items); // ["aa", "bb", "cc", "dd", "ee", "ff"]
```

### Event Emitter

```javascript
const queue = structQueueFactory('Queue #4');

// setup event listeners
queue.on('enqueued', (event) => {
  console.log('ENQUEUED:', event);
});
queue.on('dequeued', (event) => {
  console.log('DEQUEUED', event);
});
queue.on('emptied', (event) => {
  console.log('EMPTIED', event);
});

queue.enqueue('aaa');
// event listener causes the following console output:
// "ENQUEUED", { name: "Queue #4", ts: 1693161896772, payload: "aaa" };

queue.dequeue();
// event listener emits two events in this case (as the queue is now empty)
// "DEQUEUED", { name: "Queue #4", ts: 1693161988176, payload: "aaa" };
// "EMPTIED", { name: "Queue #4", ts: 1693161988176 };
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - supports both ECMAScript modules and common JavaScript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully Typed** - typescript definitions are provided/built-in to every package for a superior developer experience
- **Semantically Named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, valuable changelogs for understand changes
- **MIT Licensed** - permissively licensed for maximum usability
