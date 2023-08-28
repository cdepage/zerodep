export interface LinkedListNode<T> {
  data: T;
  prev: LinkedListNode<T> | null;
  next: LinkedListNode<T> | null;
}

export interface LinkedList<T> {
  size: () => number;
  getHead: () => LinkedListNode<T> | null;
  getTail: () => LinkedListNode<T> | null;

  prepend: (item: T) => void;
  append: (data: T) => void;

  find: (comparator: (data: T) => boolean) => LinkedListNode<T> | null;

  insertBefore: (node: LinkedListNode<T>, data: T) => void;
  insertAfter: (node: LinkedListNode<T>, data: T) => void;

  deleteNode: (node: LinkedListNode<T>) => void;
  deleteHead: () => void;
  deleteTail: () => void;

  clear: () => void;
  toArray: () => T[];
  toArrayReverse: () => T[];

  [Symbol.iterator](): Iterator<T | null>;
}

export const structLinkedListFactory = <T = unknown>(
  data: T[] = []
): LinkedList<T> => {
  let headNode: LinkedListNode<T> | null = null;
  let tailNode: LinkedListNode<T> | null = null;
  let size = 0;

  const linkedList: LinkedList<T> = {
    // time complexity: constant - O(1)
    size: () => size,

    // time complexity: constant - O(1)
    getHead: () => headNode,

    // time complexity: constant - O(1)
    getTail: () => tailNode,

    // time complexity: constant - O(1)
    prepend: (data: T) => {
      const node: LinkedListNode<T> = {
        data: data,
        prev: null,
        next: headNode || null,
      };
      size += 1;
      headNode = node;

      if (!tailNode) {
        tailNode = node;
      }
    },

    // time complexity: constant - O(1)
    append: (data: T) => {
      const node: LinkedListNode<T> = {
        data,
        prev: tailNode || null,
        next: null,
      };
      size += 1;

      if (tailNode) {
        tailNode.next = node;
      }

      tailNode = node;

      if (!headNode) {
        headNode = node;
      }
    },

    // time complexity: semi-linear - O(n/2)
    find: (comparator: (data: T) => boolean) => {
      const checkNext = (node: LinkedListNode<T>): LinkedListNode<T> | null => {
        if (comparator(node.data)) {
          return node;
        }
        return node.next ? checkNext(node.next) : null;
      };

      return headNode ? checkNext(headNode) : null;
    },

    // time complexity: constant - O(1)
    insertBefore: (node: LinkedListNode<T>, data: T) => {
      const prevNode = node.prev;
      const newNode: LinkedListNode<T> = {
        data: data,
        prev: prevNode,
        next: node,
      };
      size += 1;

      if (node.prev) {
        node.prev.next = newNode;
      } else {
        headNode = newNode;
      }

      node.prev = newNode;
    },

    // time complexity: constant - O(1)
    insertAfter: (node: LinkedListNode<T>, data: T) => {
      const nextNode = node.next;
      const newNode: LinkedListNode<T> = {
        data: data,
        prev: node,
        next: nextNode,
      };
      size += 1;

      if (node.next) {
        node.next.prev = newNode;
      } else {
        tailNode = newNode;
      }

      node.next = newNode;
    },

    // time complexity: constant - O(1)
    deleteNode: (node: LinkedListNode<T>) => {
      // connect previous node to next node, or set it as the head node
      if (node.prev) {
        node.prev.next = node.next || null;
      } else {
        headNode = node.next || null;
      }

      // connect next node to previous node, or set the previous node as the tail
      if (node.next) {
        node.next.prev = node.prev || null;
      } else {
        tailNode = node.prev || null;
      }

      size -= 1;
    },

    // time complexity: constant - O(1)
    deleteHead: () => {
      const headNode = linkedList.getHead();
      if (headNode) {
        linkedList.deleteNode(headNode);
      }
    },

    // time complexity: constant - O(1)
    deleteTail: () => {
      const tailNode = linkedList.getTail();
      if (tailNode) {
        linkedList.deleteNode(tailNode);
      }
    },

    // time complexity: constant - O(1)
    clear: () => {
      headNode = null;
      tailNode = null;
      size = 0;
    },

    // time complexity: linear - O(n)
    toArray: () => {
      const array: T[] = [];
      if (!headNode) {
        return array;
      }

      const addToArray = (node: LinkedListNode<T>): T[] => {
        array.push(node.data);
        return node.next ? addToArray(node.next) : array;
      };

      return addToArray(headNode);
    },

    // time complexity: linear - O(n)
    toArrayReverse: () => {
      const array: T[] = [];
      if (!tailNode) {
        return array;
      }

      const addToArray = (node: LinkedListNode<T>): T[] => {
        array.push(node.data);
        return node.prev ? addToArray(node.prev) : array;
      };

      return addToArray(tailNode);
    },

    // time complexity: linear - O(n)
    [Symbol.iterator]() {
      let node = headNode;
      return {
        next() {
          let value: T | null = null;
          let done = true;

          if (node !== null) {
            value = node.data;
            done = false;
            node = node.next;
          }

          return {
            value,
            done,
          };
        },
      };
    },
  };

  for (const datum of data) {
    linkedList.append(datum);
  }

  return linkedList;
};
