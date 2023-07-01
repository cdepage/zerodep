# @zerodep/struct_queue

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct_queue?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct_queue) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct_queue?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct_queue) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/struct_queue) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/struct_queue?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/struct_queue?style=flat-square)

**A queue data structure implementation with event emitting.**

## tl;dr

A short explanation / quick reference:

```typescript
import { queueFactory } from '@zerodep/struct_queue';

const queue = queueFactory();
queue.enque('item 1');
queue.enque('item 2');
queue.enque('item 3');

queue.front(); // "item 1"
queue.dequeue(); // "item 1"
queue.front(); // "item 2"
queue.size(); // 2
```

## Table of Contents

- [Installation Instructions](#install)
- [How to Use](#how-to-use)
  - [Signature](#signature)
  - [Examples](#examples)
- [Related Packages](#related-packages)
- [ZeroDep Advantages](#advantages-of-zerodep-packages)
- [Support](#support)
- [Semver](#semver)
- [Resources](#resources)
- [License](#license)

## Install

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app) and [@zerodep/struct_queue](https://www.npmjs.com/package/@zerodep/struct_queue).

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// all @zerodep "struct" components
npm install @zerodep/struct

// only the struct_queue package
npm install @zerodep/struct_queue
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

This package may also be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/struct_queue/umd.js) and [unpkg](https://unpkg.com/@zerodep/struct_queue/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `queueFactory` - returns an instance of a Queue

### Signature

Typescript declarations:

```typescript
type EventCallback<T> = (params: T) => void;

interface QueueEvents<T> {
  enqueued: {
    name: string; // event name
    ts: number; // timestamp (e.g. Date.now())
    payload: T;
  };
  dequeued: {
    name: string; // event name
    ts: number; // timestamp
    payload: T;
  };
  emptied: {
    name: string; // event name
    ts: number; // timestamp
  };
}

interface StructQueue<T> {
  // queue methods
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  front: () => T | undefined;
  size: () => number;
  isEmpty: () => boolean;
  clear: () => void;

  // event emitter methods
  on: (event: string, callback: EventCallback) => void;
  first: (event: string, callback: EventCallback) => void;
  once: (event: string, callback: EventCallback) => void;
  off: (event: string, callback: EventCallback) => void;
}

declare const queueFactory: <T = any>(
  name: string,
  data?: T[]
) => StructQueue<T>;
```

### Examples

**Using Default Configuration Options**

```typescript
import { queueFactory } from '@zerodep/struct_queue';

// setup the queue
const queue1 = queueFactory('my queue');

// add event listeners (optional)
queue1.on('enqueued', ({ name, ts, payload }) => {
  console.log(name); // "my queue"
  console.log(ts); // 1668002876928
  console.log(payload); // your enqueued data
});
queue1.on('dequeued', ({ name, ts, payload }) => {
  console.log(name); // "my queue"
  console.log(ts); // 1668002942712
  console.log(payload); // your dequeued data
});
queue1.on('emptied', ({ name, ts }) => {
  console.log(name); // "my queue"
  console.log(ts); // 1668002970674
});

// add something to the queue
queue1.enqueue({ some: 'object 1' });
queue1.enqueue({ some: 'object 2' });

// see what's next
queue1.front(); // { "some": "object 1" }

// dequeue the next item
queue1.dequeue(); // { "some": "object 1" }

// miscellaneous helpers
queue1.size(); // 1
queue1.isEmpty(); // false
queue1.clear();
queue1.isEmpty(); // true

// populate queue at creation
const queue2 = queueFactory('another queue', ['item 1', 'item 2', 'item 3']);
queue2.front(); // 'item 1'

// serialization
const queue3 = queueFactory('3rd queue');
queue3.fromArray([{ item: 1 }, { item: 2 }, { item: 3 }]);
queue3.toArray(); // [{ "item": 1 }, { "item": 2 }, { "item": 3 }]
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/struct_collection](https://www.npmjs.com/package/@zerodep/struct_collection) - a collection data structure
- [@zerodep/struct_stack](https://www.npmjs.com/package/@zerodep/struct_stack) - a stack data structure

## Advantages of @zerodep Packages

We help make source code more readable, more secure, faster to craft, less likely to have hidden defects, and easier to maintain.

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases `node_modules` folder size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples and helpful tips
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **ESM & CJS** - has both ecmascript modules and common javascript exports, both are fully tree-shakable
- **CDN Available** - available on fast content delivery networks in UMD, CJS and ESM formats
- **FP Inspired** - gently opinionated to encourage functional programming style for cleaner and more maintainable software
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability

## Support

All @zerodep packages are built for the ES2020 specification. Should you need to support older environments you will need to add appropriate [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill). All packages are tested on the following platforms/browsers:

**Browsers**

- Chrome - last 2 major versions
- Firefox - last 2 major versions
- Safari - last 2 major versions
- Edge - last 2 major versions
- Android - last 2 major versions
- iOS - last 2 major versions

**Node**

- v18.x - Hydrogen LTS
- v16.x - Gallium LTS

It is likely the package will work on other technologies and version, however development and testing effort is only spent on the above.

## Semver

All [@zerodep](https://github.com/cdepage/zerodep) packages, including this one, adhere to Semantic Versioning practices:

- **major versions**: correlates with breaking changes to one or more method signatures
- **minor versions**: includes addition of new functionality or backwards-compatible software improvements
- **patch versions**: are reserved for copy changes, documentation enhancements and bug fixes

The above said, a security best practice is to pin your software packages to specific versions and only upgrade to more recent releases after careful inspection of any CHANGELOG, release notes and all software changes.

## Resources

- [Security Policy](https://github.com/cdepage/zerodep/blob/main/SECURITY.md)
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/format/struct_queue/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
