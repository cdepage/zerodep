import { geoCountryIso } from './geoCountryIso';

describe('geoCountryIso', () => {
  it('should find a country by 2-digit abbr', () => {
    expect(geoCountryIso('ca')).toEqual('CA');
  });

  it('should find a country by name match', () => {
    expect(geoCountryIso('fiji')).toEqual('FJ');
  });

  it('should find a country by name with space match', () => {
    expect(geoCountryIso('united states')).toEqual('US');
  });

  it('should find a country by sub-name match', () => {
    expect(geoCountryIso('great britain')).toEqual('GB');
  });

  it('should find a country by partial name match', () => {
    expect(geoCountryIso('bolivarian')).toEqual('VE');
  });

  it('should NOT find an unknown country', () => {
    const fn = () => geoCountryIso('unknown');
    expect(fn).toThrow('Could not find a country for "UNKNOWN"');
  });
});
