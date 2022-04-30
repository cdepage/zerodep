/**
 * Developer Note:
 * - Yes, there is a Number.isInteger() method
 * - Yes, there is a Number.isFinite() method
 * - No, it does not work on new Number() constructs
 */
export const isFloat = (value: any): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    value % 1 !== 0 &&
    Math.abs(value) !== Infinity &&
    !Number.isNaN(value)
  );
};
