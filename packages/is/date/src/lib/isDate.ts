export const isDate = (value: unknown): value is Date => {
  if (typeof value === 'object' && value !== null && value instanceof Date) {
    // Check for invalid date strings by verifying getTime() doesn't return NaN
    const ms = value.getTime();
    return !Number.isNaN(ms);
  }

  return false;
};
