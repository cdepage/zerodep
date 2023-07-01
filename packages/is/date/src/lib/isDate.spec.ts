import { testData } from '../../../../testValues';
import { isDate } from './isDate';

// extract the positive test cases, the rest will be negative
const { dates, ...rest } = testData;
const positiveCases = [...dates];
const negativeCases = Object.values(rest).flat();

describe('isDate', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isDate(value)).toEqual(true);
  });

  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isDate(value)).toEqual(false);
    }
  );

  it('should not treat a non-date string as a date', () => {
    const date = new Date('a string');
    const res = isDate(date);
    expect(res).toEqual(false);
  });
});
