export const isTypedArray = (value: unknown): boolean => {
  // Use a Set for O(1) average-time complexity lookups
  const typedArrayTypes = new Set([
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
  ]);

  try {
    // Cache the result of Object.prototype.toString.call(value)
    const valueType = Object.prototype.toString.call(value);
    return typedArrayTypes.has(valueType);
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
