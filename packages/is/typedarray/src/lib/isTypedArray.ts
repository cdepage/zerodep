export const isTypedArray = (value: unknown): boolean => {
  try {
    return (
      [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]',
      ].indexOf(Object.prototype.toString.call(value)) !== -1
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
