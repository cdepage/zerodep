export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};
