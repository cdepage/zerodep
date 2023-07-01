import { testData } from '../../../../testValues';
import { isPojo } from './isPojo';

// extract the positive test cases, the rest will be negative
const { arraysSafe, objectLiteralsSafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...objectLiteralsSafe];
const negativeCases = Object.values(rest).flat();

describe('isPojo', () => {
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    expect(isPojo(value)).toEqual(true);
  });

  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      expect(isPojo(value)).toEqual(false);
    }
  );
});
