import { objectMerge } from './objectMerge';

// objectMerge is not yet released
describe.skip('deepMerge function', () => {
  it('should merge two objects deeply', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: { e: 3 },
      },
    };

    const obj2 = {
      a: 4,
      b: {
        c: 5,
        d: { f: 6 },
      },
      g: 7,
    };

    const mergedObj = objectMerge(obj1, obj2);

    expect(mergedObj).toEqual({
      a: 4,
      b: {
        c: 5,
        d: { e: 3, f: 6 },
      },
      g: 7,
    });
  });

  test('should handle non-object values', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
      },
    };

    const obj2 = {
      a: 'new value',
      b: null,
      d: [1, 2, 3],
    };

    const mergedObj = objectMerge(obj1, obj2);

    expect(mergedObj).toEqual({
      a: 'new value',
      b: null,
      d: [1, 2, 3],
    });
  });

  it('should not mutate input objects', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
      },
    };

    const obj2 = {
      a: 'new value',
      b: null,
    };

    const mergedObj = objectMerge(obj1, obj2);

    expect(obj1).toEqual({
      a: 1,
      b: {
        c: 2,
      },
    });

    expect(obj2).toEqual({
      a: 'new value',
      b: null,
    });

    // Ensure mergedObj is a new object
    expect(mergedObj).not.toBe(obj1);
    expect(mergedObj).not.toBe(obj2);
  });
});
