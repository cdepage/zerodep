export const isNil = (value: unknown): boolean => {
  try {
    return value === null || typeof value === 'undefined';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
