export const isAsync = (value: unknown): boolean => {
  try {
    const type = Object.prototype.toString.call(value);

    // checking for a value in a set is an O(1) operation
    const asyncTypes = new Set([
      '[object Async]',
      '[object AsyncAsync]',
      '[object AsyncFunction]',
      '[object Generator]',
      '[object AsyncGenerator]',
      '[object Promise]',
    ]);

    return asyncTypes.has(type) || value?.constructor?.name === 'AsyncFunction';
  } catch {
    return false;
  }
};
