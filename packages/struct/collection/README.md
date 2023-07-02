# @zerodep/struct-collection

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct-collection?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-collection)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct-collection?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct-collection)
[![version](https://img.shields.io/npm/v/@zerodep/struct-collection?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-collection)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A factory function that returns an optionally-typed, iterable, Collection data structure instance.

A `Collection` is like a JavaScript `Set` with better object comparison (for uniqueness of its members) and a few new methods for comparison and operations between `Collections`.

Full documentation is available at the [zerodep.app](http://zerodep.app/to/string) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { structCollectionFactory } from '@zerodep/struct-collection';
// or
const { structCollectionFactory } = require('@zerodep/struct-collection');
```

### Use Case

```typescript
const collectionA = structCollectionFactory<string>(['item 1', 'item  2', 'item 3']);

const collectionB = structCollectionFactory<string>(['item 3', 'item 4']);

// size()
collectionA.size(); // 3
collectionB.size(); // 2

// has()
collectionA.has('item 1'); // true
collectionA.has('item 4'); // false

// add()
collectionB.add('item 5');

// delete()
collectionA.delete('item 1');

// union()
const unionCollection = collectionA.union(collectionB);
unionCollection.toArray(); // ['item 2', 'item 3', 'item 4', 'item 5'];

// intersection()
const intersectionCollection = collectionA.intersection(collectionB);
intersectionCollection.toArray(); // ['item 3'];

// difference()
const differenceCollection = collectionA.difference(collectionB);
differenceCollection.toArray(); // ['item 2', 'item 4', 'item 5'];

// isSubsetOf()
collectionA.isSubsetOf(collectionB); // false
collectionA.isSubsetOf(unionCollection); // true

// iterate with values()
for (const item of collectionA.values()) {
  // your code here
}
```
