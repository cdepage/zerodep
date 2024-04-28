export const isBoolean = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Boolean]';
};
