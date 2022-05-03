import { ZeroDepErrorFormat } from '@zerodep/errors';
import { CurrencyOptions, localeSettings } from '@zerodep/locale.settings';
import { toNumber } from '@zerodep/to.number';
import { countryCurrencyMap } from './lib/countryCurrencyMap';

export type FormatCurrencyOptions = CurrencyOptions;

export const formatCurrencyHOF = (options?: FormatCurrencyOptions) => {
  // load default options inside HOF to pick up any changes made to the localeSettings package
  const defaultOptions = localeSettings.getCurrencyDefaults();

  const configs = { ...defaultOptions, ...options, style: 'currency' };

  // ensure there is a currency set
  if (!configs.currency) {
    const countryCode = configs.locale!.slice(-2);
    configs.currency = countryCurrencyMap[countryCode];
  }

  const { locale, ...intlOptions } = configs;
  const numberFormatter = new Intl.NumberFormat(locale, intlOptions);

  return (value: string | number | BigInt): string => {
    try {
      const number = toNumber(value);

      if (configs.fractionDigits === 'show') {
        return numberFormatter.format(number);
      }

      // build the formatted number from its parts, excluding the decimal & fraction
      const roundedNumber = Number(number.toFixed(0));
      const parts = numberFormatter.formatToParts(roundedNumber);
      return parts
        .filter((part) => part.type !== 'decimal' && part.type !== 'fraction')
        .map((part) => part.value)
        .join('');
    } catch {
      const error = new ZeroDepErrorFormat('Cannot format value to currency');
      error.value = value;

      throw error;
    }
  };
};

export const formatCurrency = formatCurrencyHOF();

// convenience methods
export const formatCurrencyCADen = formatCurrencyHOF({ currency: 'CAD', locale: 'en-CA' });
export const formatCurrencyCADfr = formatCurrencyHOF({ currency: 'CAD', locale: 'fr-CA' });
export const formatCurrencyEURde = formatCurrencyHOF({ currency: 'EUR', locale: 'de-DE' });
export const formatCurrencyEURfr = formatCurrencyHOF({ currency: 'EUR', locale: 'fr-FR' });
export const formatCurrencyGBP = formatCurrencyHOF({ currency: 'GBP', locale: 'en-GB' });
export const formatCurrencyUSD = formatCurrencyHOF({ currency: 'USD', locale: 'en-US' });
