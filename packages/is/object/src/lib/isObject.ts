const objectConstructor = {}.constructor;

export const isObject = <T extends object>(value: unknown): value is T => {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    value !== null &&
    // @ts-expect-error - override intended
    value.constructor === objectConstructor
  );
};
