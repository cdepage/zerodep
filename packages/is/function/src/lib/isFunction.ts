export const isFunction = (value: unknown): boolean => {
  try {
    const type = Object.prototype.toString.call(value);
    return type === '[object Function]' || type === '[object AsyncFunction]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
