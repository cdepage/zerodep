import { geoStateIso } from './geoStateIso';

describe('geoStateIso', () => {
  it('should find a US state by 2-digit abbr without a country', () => {
    expect(geoStateIso('ca')).toEqual(['CA', 'US']);
  });

  it('should find a US state by 2-digit abbr with periods', () => {
    expect(geoStateIso('n.y.')).toEqual(['NY', 'US']);
  });

  it('should find a US state by name without a country', () => {
    expect(geoStateIso('oregon')).toEqual(['OR', 'US']);
  });

  it('should find a US state by other known term without a country', () => {
    expect(geoStateIso('minn')).toEqual(['MN', 'US']);
  });

  it('should find a US state by 2-digit abbr with correct country', () => {
    expect(geoStateIso('ca', 'US')).toEqual(['CA', 'US']);
  });

  it('should NOT find a US state by 2-digit abbr with incorrect country', () => {
    const fn = () => geoStateIso('ca', 'CA');
    expect(fn).toThrow('Could not find a state or province for "CA"');
  });

  // --

  it('should find a CA province by 2-digit abbr without a country', () => {
    expect(geoStateIso('ab')).toEqual(['AB', 'CA']);
  });

  it('should find a CA province by 2-digit abbr with periods', () => {
    expect(geoStateIso('B.C.')).toEqual(['BC', 'CA']);
  });

  it('should find a CA province by name without a country', () => {
    expect(geoStateIso('québec')).toEqual(['QC', 'CA']);
  });

  it('should find a CA province by other known term without a country', () => {
    expect(geoStateIso('sask')).toEqual(['SK', 'CA']);
  });

  it('should find a CA province by 2-digit abbr with correct country', () => {
    expect(geoStateIso('mb', 'CA')).toEqual(['MB', 'CA']);
  });

  it('should NOT find a CA province by 2-digit abbr with incorrect country', () => {
    const fn = () => geoStateIso('on', 'US');
    expect(fn).toThrow('Could not find a state or province for "ON"');
  });
});
