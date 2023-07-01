export interface StructStack<T> {
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  size: () => number;
  clear: () => void; // same syntax as Map() and Set()
}

export const stackFactory = <T = any>(data: T[] = []): StructStack<T> => {
  let items: T[] = [...data];

  return {
    // time complexity: linear - O(n)
    fromArray: (data: T[]) => {
      items = [...data];
    },

    // time complexity: constant - O(1)
    toArray: () => items,

    // time complexity: constant - O(1)
    push: (item: T) => {
      items.push(item);
    },

    // time complexity: constant - O(1)
    pop: (): T | undefined => {
      return items.pop();
    },

    // ES2020 version, ES2022 has "Array.at()"
    // time complexity: constant - O(1)
    peek: (): T => items.slice(-1)[0],

    // time complexity: constant - O(1)
    clear: () => {
      items = [];
    },

    // time complexity: constant - O(1)
    size: () => items.length,
  };
};
