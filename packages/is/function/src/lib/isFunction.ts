export const isFunction = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Function]';
};
