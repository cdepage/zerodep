# @zerodep/struct-linkedlist

[![version](https://img.shields.io/npm/v/@zerodep/struct-linkedlist?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-linkedlist)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A factory function that returns an optionally-typed, iterable Doubly Linked List data structure instance.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/linkedlist) site.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { structLinkedListFactory } from '@zerodep/struct-linkedlist';
// or
const { structLinkedListFactory } = require('@zerodep/struct-linkedlist');
```

### Use Case

A linked list may contain strings, numbers, objects or arrays. This example uses strings for simplicity.

```typescript
const ll = structLinkedListFactory();

// append items to the linked list (to the end)
ll.append('c');
ll.append('d');

// prepend items to the linked list (at the start)
ll.prepend('b');
ll.prepend('a');

ll.size(); // 4

ll.toArray(); // ["a", "b", "c", "d"]

const head = ll.getHead(); // { data: "a", prev: null, next: [Object] }
const tail = ll.getTail(); // { data: "c", prev: [Object], next: null }

console.log(head.next.data); // "b"
console.log(tail.prev.data); // "c"

ll.insertBefore(tail, 'c2');
ll.insertAfter(head, 'a2');
ll.toArray(); // ["a", "a2", "b", "c", "c2", "d"]

ll.deleteHead();
ll.deleteTail();
const newHead = ll.getHead(); // { data: "a2", prev: null, next: [Object] }

const nextNode = newHead.next; // { data: "b", prev: [Object], next: [Object] }
ll.deleteNode(nextNode);

ll.toArray(); // ["a2", "c",  "c2"]

// iterable
const values = [];
for (const val of ll) {
  array.push(val);
}
console.log(values); // ["a2", "c",  "c2"]
```
