# @zerodep/struct-tree

[![version](https://img.shields.io/npm/v/@zerodep/struct-tree?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-tree)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A factory function that returns an optionally-typed Tree data structure instance

Full documentation is available at the [zerodep.app](http://zerodep.app/#/struct/tree) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { structTreeFactory } from '@zerodep/struct-tree';
// or
const { structTreeFactory } = require('@zerodep/struct-tree');
```

### Use Case

```typescript
const tree = structTreeFactory<string>();

// populate the root node
const rootNode = tree.setRootNode('root');

// add children
const aNode = tree.addChild(rootNode, 'a1');
const bNode = tree.addChild(rootNode, 'b1');

// add grandchildren
tree.addChild(aNode, 'aa11');
tree.addChild(aNode, 'aa22');
tree.addChild(bNode, 'bb11');
tree.addChild(bNode, 'bb22');
tree.addChild(bNode, 'bb33');

// depth-first search
const comparator1 = (data: string) => data.endsWith('1');
const match1 = tree.dfs(comparator); // { "data": "a1", "parent": [Object], "children": null }

// depth-first filter
const matches1 = tree.dfsFilter(comparator1);
// [
//   { "data": "a1", "parent": [Object], "children": [[Object], [Object]] }
//   { "data": "aa11", "parent": [Object], "children": null }
//   { "data": "b1", "parent": [Object], "children": [[Object], [Object], [Object]] }
//   { "data": "bb11", "parent": [Object], "children": null }
// ]

// breadth-first search
const comparator2 = (data: string) => data.endsWith('1');
const match2 = tree.bfs(comparator); // { "data": "a1", "parent": [Object], "children": null }

// breadth-first filter
const matches2 = tree.dfsFilter(comparator2);
// [
//   { "data": "a1", "parent": [Object], "children": [[Object], [Object]] }
//   { "data": "b1", "parent": [Object], "children": [[Object], [Object], [Object]] }
//   { "data": "aa11", "parent": [Object], "children": null }
//   { "data": "bb11", "parent": [Object], "children": null }
// ]

// export/serialize
const json = tree.toJSON();
// {
//   "data": "root",
//   "children": [
//     {
//       "data": "a1",
//       "children": [
//         { "data": "aa11" },
//         { "data": "aa22" }
//       ]
//     }
//     {
//       "data": "b1",
//       "children": [
//         { "data": "bb11" },
//         { "data": "bb22" },
//         { "data": "bb33" }
//       ]
//     }
//   ],
// }
```
