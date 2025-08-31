/**
 * Developer Note:
 * - Yes, there is a Number.isInteger() method
 * - Yes, there is a Number.isFinite() method
 * - No, they do not work on new Number() constructs
 */
export const isFloat = (value: unknown): value is number => {
  // it must be a number
  if (typeof value !== 'number') {
    return false;
  }

  // Handle special cases for zero and NaN
  if (value === 0 || !Number.isFinite(value) || Number.isNaN(value)) {
    return value === 0; // Only true for zero, false otherwise
  }

  // Check if the number is a float
  return value % 1 !== 0;
};
