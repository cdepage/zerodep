/* eslint-disable @typescript-eslint/ban-ts-comment */
export interface StructCollection<T> extends IterableIterator<T> {
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  add: (item: T) => void;
  has: (item: T) => boolean;
  size: () => number;
  remove: (item: T) => boolean;
  clear: () => void; // same syntax as Map() and Set()
  union: (otherCollection: StructCollection<T>) => StructCollection<T>;
  intersection: (otherCollection: StructCollection<T>) => StructCollection<T>;
  difference: (otherCollection: StructCollection<T>) => StructCollection<T>;
  isSubset: (otherCollection: StructCollection<T>) => boolean;
}

export const collectionFactory = <T = any>(): StructCollection<T> => {
  const collection: Set<T> = new Set();

  return {
    // time complexity: linear - O(n)
    fromArray: (data: T[]) => {
      for (const item of data) {
        collection.add(item);
      }
    },

    // time complexity: linear - O(n)
    toArray: () => [...collection],

    // time complexity: constant - O(1)
    add: (item: T) => {
      collection.add(item);
    },

    // time complexity: constant - O(1)
    has: (item: T) => collection.has(item),

    // time complexity: constant - O(1)
    size: () => collection.size,

    // time complexity: constant - O(1)
    remove: (item: T) => collection.delete(item),

    // time complexity: constant - O(1)
    clear: () => collection.clear(),

    // time complexity: linear - O(n)
    union: (otherCollection: StructCollection<T>) => {
      const unionCollection = collectionFactory<T>();
      unionCollection.fromArray([...collection, ...otherCollection.toArray()]);
      return unionCollection;
    },

    // time complexity: linear - O(n)
    intersection: (otherCollection: StructCollection<T>) => {
      const intersectionCollection = collectionFactory<T>();
      for (const item of collection) {
        if (otherCollection.has(item)) {
          intersectionCollection.add(item);
        }
      }
      return intersectionCollection;
    },

    // time complexity: linear - O(n)
    difference: (otherCollection: StructCollection<T>) => {
      const differenceCollection = collectionFactory<T>();
      for (const item of collection) {
        if (!otherCollection.has(item)) {
          differenceCollection.add(item);
        }
      }
      return differenceCollection;
    },

    // is the current collection a subset of another (hopefully larger) collection
    // time complexity: linear - O(n)
    isSubset: (otherCollection: StructCollection<T>) =>
      [...collection].every((item) => otherCollection.has(item)),

    // time complexity: linear - O(n)
    // @ts-ignore
    [Symbol.iterator]() {
      const items = [...collection];
      let ndx = 0;
      return {
        next() {
          if (ndx < items.length) {
            ndx += 1;
            return { value: items[ndx - 1], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
};
