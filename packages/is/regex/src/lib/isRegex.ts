export const isRegex = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object RegExp]';
};
