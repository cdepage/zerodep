export const isPromise = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Promise]';
};
