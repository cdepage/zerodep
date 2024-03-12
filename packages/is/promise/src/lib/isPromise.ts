export const isPromise = (value: unknown): boolean => {
  try {
    return Object.prototype.toString.call(value) === '[object Promise]';
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
