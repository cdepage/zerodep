export const isNull = (value: unknown): boolean => {
  try {
    return value === null;
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
