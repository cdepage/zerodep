export const isArray = <T>(value: unknown): value is Array<T> => {
  try {
    return Array.isArray(value);
  } catch {
    // anything not handled by the above code is definitely false
    return false;
  }
};
