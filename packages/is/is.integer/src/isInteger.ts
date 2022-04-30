/**
 * Developer Note:
 * - Yes, there is a Number.isInteger() method
 * - No, it does not work on new Number() constructs
 */
export const isInteger = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Number]' && value % 1 === 0;
};
