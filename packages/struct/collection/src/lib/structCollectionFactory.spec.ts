import { structCollectionFactory } from './structCollectionFactory';

jest.useFakeTimers();

describe('structCollectionFactory', () => {
  it('should create a collection with expected interface methods', () => {
    const collection = structCollectionFactory();
    expect(collection).toHaveProperty('fromArray');
    expect(collection).toHaveProperty('toArray');
    expect(collection).toHaveProperty('add');
    expect(collection).toHaveProperty('has');
    expect(collection).toHaveProperty('size');
    expect(collection).toHaveProperty('delete');
    expect(collection).toHaveProperty('clear');
    expect(collection).toHaveProperty('union');
    expect(collection).toHaveProperty('intersection');
    expect(collection).toHaveProperty('difference');
    expect(collection).toHaveProperty('isSubsetOf');
  });

  describe('instance', () => {
    const collection = structCollectionFactory<number>();

    beforeEach(() => {
      collection.clear();
    });

    it('should populate from an array', () => {
      collection.fromArray([1, 2, 3, 4, 5]);
      expect(collection.size()).toEqual(5);
    });

    it('should convert to an array', () => {
      collection.add(10);
      collection.add(20);
      collection.add(20);
      expect(collection.toArray()).toEqual([10, 20]);
    });

    it('should add items to the collection and have the correct size', () => {
      expect(collection.size()).toEqual(0);
      collection.add(1);
      collection.add(2);
      expect(collection.size()).toEqual(2);
    });

    it('should indicate if a known value is in a collection', () => {
      collection.add(1);
      expect(collection.has(1)).toEqual(true);
    });

    it('should indicate if an unknown value is in a collection', () => {
      expect(collection.has(86)).toEqual(false);
    });

    it('should remove a value from a collection', () => {
      collection.add(1);
      collection.add(2);
      expect(collection.has(1)).toEqual(true);
      collection.delete(1);
      expect(collection.has(1)).toEqual(false);
      expect(collection.has(2)).toEqual(true);
      expect(collection.size()).toEqual(1);
    });

    it('should clear a collection', () => {
      collection.add(1);
      collection.add(2);
      expect(collection.size()).toEqual(2);
      collection.clear();
      expect(collection.size()).toEqual(0);
    });
  });

  describe('advanced features', () => {
    const collection1 = structCollectionFactory();
    const collection2 = structCollectionFactory();
    const collection3 = structCollectionFactory();

    beforeEach(() => {
      collection1.fromArray(['a', 'b', 'c', 'd', 'e']);
      collection2.fromArray(['a', 'b', 'c']);
      collection3.fromArray(['d', 'e', 'f', 'g']);
    });

    it('should create a union between two collections', () => {
      const union = collection1.union(collection3);
      expect(union.toArray()).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });

    it('should find the intersection between two sets, when one exists', () => {
      const intersection = collection1.intersection(collection2);
      expect(intersection.toArray()).toEqual(['a', 'b', 'c']);
    });

    it('should find the intersection between two sets, when none exists', () => {
      const intersection = collection2.intersection(collection3);
      expect(intersection.toArray()).toEqual([]);
    });

    it('should create a difference between two collections', () => {
      const diff = collection1.difference(collection2);
      expect(diff.toArray()).toEqual(['d', 'e']);
    });

    it('should determine if a collection is a subset of another, when true', () => {
      const isSubject = collection2.isSubsetOf(collection1);
      expect(isSubject).toEqual(true);
    });

    it('should determine if a collection is a subset of another, when false', () => {
      const isSubject = collection2.isSubsetOf(collection3);
      expect(isSubject).toEqual(false);
    });
  });

  describe('iterable', () => {
    const collection = structCollectionFactory();
    collection.fromArray(['a', 'b', 'c', 'd', 'e']);

    it('should be iterable', () => {
      const res: string[] = [];

      for (const letter of collection) {
        res.push(letter);
      }
      expect(res).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
  });

  describe('should handle objects', () => {
    const collection = structCollectionFactory();

    collection.add({ a: 1 });
    collection.add({ a: 1 });
    expect(collection.toArray()).toEqual([{ a: 1 }]);

    collection.delete({ a: 1 });
    expect(collection.size()).toEqual(0);
  });
});
