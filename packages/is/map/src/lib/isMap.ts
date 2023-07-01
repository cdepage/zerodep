export const isMap = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Map]';
};
