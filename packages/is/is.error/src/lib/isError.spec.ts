import { testData } from '../../../testValues';
import { isError } from './isError';

const negativeCases = Object.values(testData).flat();

const positiveCases = [
  // error
  ['error', new Error('test error')],
];

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isError(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isError(value)).toEqual(false);
  });
});
