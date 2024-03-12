export const isWeakMap = (value: unknown): boolean => {
  try {
    return Object.prototype.toString.call(value) === '[object WeakMap]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
