# @zerodep/struct_collection

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/struct_collection?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct_collection) [![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/struct_collection?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/struct_collection) [![tree shaking](https://img.shields.io/badge/tree%20shaking-supported-blue?style=flat-square)](https://bundlephobia.com/package/@zerodep/struct_collection) ![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square) ![types](https://badgen.net/npm/types/@zerodep/struct_collection?style=flat-square)

![coverage](https://img.shields.io/badge/coverage-100%25-green?style=flat-square) ![last commit](https://img.shields.io/github/last-commit/cdepage/zerodep?style=flat-square) ![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@zerodep/struct_collection?style=flat-square)

[![Code Quality](https://www.codefactor.io/repository/github/cdepage/zerodep/badge?style=flat-square)](https://www.codefactor.io/repository/github/cdepage/zerodep) ![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/cdepage/zerodep)

**A collection data structure implementation.**

A way to model collections of data, take actions on the collections and items in those collections.

## tl;dr

A short explanation / quick reference:

```typescript
import { collectionFactory } from '@zerodep/struct_stack';

const collectionA = collectionFactory<string>();
collectionA.add('item 1');
collectionA.add('item 2');
collectionA.size(2);

const collectionB = collectionFactory<string>();
collectionB.fromArray(['item 2', 'item 3']);

const unionCollection = collectionA.union(collectionB);
unionCollection.toArray(); // ['item 1', 'item 2', 'item3'];

const intersectionCollection = collectionA.intersection(collectionB);
intersectionCollection.toArray(); // ['item 2'];

const differenceCollection = collectionA.difference(collectionB);
differenceCollection.toArray(); // ['item 1'];

const subsetCollection = collectionA.subset(collectionB);
subsetCollection.toArray(); // ['item 2'];
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

This utility is available from multiple @zerodep packages, enabling developers to select the most appropriately sized package (for both kb and capability) for different use cases. We believe one size does not fit all or most. See [@zerodep/app](https://www.npmjs.com/package/@zerodep/app) and [@zerodep/is](https://www.npmjs.com/package/@zerodep/is).

```
// all @zerodep features, capabilities and utilities
npm install @zerodep/app

// all @zerodep "struct" components
npm install @zerodep/struct

// only the struct_collection package
npm install @zerodep/struct_collection
```

Of course, you may use `yarn`, `pnpm`, or the package manager of your choice. Only `npm` examples are shown for brevity.

This package may also be found on both [jsDelivr](https://cdn.jsdelivr.net/npm/@zerodep/struct_collection/umd.js) and [unpkg](https://unpkg.com/@zerodep/struct_collection/umd.js) in UMD, ESM and CJS formats.

## How to Use

This package exports the following:

- **Functions**
  - `collectionFactory` - returns an instance of a Collection

### Signature

Typescript declarations:

```typescript
interface StructCollection<T> extends IterableIterator<T> {
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  add: (item: T) => void;
  has: (item: T) => boolean;
  size: () => number;
  remove: (item: T) => boolean;
  clear: () => void;
  union: (otherCollection: Collection<T>) => Collection<T>;
  intersection: (otherCollection: Collection<T>) => Collection<T>;
  difference: (otherCollection: Collection<T>) => Collection<T>;
  isSubset: (otherCollection: Collection<T>) => boolean;
}

declare const collectionFactory: <T = any>() => StructCollection<T>;
```

### Examples

```typescript
import { collectionFactory } from '@zerodep/struct_collection';

// incremental addition of items
const collectionA = collectionFactory<string>();
collectionA.add('item 1');
collectionA.add('item 2');
collectionA.add('item 3');
collectionA.add('item 4');

// bulk creation of the collection
const collectionB = collectionFactory<string>();
collectionB.fromArray(['item 4', 'item 5', 'item 6']);
collectionB.removeItem('item 6'); // true
collectionB.has('item 5'); // true
collectionB.has('item 6'); // false

// union/merge collections & serialization
const unionCollection = collectionA.union(collectionB);
unionCollection.size(); // 5
unionCollection.toArray(); // ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']

// isSubset
collectionA.isSubset(unionCollection); // true
collectionB.isSubset(unionCollection); // true
unionCollection.isSubset(collectionA); // false

// intersection
const intersectionCollection = collectionA.intersection(collectionB);
intersectionCollection.toArray(); // ['item 4']

// difference
const diffCollectionA = collectionA.difference(collectionB);
diffCollectionA.toArray(); // ['item 1', 'item 2', 'item 3']
```

## Related Packages

The following @zerodep packages may be helpful or more appropriate for your specific case:

- [@zerodep/struct_queue](https://www.npmjs.com/package/@zerodep/struct_queue) - a queue data structure
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
- [Changelog](https://github.com/cdepage/zerodep/blob/main/packages/format/struct_collection/CHANGELOG.md)
- [Contributing Guide](https://github.com/cdepage/zerodep/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/cdepage/zerodep/blob/main/CODE_OF_CONDUCT.md)

## License

[MIT](https://github.com/cdepage/zerodep/blob/main/LICENSE)
