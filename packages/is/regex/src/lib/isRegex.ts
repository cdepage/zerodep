export const isRegex = (value: unknown): boolean => {
  try {
    return Object.prototype.toString.call(value) === '[object RegExp]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
