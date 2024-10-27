export const isTypedArray = (value: unknown): boolean => {
  try {
    return (
      [
        '[object BigInt64Array]',
        '[object BigUint64Array]',
        '[object Float32Array]',
        '[object Float64Array]',
        '[object Int16Array]',
        '[object Int32Array]',
        '[object Int8Array]',
        '[object SharedArrayBuffer]',
        '[object Uint16Array]',
        '[object Uint32Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
      ].indexOf(Object.prototype.toString.call(value)) !== -1
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
