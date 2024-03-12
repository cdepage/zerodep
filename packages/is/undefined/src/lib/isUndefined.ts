export const isUndefined = (value: unknown): boolean => {
  try {
    return typeof value === 'undefined';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
