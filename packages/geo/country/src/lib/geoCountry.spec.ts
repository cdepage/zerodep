import { geoCountry } from './geoCountry';
import { geoCountryIso } from './geoCountryIso';

describe('geoCountry', () => {
  it('should find a country by 2-digit abbr', () => {
    expect(geoCountry('ca')).toEqual({
      countryIso2: 'CA',
      countryIso3: 'CAN',
      countryName: 'Canada',
      countryCode: 124,
    });
  });

  it('should find a country by a country name', () => {
    expect(geoCountry('Spain')).toEqual({
      countryIso2: 'ES',
      countryIso3: 'ESP',
      countryName: 'Spain',
      countryCode: 724,
    });
  });

  it('should NOT find an unknown country', () => {
    const fn = () => geoCountryIso('unknown');
    expect(fn).toThrow('Could not find a country for "UNKNOWN"');
  });
});
