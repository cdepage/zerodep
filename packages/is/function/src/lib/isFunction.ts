export const isFunction = (value: unknown): boolean => {
  try {
    return Object.prototype.toString.call(value) === '[object Function]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
