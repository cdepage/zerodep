# structCollectionFactory()

[![version](https://img.shields.io/npm/v/@zerodep/struct-collection?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-collection)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A factory function that returns an optionally-typed, iterable, Collection data structure instance.

A `Collection` is like a JavaScript `Set` with better object comparison (for uniqueness of its members) and a few new methods for comparison and operations between `Collections`.

## Signature

```typescript
declare const structCollectionFactory: <T = any>(items?: T[]) => Collection<T>;

interface Collection<T> {
  add: (item: T) => void;
  has: () => boolean;
  delete: () => T | undefined;
  clear: () => void;
  size: () => number;
  toArray: () => T[];
  union: (col: Collection<T>) => Collection<T>;
  difference: (col: Collection<T>) => Collection<T>;
  intersection: (col: Collection<T>) => Collection<T>;
  isSubsetOf: (col: Collection<T>) => boolean;
  values: () => IterableIterator<T>;
}
```

### Factory Parameters

The `structCollectionFactory` function has the following parameters:

- **items** - an optional array of items with which to populate the collection

### Collection Methods

The `structCollectionFactory` returns an object with the following methods:

- **add()** - adds an item to the collection (if it doesn't already exist in it)
- **has()** - checks if an item exists in the collection
- **delete()** - deletes an item from the collection
- **clear()** - deletes all items from the collection
- **size()** - how many items are in the collection
- **toArray()** - converts the collection to an array suitable for serialization
- **union()** - merges the current collection with another collection, returns a new collection
- **difference()** - determines the differences between the current and provided collections, returns a new collection
- **intersection()** - determines the intersection (overlap) between the current and provided collections, returns a new collection
- **isSubsetOf()** - determines if the collection is a subset of a provided collection

## Examples

```javascript
// ESM
import { structCollectionFactory } from '@zerodep/app';

// CJS
const { structCollectionFactory } = require('@zerodep/app');
```

### Simple Case

```javascript
const collection = structCollectionFactory();

// add items to the collection
collection.add('a');
collection.add('b');
collection.add('c');

// check collection size
collection.size(); // 3

// check if a collection has an item
collection.has('a'); // true
collection.has('xxxx'); // false

// delete an item from a collection and check if it's there
collection.delete('c');
collection.has('c'); // false
```

### Populate at Creation

```javascript
const collection = structCollectionFactory(['aa', 'bb', 'cc', 'dd']);

// check collection size
collection.size(); // 4
```

### Export/Serialize a Collection

```javascript
const collection = structCollectionFactory(['aa', 'bb', 'cc', 'dd']);
collection.push('ee');
collection.push('ff');

// export items
collection.toArray(); // ["aa", "bb", "cc", "dd", "ee", "ff"]
```

### Merge Collections

```javascript
const collectionA = structCollectionFactory(['aa', 'bb', 'cc']);
const collectionB = structCollectionFactory(['cc', 'dd', 'ee']);

// union returns a new collection
const collectionC = collectionA.union(collectionB);

// the "cc" values were merged
collectionC.size(); // 5

// export items
collectionC.toArray(); // ["aa", "bb", "cc", "dd", "ee"]
```

### Difference Between Collections

```javascript
const collectionA = structCollectionFactory(['aa', 'bb', 'cc']);
const collectionB = structCollectionFactory(['cc', 'dd', 'ee']);

collectionC = collectionA.difference(collectionB);

// export items
collectionC.toArray(); // ["aa", "bb", "dd", "ee"]
```

### Intersection Between Collections

```javascript
const collectionA = structCollectionFactory(['aa', 'bb', 'cc']);
const collectionB = structCollectionFactory(['cc', 'dd', 'ee']);

collectionC = collectionA.intersection(collectionB);

// export items
collectionC.toArray(); // ["cc"]
```

### Is Subset

```javascript
const collectionA = structCollectionFactory(['a', 'b', 'c', 'd', 'e']);
const collectionB = structCollectionFactory(['b', 'c', 'd']);

collectionA.isSubsetOf(collectionB); // false
collectionB.isSubsetOf(collectionA); // true
```

### Adding Duplicate Values

```javascript
const collectionA = structCollectionFactory(['a', 'b', 'c', 'd', 'e']);
collection.size(); // 5

collection.add('c'); // <-- item already exists, duplicates are ignored
collection.size(); // 5
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "struct" factories
npm i @zerodep/struct

# only this @zerodep package
npm i @zerodep/struct-collection
```

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-01

**Added**

- added this package
