# structLinkedListFactory()

[![version](https://img.shields.io/npm/v/@zerodep/struct-linkedlist?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-linkedlist)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A factory function that returns an optionally-typed, iterable, Doubly Linked List data structure instance.

## Signature

```typescript
declare const structLinkedListFactory: <T = unknown>(data?: T[]) => LinkedList<T>;

interface LinkedList<T> {
  size: () => number;
  getHead: () => LinkedListNode<T> | null;
  getTail: () => LinkedListNode<T> | null;
  prepend: (data: T) => void;
  append: (data: T) => void;
  find: (comparator: (data: T) => boolean) => Node<T> | null;
  insertBefore: (node: LinkedListNode<T>, data: T) => void;
  insertAfter: (node: LinkedListNode<T>, data: T) => void;
  deleteNode: (node: LinkedListNode<T>) => void;
  deleteHead: () => void;
  deleteTail: () => void;
  clear: () => void;
  toArray: () => T[];
  toArrayReverse: () => T[];
}

interface LinkedListNode<T> {
  data: T;
  prev: LinkedListNode<T> | null;
  next: LinkedListNode<T> | null;
}
```

### Factory Parameters

The `structLinkedlistFactory` function has the following parameters:

- **data** - an optional array of data items with which to populate the linked list, the first item in the array will be the head item

### Linked List Methods

The `structLinkedlistFactory` returns an object with the following methods:

- **size()** - how many nodes/items are in the linked list
- **getHead()** - returns the head node of the list
- **getTail()** - returns the tail node of the list
- **prepend(data)** - add a new node to the front of the list
- **append(item)** - add a new node to the end of the list
- **find(comparator)** - finds a node in the list
- **insertBefore(node, item)** - inserts a new node before specified node
- **insertAfter(node, item)** - inserts a new node after specified node
- **deleteNode(node)** - deletes the specified node
- **deleteHead()** - deletes the head node
- **deleteTail()** - deletes the tail node
- **clear()** - removes all nodes from the linked list
- **toArray()** - converts the linkedlist to an array suitable for serialization, with the first item in the list being the head of the list

### Linked List Node Properties

The `getHead()`, `getTail()` and `find()` methods return nodes which have the following properties:

- **data** - the value of the node, may be anything (string, number, object, etc...)
- **prev** - the reference/pointer to the previous node in the list
- **next** - the reference/pointer to the next node in the list

## Examples

```javascript
// ESM
import { structLinkedListFactory } from '@zerodep/app';

// CJS
const { structLinkedListFactory } = require('@zerodep/app');
```

### Adding, Removing and Getting Nodes

```typescript
const linkedlist = structLinkedlistFactory<string>(['c', 'd']);

// add items to the start of the list
linkedlist.prepend('b');
linkedlist.prepend('a');

// add items to the end of the list
linkedlist.append('e');
linkedlist.append('f');

linkedlist.size(); // 6
linkedlist.toArray(); // ["a", "b", "c", "d", "e", "f"]

const head = linkedlist.getHead(); // { "data": "a", "prev": null, "next": [Object] }
const tail = linkedlist.getTail(); // { "data": "f", "prev": [Object], "next": null }

const thirdItem = head.next.next; // { "data": "c", "prev": [Object], "next": [Object] }
linkedList.insertBefore(thirdItem, 'pre-c');
linkedList.insertAfter(thirdItem, 'post-c');
linkedList.deleteNode(thirdItem);
linkedlist.toArray(); // ["a", "b", "pre-c", "post-c", "d", "e", "f"]

linkedList.deleteHead();
linkedList.deleteTail();

const newHead = linkedList.getHead(); // { "data": "b", "prev": null, "next": [Object] }
const newTail = linkedList.getTail(); // { "data": "e", "prev": [Object], "next": null }

linkedList.clear();
linkedList.toArray(); // []
```

### Searching the List

```typescript
const linkedlist = structLinkedlistFactory<string>(['aaa1', 'aaa2', 'aaa3', 'aaa4', 'aaa5']);

// comparators must return a boolean
const comparator = (val: string) => val.endsWith('3');

const node = linkedlist.find(comparator); // { "data": "aaa3", "prev": [Object], "next": [Object] }
```

### Iterating the List

```typescript
const linkedlist = structLinkedlistFactory<string>(['a', 'b', 'c', 'd', 'e', 'f']);

const result: array[] = [];

for (const value of linkedList) {
  result.push(value);
}

console.log(result); // ["a", "b", "c", "d", "e", "f"]
```

### Walking the List

```typescript
const linkedlist = structLinkedlistFactory<string>(['a', 'b', 'c', 'd', 'e', 'f']);

// going forwards
const head: LinkedListNode = linkedlist.getHead(); // { "data": "a", "prev": null, "next": [Object] }
const fourthItem = head?.next?.next?.next; // { "data": "d", "prev": [Object], "next": [Object] }

// going backwards
const tail: LinkedListNode = linkedlist.getTail(); // { "data": "a", "prev": [Object] , "next": null}
const fourthPreviousItem = tail?.prev?.prev?.prev?.prev; // { "data": "b", "prev": [Object], "next": [Object] }
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "struct" factories
npm i @zerodep/struct

# only this @zerodep package
npm i @zerodep/struct-linkedlist
```

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.5.0] - 2023-08-28

**Added**

- added this package
