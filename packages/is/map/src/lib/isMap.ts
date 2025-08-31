export const isMap = <K, V>(value: unknown): value is Map<K, V> => {
  return value instanceof Map;
};
