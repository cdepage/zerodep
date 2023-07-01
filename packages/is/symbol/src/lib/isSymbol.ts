export const isSymbol = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Symbol]';
};
