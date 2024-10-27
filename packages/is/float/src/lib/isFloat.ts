/**
 * Developer Note:
 * - Yes, there is a Number.isInteger() method
 * - Yes, there is a Number.isFinite() method
 * - No, they do not work on new Number() constructs
 */
export const isFloat = (value: unknown): boolean => {
  try {
    // it must be a number
    if (Object.prototype.toString.call(value) !== '[object Number]') {
      return false;
    }

    // zero is always allowed
    if (value === 0) {
      return true;
    }

    return (
      (value as number) % 1 !== 0 &&
      Math.abs(value as number) !== Infinity &&
      !Number.isNaN(value)
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
