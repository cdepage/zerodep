export const isAsync = (value: unknown): boolean => {
  try {
    const type = Object.prototype.toString.call(value);
    return (
      type === '[object Async]' ||
      type === '[object AsyncAsync]' ||
      type === '[object AsyncFunction]' ||
      type === '[object Generator]' ||
      type === '[object AsyncGenerator]' ||
      type === '[object Promise]' ||
      value?.constructor?.name === 'AsyncFunction'
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
