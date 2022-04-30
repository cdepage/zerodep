export const isMap = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Map]';
};
