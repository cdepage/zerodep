export const isError = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Error]';
};
