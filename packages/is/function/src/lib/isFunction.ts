export const isFunction = <T>(value: unknown): value is T => {
  return typeof value === 'function';
};
