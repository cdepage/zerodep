import { ZeroDepError } from '@zerodep/errors';
import { testData } from '../../../../testValues';
import { guardBoolean } from './guardBoolean';

// extract the positive test cases, the rest will be negative
const { booleans, ...rest } = testData;
const positiveCases = [...booleans];
const negativeCases = Object.values(rest).flat();

describe('guardBoolean', () => {
  describe('with default options', () => {
    const guard = guardBoolean;

    it('should throw a ZeroDepError error when invalid', () => {
      const fn = () => guard('not an integer');
      expect(fn).toThrow(ZeroDepError);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a boolean');
    });
  });
});
