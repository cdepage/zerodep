import { localeGet } from '@zerodep/locale.get';
import { TypesCurrencies } from '@zerodep/types.currencies';
import { TypesLocales } from '@zerodep/types.locales';
import { TypesTimeZones } from '@zerodep/types.timezones';

export interface LocaleSettings {
  locale?: TypesLocales;
  currency?: TypesCurrencies;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  currencySign?: 'standard' | 'accounting';
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  timeZone?: TypesTimeZones;
  hour12?: boolean;
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  fractionalSecondDigits?: 0 | 1 | 2 | 3;
  timeZoneName?: 'long' | 'short' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';
  unitDisplay?: 'long' | 'short' | 'narrow';
  useGrouping?: 'always' | 'auto' | 'false' | 'min2';
  roundingMode?:
    | 'halfExpand'
    | 'ceil'
    | 'floor'
    | 'expand'
    | 'trunc'
    | 'halfCeil'
    | 'halfFloor'
    | 'halfTrunc'
    | 'halfEven';
  minimumFractionDigits?: undefined | number;
  maximumFractionDigits?: undefined | number;
}

export type CurrencyOptions = Pick<
  LocaleSettings,
  'locale' | 'currency' | 'currencyDisplay' | 'currencySign' | 'roundingMode'
> & { fractionDigits?: 'show' | 'hide' };

// get the most likely system locale
const locale = localeGet().shift() as unknown as TypesLocales;

const defaultValues: LocaleSettings = {
  locale,
  currency: undefined,
  currencyDisplay: 'narrowSymbol',
  currencySign: 'standard',
  dateStyle: 'medium',
  timeStyle: 'medium',
  hour12: false, // use 24-hour clock
  year: 'numeric', // prefer 4-digit years
  month: '2-digit', // prefer 2-digit months, no translation issues
  day: '2-digit', // prefer 2-digit days
  hour: '2-digit', // prefer 2-digit days
  minute: '2-digit', // prefer 2-digit days
  second: '2-digit', // prefer 2-digit days
  fractionalSecondDigits: 0, //  do not show
  timeZoneName: 'short', // prefer shorter
  unitDisplay: 'short', // prefer shorter
  useGrouping: 'auto', // depend upon locale & currency
  roundingMode: 'halfExpand', // rounds away from zero
};

type Setting = keyof LocaleSettings;

// keep all settings consistent across instances
let configuredSettings: LocaleSettings = { ...defaultValues };

export const localeSettings = {
  set: (settings?: LocaleSettings) => {
    configuredSettings = { locale, ...defaultValues, ...settings };
  },

  // TODO: this should return the correct type
  getOne: (setting: Setting) => {
    return configuredSettings[setting];
  },

  getCurrencyDefaults: (): CurrencyOptions => ({
    locale: configuredSettings.locale,
    currency: configuredSettings.currency,
    fractionDigits: 'show',
    currencyDisplay: configuredSettings.currencyDisplay,
    currencySign: configuredSettings.currencySign,
    roundingMode: configuredSettings.roundingMode,
  }),

  getAll: () => {
    return configuredSettings;
  },
};
