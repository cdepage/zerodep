import { testData, testPromise1, testPromise2 } from '../../../../testValues';
import { isPromise } from './isPromise';

// extract the positive test cases, the rest will be negative
const { promises, promiseAlls, ...rest } = testData;
const positiveCases = [...promises, ...promiseAlls];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isPromise(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isPromise(value)).toEqual(false);
    }
  );

  // Specific cases
  it('should return TRUE for a resolved promise', () => {
    expect(isPromise(Promise.resolve(1))).toEqual(true);
  });
  it('should return TRUE for a Promise.race', () => {
    const race = Promise.race([testPromise1, testPromise2]);
    expect(isPromise(race)).toEqual(true);
  });
  it('should return TRUE for a Promise.allSettled', () => {
    const race = Promise.allSettled([testPromise1, testPromise2]);
    expect(isPromise(race)).toEqual(true);
  });
});
