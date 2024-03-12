export const isArray = (value: unknown): boolean => {
  try {
    return Array.isArray(value);
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
