export const isPromise = <T>(value: unknown): value is Promise<T> => {
  return Object.prototype.toString.call(value) === '[object Promise]';
};
