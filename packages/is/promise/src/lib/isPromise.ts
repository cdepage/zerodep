export const isPromise = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Promise]';
};
