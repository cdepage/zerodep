export const isSymbol = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Symbol]';
};
