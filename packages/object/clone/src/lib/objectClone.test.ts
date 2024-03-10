/* eslint-disable @typescript-eslint/ban-ts-comment */
import { objectClone } from './objectClone';

describe('objectClone', () => {
  it('should deeply clone an object with nested values', () => {
    const originalObject = {
      a: 1,
      b: {
        c: 2,
        d: [3, 4, { e: 5 }],
      },
    };

    const clonedObject = objectClone(originalObject);

    // Ensure the original object remains unchanged
    expect(originalObject).toEqual({
      a: 1,
      b: {
        c: 2,
        d: [3, 4, { e: 5 }],
      },
    });

    // Ensure the cloned object is deeply equal to the original object
    expect(clonedObject).toEqual(originalObject);

    // Ensure the cloned object is a new object
    expect(clonedObject).not.toBe(originalObject);
  });

  it('should handle non-object values and return them as-is', () => {
    const originalValue = 'test';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const clonedValue = objectClone(originalValue);

    // Ensure non-object values are returned as-is
    expect(clonedValue).toEqual('test');
    expect(clonedValue).toBe(originalValue);
  });

  it('should handle arrays and deeply clone their elements', () => {
    const originalArray = [1, { a: 2 }, [3, { b: 4 }]];
    const clonedArray = objectClone(originalArray);

    // Ensure the original array remains unchanged
    expect(originalArray).toEqual([1, { a: 2 }, [3, { b: 4 }]]);

    // Ensure the cloned array is deeply equal to the original array
    expect(clonedArray).toEqual(originalArray);

    // Ensure the cloned array is a new array
    expect(clonedArray).not.toBe(originalArray);

    // Ensure the elements of the array are deeply cloned
    // @ts-ignore
    expect(clonedArray[1]).not.toBe(originalArray[1]);
    // @ts-ignore
    expect(clonedArray[2]).not.toBe(originalArray[2]);
  });
});
