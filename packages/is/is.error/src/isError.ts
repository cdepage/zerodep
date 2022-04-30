export const isError = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Error]';
};
