import { toInteger } from '@zerodep/to-integer';
import { isString } from '@zerodep/is-string';

// Helper function
function isValidDateValues(year: number, month: number, day: number): boolean {
  // Basic range checks
  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  // More precise validation using Date object
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// ISO Date (YYYY-MM-DD) and ISO DateTime
function isIsoDate(dateString: string): boolean {
  // Basic ISO date YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split('-').map(Number);
    return isValidDateValues(year, month, day);
  }

  return false;
}

// European Date (DD/MM/YYYY)
function isEuropeanDate(dateString: string): boolean {
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    const [day, month, year] = dateString.split('/').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// European Date with Dots (DD.MM.YYYY)
function isEuropeanDotDate(dateString: string): boolean {
  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateString)) {
    const [day, month, year] = dateString.split('.').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// European Date with Spaces (D.M.YYYY)
function isEuropeanSpaceDate(dateString: string): boolean {
  if (/^\d{1,2} \d{1,2} \d{4}$/.test(dateString)) {
    const [day, month, year] = dateString.split(' ').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// US Date (MM/DD/YYYY)
function isUsDate(dateString: string): boolean {
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    const [month, day, year] = dateString.split('/').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// US Date with Dashes (MM-DD-YYYY)
function isUsDashDate(dateString: string): boolean {
  if (/^\d{1,2}-\d{1,2}-\d{4}$/.test(dateString)) {
    const [month, day, year] = dateString.split('-').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// Reverse Date (YYYY/MM/DD)
function isReverseDate(dateString: string): boolean {
  if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(dateString)) {
    const [year, month, day] = dateString.split('/').map(Number);
    return isValidDateValues(year, month, day);
  }
  return false;
}

// Compact Date (YYYYMMDD)
function isCompactDate(dateString: string): boolean {
  if (/^\d{8}$/.test(dateString)) {
    const year = toInteger(dateString.substring(0, 4));
    const month = toInteger(dateString.substring(4, 6));
    const day = toInteger(dateString.substring(6, 8));
    return isValidDateValues(year, month, day);
  }
  return false;
}

// YYMMDD Format
function isYYMMDDDate(dateString: string): boolean {
  if (/^\d{6}$/.test(dateString)) {
    const year = 2000 + parseInt(dateString.substring(0, 2));
    const month = parseInt(dateString.substring(2, 4));
    const day = parseInt(dateString.substring(4, 6));
    return isValidDateValues(year, month, day);
  }
  return false;
}

export const isDateString = (value: string): boolean => {
  if (!isString(value)) {
    return false;
  }
  const trimmed = value.trim();

  return (
    isIsoDate(trimmed) ||
    isEuropeanDate(trimmed) ||
    isEuropeanDotDate(trimmed) ||
    isEuropeanSpaceDate(trimmed) ||
    isUsDate(trimmed) ||
    isUsDashDate(trimmed) ||
    isReverseDate(trimmed) ||
    isCompactDate(trimmed) ||
    isYYMMDDDate(trimmed)
  );
};
