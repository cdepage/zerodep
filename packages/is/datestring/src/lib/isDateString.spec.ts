import { isDateString } from './isDateString';

describe('isDateString', () => {
  it('recognises ISO date (YYYY‑MM‑DD)', () => {
    expect(isDateString('2023-08-15')).toBe(true);
  });

  it('recognises European date (DD/MM/YYYY)', () => {
    expect(isDateString('15/08/2023')).toBe(true);
  });

  it('recognises European date with dots (DD.MM.YYYY)', () => {
    expect(isDateString('15.08.2023')).toBe(true);
  });

  it('recognises European date with spaces (D M YYYY)', () => {
    expect(isDateString('15 08 2023')).toBe(true);
  });

  it('recognises US date (MM/DD/YYYY)', () => {
    expect(isDateString('08/15/2023')).toBe(true);
  });

  it('recognises US date with dashes (MM‑DD‑YYYY)', () => {
    expect(isDateString('08-15-2023')).toBe(true);
  });

  it('recognises Reverse date (YYYY/MM/DD)', () => {
    expect(isDateString('2023/08/15')).toBe(true);
  });

  it('recognises Reverse dash date (YYYY‑DD‑MM)', () => {
    expect(isDateString('2023-15-08')).toBe(false);
  });

  it('recognises Compact date (YYYYMMDD)', () => {
    expect(isDateString('20230815')).toBe(true);
  });

  it('recognises YYMMDD date (assumes 2000‑2099)', () => {
    expect(isDateString('230815')).toBe(true);
  });

  it('trims surrounding whitespace', () => {
    expect(isDateString(' 2023-08-15 ')).toBe(true);
  });
});

describe('isDateString – invalid dates and formats', () => {
  it('rejects an ISO datetime with Z suffix', () => {
    expect(isDateString('2023-08-15T12:34:56Z')).toBe(false);
  });

  it('rejects an ISO datetime with offset', () => {
    expect(isDateString('2023-08-15T12:34:56+02:00')).toBe(false);
  });

  it('rejects an impossible ISO date (day out of range)', () => {
    expect(isDateString('2023-02-30')).toBe(false);
  });

  it('rejects non‑leap‑year Feb 29', () => {
    expect(isDateString('2023-02-29')).toBe(false);
  });

  it('rejects an invalid European date (day out of range)', () => {
    expect(isDateString('32/01/2023')).toBe(false);
  });

  it('rejects an invalid Reverse date (month out of range)', () => {
    expect(isDateString('2023/13/01')).toBe(false);
  });

  it('rejects a malformed string that looks like a date', () => {
    expect(isDateString('2023-08-15T')).toBe(false);
  });

  it('rejects completely unrelated strings', () => {
    expect(isDateString('not-a-date')).toBe(false);
  });
});

describe('isDateString - readme', () => {
  it('should handle a 2025-08-26', () => {
    expect(isDateString('2025-08-26')).toBe(true);
  });
  it('should handle a 26/08/2025', () => {
    expect(isDateString('26/08/2025')).toBe(true);
  });
  it('should handle a 26.08.2025', () => {
    expect(isDateString('26.08.2025')).toBe(true);
  });
  it('should handle a 26 8 2025', () => {
    expect(isDateString('26 8 2025')).toBe(true);
  });
  it('should handle a 08/26/2025', () => {
    expect(isDateString('08/26/2025')).toBe(true);
  });
  it('should handle a 08-26-2025', () => {
    expect(isDateString('08-26-2025')).toBe(true);
  });
  it('should handle a 20250826', () => {
    expect(isDateString('20250826')).toBe(true);
  });

  it('should handle a 2025/26/08', () => {
    expect(isDateString('2025/26/08')).toBe(false);
  });
  it('should handle a 2025-26-08', () => {
    expect(isDateString('2025-26-08')).toBe(false);
  });
  it('should handle a 20252608', () => {
    expect(isDateString('20252608')).toBe(false);
  });

  it('should handle a []]', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString([])).toBe(false);
  });
  it('should handle a [1, 2, 3]', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString([1, 2, 3])).toBe(false);
  });
  it("should handle a ['a', 'b', 'c']", () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(['a', 'b', 'c'])).toBe(false);
  });
  it('should handle a 42n', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(42n)).toBe(false);
  });
  it('should handle a 0n', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(0n)).toBe(false);
  });
  it('should handle a -0n', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(-0n)).toBe(false);
  });
  it('should handle a -42n)', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(-42n)).toBe(false);
  });
  it('should handle a true', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(true)).toBe(false);
  });
  it('should handle a false', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(false)).toBe(false);
  });
  it('should handle a Date())', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(new Date())).toBe(false);
  });
  it('should handle a xxxx', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(null)).toBe(false);
  });
  it('should handle an undefined', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(undefined)).toBe(false);
  });
  it('should handle anm Error', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(new Error('message'))).toBe(false);
  });
  it('should handle a float', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(3.14)).toBe(false);
  });
  it('should handle a zero float', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(0.0)).toBe(false);
  });
  it('should handle a negative zero float', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(-0.0)).toBe(false);
  });
  it('should handle a negative float', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(-3.14)).toBe(false);
  });
  it('should handle a MIN_VALUE', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(Number.MIN_VALUE)).toBe(false);
  });
  it('should handle a function', () => {
    // @ts-expect-error - intentionally invalid type
    expect(isDateString(() => 'function')).toBe(false);
  });
});
