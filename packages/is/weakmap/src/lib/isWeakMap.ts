export const isWeakMap = <K extends object, V>(
  value: unknown,
): value is WeakMap<K, V> => {
  return Object.prototype.toString.call(value) === '[object WeakMap]';
};
