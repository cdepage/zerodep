export const isDate = (value: unknown): boolean => {
  if (Object.prototype.toString.call(value) !== '[object Date]') {
    return false;
  }

  // javascript date objects are annoying
  if (value === 'Invalid Date') {
    return false;
  }

  // since invalid strings & numbers can be used to create a date, check that the date works
  try {
    const ms = (value as Date).getTime();
    return !Number.isNaN(ms);
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
