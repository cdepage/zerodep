# structQueueFactory()

[![version](https://img.shields.io/npm/v/@zerodep/struct-queue?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-queue)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A factory function that returns an optionally-typed Queue data structure instance that is also an EventEmitter.

## Signature

```typescript
const structQueueFactory: <T = any>(name: string, items?: T[]) => Queue<T>;

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

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "struct" factories
npm i @zerodep/struct

# only this @zerodep package
npm i @zerodep/struct-queue
```

then

```javascript
import { structQueueFactory, Queue } from '@zerodep/app';
// or
import { structQueueFactory, Queue } from '@zerodep/struct';
// or
import { structQueueFactory, Queue } from '@zerodep/struct-queue';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.4.0] - 2023-08-27

**Added**

- added this package
