export const isError = (value: unknown, errorType?: any): value is Error => {
  try {
    // Check if value is an instance of Error
    if (!(value instanceof Error)) {
      return false;
    }

    // Check if value is an instance of the specified error type/subclass
    return !(errorType && !(value instanceof errorType));
  } catch {
    // Return false for any unhandled cases
    return false;
  }
};
