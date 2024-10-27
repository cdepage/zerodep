# @zerodep/struct-stack

[![version](https://img.shields.io/npm/v/@zerodep/struct-stack?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-stack)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A factory function that returns an optionally-typed Stack data structure instance

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/stack) page.

## Signature

```typescript
declare const structStackFactory: <T = any>(items?: T[]) => Stack<T>;

interface Stack<T> {
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  size: () => number;
  clear: () => void;
  toArray: () => T[];
}
```

### Factory Parameters

The `structStackFactory` function has the following parameters:

- **items** - an optional array of items with which to populate the stack, last item in the array is the top item in the stack, or, first item is at the bottom of the stack

### Stack Methods

The `structStackFactory` returns an object with the following methods:

- **push()** - adds an item to the top of the stack
- **pop()** - gets and removes an item from the top of the stack
- **peek()** - gets the item from the top of the stack, does not remove it
- **size()** - how many items are in the stack
- **clear()** - removes all items from the stack
- **toArray()** - converts the stack to an array suitable for serialization, first item in the stack is the last item in the array, or, bottom item in the stack is the first value of the array

## Examples

```javascript
// ESM
import { structStackFactory } from '@zerodep/struct-stack';

// CJS
const { structStackFactory } = require('@zerodep/struct-stack');
```

### Simple Case

```javascript
const stack = structStackFactory();

// add items to the stack
stack.push('a');
stack.push('b');
stack.push('c');

// size()
stack.size(); // 3

// pop()
stack.pop(); // "c"

// peek()
stack.peek(); // "b"

// toArray()
stack.toArray(); // ["a", "b"]
```

### Populate at Creation

```javascript
const stack = structStackFactory(['aa', 'bb', 'cc', 'dd']);

// size()
stack.size(); // 4

// toArray()
stack.toArray(); // ["aa", "bb", "cc", "dd"]
```

### Export/Serialize a Stack

```javascript
const stack = structStackFactory(['aa', 'bb', 'cc', 'dd']);
stack.push('ee');
stack.push('ff');

// export items
const items = stack.toArray();
console.log(items); // ["aa", "bb", "cc", "dd", "ee", "ff"]
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
