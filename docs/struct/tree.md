# structTreeFactory()

[![version](https://img.shields.io/npm/v/@zerodep/struct-tree?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/struct-tree)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A factory function that returns an optionally-typed, Tree data structure instance.

## Signature

```typescript
const structTreeFactory: <T = unknown>(json?: TreeJson<T> | undefined) => Tree<T>;

interface Tree<T> {
  getRootNode: () => TreeNode<T> | null;
  setRootNode: (data: T) => TreeNode<T>;
  addChild: (node: TreeNode<T>, data: T) => TreeNode<T>;
  addChildren: (node: TreeNode<T>, data: T[]) => TreeNode<T>[];
  dfs: (comparator: (data: T) => boolean) => TreeNode<T> | null;
  bfs: (comparator: (data: T) => boolean) => TreeNode<T> | null;
  dfsFilter: (comparator: (data: T) => boolean) => TreeNode<T>[];
  bfsFilter: (comparator: (data: T) => boolean) => TreeNode<T>[];
  deleteNode: (node: TreeNode<T>) => void;
  toJSON: () => TreeJson<T> | null;
}

interface TreeNode<T> {
  data: T;
  parent: TreeNode<T> | null;
  children: TreeNode<T>[] | null;
}

type TreeJson<T> =
  | {
      data?: T;
      children?: TreeJson<T>[];
    }
  | {
      children?: TreeJson<T>[];
      [key: string]: any;
    };
```

### Factory Parameters

The `structTreeFactory` accepts an optional `json` object with the following shape:

- **children** - the array of children values of the node (may have their own `children` properties)
- **data** - optional data of the node, will be used as the data source if provided
- **[key:string]: any** - optional key:value tuples of data, will be used to fill the `data` of the node

### Tree Methods

The `structTreeFactory` returns an object with the following methods:

- **getRootNode()** - returns the root node of the tree
- **setRootNode()** - sets and returns the root node of the tree
- **addChild(node, data)** - add a child node to the specified node
- **addChildren(node, data)** - add multiple child nodes to the specified node
- **dfs(comparator)** - depth-first search using a provided comparator that returns the first match
- **bfs(comparator)** - breadth-first search using a provided comparator that returns the first match
- **dfsFilter(comparator)** - depth-first filtering of a tree returning all nodes that match the comparator
- **bfsFilter(comparator)** - breadth-first filtering of a tree returning all nodes that match the comparator
- **deleteNode(node)** - remove a node and all of its children from three
- **toJSON()** - converts the tree to an object suitable for serialization

### Tree Node Properties

The `getRootNode()`, `dfs()`, `bfs()`, `dfsFilter()` and `bfsFilter()` methods return node(s) that have the following properties:

- **data** - the value of the node, may be anything (string, number, object, etc...)
- **parent** - the reference/pointer to the parent node in the tree
- **children** - the reference/pointer to the children nodes of the current node, if any

## Examples

### Building a Tree

```typescript
const tree = structTreeFactory<string>();

// populate the root node
const rootNode = tree.setRootNode('root'); // { "data": "root", "parent": null, "children": null }

// add children
const aNode = tree.addChild(rootNode, 'aaa'); // { "data": "aaa", "parent": [Object], "children": null }
const bNode = tree.addChild(rootNode, 'bbb'); // { "data": "bbb", "parent": [Object], "children": null }

// add grandchildren
tree.addChild(aNode, 'aaa111');
tree.addChild(aNode, 'aaa222');
tree.addChild(bNode, 'bbb333');
tree.addChild(bNode, 'bbb444');
tree.addChild(bNode, 'bbb555');

// serialization
const json = tree.toJSON();
// {
//   "data": "root",
//   "children": [
//     {
//       "data": "aaa",
//       "children": [
//         { "data": "aaa111" },
//         { "data": "aaa222" },
//       ]
//     },
//     {
//       "data": "bbb",
//       "children": [
//         { "data": "bbb333" },
//         { "data": "bbb444" },
//         { "data": "bbb555" }
//       ]
//     }
//   ]
// }
```

### Populating and Searching a Tree

```typescript
const json: TreeJson<string> = {
  data: 'root',
  children: [
    {
      data: 'aaa',
      children: [{ data: 'aaa111' }, { data: 'aaa222' }],
    },
    {
      data: 'bbb',
      children: [{ data: 'bbb111' }, { data: 'bbb222' }, { data: 'bbb333' }],
    },
  ],
};
const tree = structTreeFactory<string>(json);

// depth-first search
const comparator1 = (data: string) => data.endsWith('222');
const match1 = tree.dfs(comparator1); // { "data": "aaa222", "parent": [Object], "children": null }

// breadth-first search
const comparator2 = (data: string) => data.endsWith('333');
const match2 = tree.bfs(comparator2); // { "data": "bbb333", "parent": [Object], "children": null }

// depth-first filter
const comparator3 = (data: string) => data.startsWith('aaa');
const matches3 = tree.bfs(comparator3);
// [
//   { "data": "aaa", "parent": [Object], "children": [[Object], [Object]] }
//   { "data": "aaa111", "parent": [Object], "children": null }
//   { "data": "aaa222", "parent": [Object], "children": null }
// ]

// breadth-first filter
const comparator4 = (data: string) => data.startsWith('bbb');
const matches4 = tree.bfs(comparator4);
// [
//   { "data": "bbb", "parent": [Object], "children": [[Object], [Object], [Object]] }
//   { "data": "bbb111", "parent": [Object], "children": null }
//   { "data": "bbb222", "parent": [Object], "children": null }
//   { "data": "bbb333", "parent": [Object], "children": null }
// ]
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "struct" factories
npm i @zerodep/struct

# only this @zerodep package
npm i @zerodep/struct-tree
```

then

```javascript
import { structTreeFactory, Tree, TreeNode, TreeJson } from '@zerodep/app';
// or
import { structTreeFactory, Tree, TreeNode, TreeJson } from '@zerodep/struct';
// or
import { structTreeFactory, Tree, TreeNode, TreeJson } from '@zerodep/struct-tree';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.6.0] - 2023-08-29

**Added**

- added this package
