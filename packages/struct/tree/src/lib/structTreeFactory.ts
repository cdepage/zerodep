import { ZeroDepError } from '@zerodep/errors';
import { isEqual } from '@zerodep/is-equal';

export interface TreeNode<T> {
  data: T;
  parent: TreeNode<T> | null;
  children: TreeNode<T>[] | null;
}

export interface Tree<T> {
  getRootNode: () => TreeNode<T> | null;
  setRootNode: (data: T) => TreeNode<T>;
  addChild: (node: TreeNode<T>, data: T) => TreeNode<T>;
  addChildren: (node: TreeNode<T>, data: T[]) => TreeNode<T>[];

  dfs: (comparator: (data: T) => boolean) => TreeNode<T> | null;
  bfs: (comparator: (data: T) => boolean) => TreeNode<T> | null;

  dfsFilter: (comparator: (data: T) => boolean) => TreeNode<T>[] | [];
  bfsFilter: (comparator: (data: T) => boolean) => TreeNode<T>[] | [];

  deleteNode: (node: TreeNode<T>) => void;

  toJSON: () => TreeJson<T> | null;
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

export const structTreeFactory = <T = unknown>(json?: TreeJson<T>) => {
  let rootNode: TreeNode<T> | null = null;

  const tree: Tree<T> = {
    // time complexity: constant - O(1)
    getRootNode: () => rootNode,

    // time complexity: constant - O(1)
    setRootNode: (data: T) => {
      if (rootNode) {
        throw new ZeroDepError('Root node already defined');
      }
      rootNode = { data, parent: null, children: null };
      return rootNode;
    },

    // time complexity: constant - O(1)
    addChild: (node: TreeNode<T>, data) => {
      node.children = node.children || [];
      const newChild = { data, parent: node, children: null };
      node.children.push(newChild);
      return newChild;
    },

    // time complexity: linear - O(n)
    addChildren: (node: TreeNode<T>, items: T[]) => {
      node.children = node.children || [];
      const newChildren = items.map((data) => ({
        data,
        parent: node,
        children: null,
      }));
      node.children.push(...newChildren);
      return newChildren;
    },

    // time complexity: linear - O(n)
    dfs: (comparator: (data: T) => boolean) => {
      if (!rootNode) {
        return null;
      }

      let match: TreeNode<T> | null = null;

      const searchDepthFirst = (children: TreeNode<T>[]): void => {
        for (const child of children) {
          if (match) {
            return;
          }
          if (comparator(child.data)) {
            match = child;
            return;
          }
          if (child.children) {
            searchDepthFirst(child.children);
          }
        }
      };
      if (rootNode.children) {
        searchDepthFirst(rootNode.children);
      }

      return match;
    },

    // time complexity: linear - O(n)
    bfs: (comparator: (data: T) => boolean) => {
      if (!rootNode) {
        return null;
      }

      let match: TreeNode<T> | null = null;

      const searchBreadthFirst = (children: TreeNode<T>[]) => {
        for (const child of children) {
          // as this is a recursive function there has to be a way to break out of all levels
          if (match) {
            return;
          }
          if (comparator(child.data)) {
            match = child;
            return;
          }
        }

        for (const child of children) {
          if (!match && child.children) {
            searchBreadthFirst(child.children);
          }
        }
      };

      if (rootNode.children) {
        searchBreadthFirst(rootNode.children);
      }

      return match;
    },

    // time complexity: linear - O(n)
    dfsFilter: (comparator: (data: T) => boolean) => {
      if (!rootNode) {
        return [];
      }

      const matches: TreeNode<T>[] = [];

      const searchDepthFirst = (children: TreeNode<T>[]): void => {
        for (const child of children) {
          if (comparator(child.data)) {
            matches.push(child);
          }
          if (child.children) {
            searchDepthFirst(child.children);
          }
        }
      };
      if (rootNode.children) {
        searchDepthFirst(rootNode.children);
      }

      return matches;
    },

    // time complexity: linear - O(n)
    bfsFilter: (comparator: (data: T) => boolean) => {
      if (!rootNode) {
        return [];
      }

      const matches: TreeNode<T>[] = [];

      const searchBreadthFirst = (children: TreeNode<T>[]) => {
        for (const child of children) {
          if (comparator(child.data)) {
            matches.push(child);
          }
        }

        for (const child of children) {
          if (child.children) {
            searchBreadthFirst(child.children);
          }
        }
      };

      if (rootNode.children) {
        searchBreadthFirst(rootNode.children);
      }

      return matches;
    },

    // time complexity: linear - O(n)
    deleteNode: (node: TreeNode<T>) => {
      // edge case: root node
      if (!node.parent) {
        rootNode = null;
        return;
      }

      const parentNode = node.parent;
      parentNode.children = parentNode.children!.filter(
        (child) => !isEqual(node.data, child.data)
      );

      // ensure empty children are nullified
      if (!parentNode.children.length) {
        parentNode.children = null;
      }
    },

    // time complexity: linear - O(n)
    toJSON: (): TreeJson<T> | null => {
      if (!rootNode) {
        return null;
      }

      const obj = { data: rootNode.data, children: [] };

      const getChildren = (children: TreeNode<T>[]): any => {
        return children.map((child) => ({
          data: child.data,
          children: child.children ? getChildren(child.children) : undefined,
        }));
      };

      obj.children = rootNode.children
        ? getChildren(rootNode.children)
        : undefined;

      return obj;
    },
  };

  // populate from constructor
  if (json) {
    const { children = null, data = undefined, ...rest } = json;
    const rn = tree.setRootNode(data || rest);

    const populateChildren = (node: TreeNode<T>, children: TreeJson<T>[]) => {
      for (const child of children) {
        const { children, data, ...rest } = child;
        const newChildNode = tree.addChild(node, data ?? rest);
        if (children) {
          populateChildren(newChildNode, children);
        }
      }
    };

    if (children) {
      populateChildren(rn, children);
    }
  }

  return tree;
};
