import { Stringifiable, toString } from '@zerodep/to-string';
import { hash } from './hash';

export interface Collection<T> {
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  add: (item: T) => void;
  has: (item: T) => boolean;
  values: () => IterableIterator<T>;
  size: () => number;
  delete: (item: T) => void;
  clear: () => void; // same syntax as Map() and Set()
  union: (otherCollection: Collection<T>) => Collection<T>;
  intersection: (otherCollection: Collection<T>) => Collection<T>;
  difference: (otherCollection: Collection<T>) => Collection<T>;
  isSubsetOf: (otherCollection: Collection<T>) => boolean;

  [Symbol.iterator](): Iterator<T | null>;
}

export const structCollectionFactory = <T = any>(
  items: T[] = []
): Collection<T> => {
  const collection: Map<number, T> = new Map();

  // add constructor items
  for (const item of items) {
    const key = hash(toString(item as Stringifiable));
    collection.set(key, item);
  }

  return {
    // time complexity: linear - O(n)
    fromArray: (data: T[]) => {
      for (const item of data) {
        const key = hash(toString(item as Stringifiable));
        collection.set(key, item);
      }
    },

    // time complexity: linear - O(n)
    toArray: () => [...collection.values()],

    // time complexity: constant - O(1)
    add: (item: T) => {
      const key = hash(toString(item as Stringifiable));
      if (!collection.has(key)) {
        collection.set(key, item);
      }
    },

    // time complexity: constant - O(1)
    has: (item: T) => {
      const key = hash(toString(item as Stringifiable));
      return collection.has(key);
    },

    values: () => collection.values(),

    // time complexity: constant - O(1)
    size: () => collection.size,

    // time complexity: constant - O(1)
    delete: (item: T) => {
      const key = hash(toString(item as Stringifiable));
      collection.delete(key);
    },

    // time complexity: constant - O(1)
    clear: () => collection.clear(),

    // time complexity: linear - O(n)
    union: (otherCollection: Collection<T>) => {
      const unionCollection = structCollectionFactory<T>();
      for (const value of collection.values()) {
        unionCollection.add(value);
      }
      for (const value of otherCollection.values()) {
        unionCollection.add(value);
      }
      return unionCollection;
    },

    // time complexity: linear - O(n)
    intersection: (otherCollection: Collection<T>) => {
      const intersectionCollection = structCollectionFactory<T>();

      for (const item of collection.values()) {
        if (otherCollection.has(item)) {
          intersectionCollection.add(item);
        }
      }
      return intersectionCollection;
    },

    // time complexity: linear - O(n)
    difference: (otherCollection: Collection<T>) => {
      const differenceCollection = structCollectionFactory<T>();
      for (const item of collection.values()) {
        if (!otherCollection.has(item)) {
          differenceCollection.add(item);
        }
      }
      return differenceCollection;
    },

    // is the current collection a subset of another (hopefully larger) collection
    // time complexity: linear - O(n)
    isSubsetOf: (otherCollection: Collection<T>) =>
      [...collection.values()].every((item) => otherCollection.has(item)),

    // time complexity: linear - O(n)
    [Symbol.iterator]() {
      const items = [...collection.values()];
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
