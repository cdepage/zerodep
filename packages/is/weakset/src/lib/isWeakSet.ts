export const isWeakSet = <T extends object>(
  value: unknown,
): value is WeakSet<T> => {
  return Object.prototype.toString.call(value) === '[object WeakSet]';
};
