/**
 * Developer Note:
 * - Yes, there is a Number.isInteger() method
 * - Yes, there is a Number.isFinite() method
 * - No, they do not work on new Number() constructs
 */
export const isFloat = (value: unknown): boolean => {
  return (
    Object.prototype.toString.call(value) === '[object Number]' &&
    (value as number) % 1 !== 0 &&
    Math.abs(value as number) !== Infinity &&
    !Number.isNaN(value)
  );
};
