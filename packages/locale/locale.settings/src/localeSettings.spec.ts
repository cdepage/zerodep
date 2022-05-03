import { localeSettings } from './localeSettings';

describe('localeSettings', () => {
  it('should get the locale settings', () => {
    expect(localeSettings.getAll()).toEqual({
      locale: 'en-US',
      currency: undefined,
      currencyDisplay: 'narrowSymbol',
      currencySign: 'standard',
      dateStyle: 'medium',
      timeStyle: 'medium',
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 0,
      timeZoneName: 'short',
      unitDisplay: 'short',
      useGrouping: 'auto',
      roundingMode: 'halfExpand',
    });
  });

  it('should set and get one locale setting', () => {
    expect(localeSettings.getOne('currency')).toEqual(undefined);
    localeSettings.set({ currency: 'USD' });
    expect(localeSettings.getOne('currency')).toEqual('USD');
  });

  it('should get currency-related settings', () => {
    expect(localeSettings.getCurrencyDefaults()).toEqual({
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      currencySign: 'standard',
      fractionDigits: 'show',
      locale: 'en-US',
      roundingMode: 'halfExpand',
    });
  });
});
