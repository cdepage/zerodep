import { addressStateIso } from './addressStateIso';

describe('addressStateIso', () => {
  it('should find a US state by 2-digit abbr without a country', () => {
    expect(addressStateIso('ca')).toEqual(['CA', 'US']);
  });

  it('should find a US state by 2-digit abbr with periods', () => {
    expect(addressStateIso('n.y.')).toEqual(['NY', 'US']);
  });

  it('should find a US state by name without a country', () => {
    expect(addressStateIso('oregon')).toEqual(['OR', 'US']);
  });

  it('should find a US state by other known term without a country', () => {
    expect(addressStateIso('minn')).toEqual(['MN', 'US']);
  });

  it('should find a US state by 2-digit abbr with correct country', () => {
    expect(addressStateIso('ca', 'US')).toEqual(['CA', 'US']);
  });

  it('should NOT find a US state by 2-digit abbr with incorrect country', () => {
    const fn = () => addressStateIso('ca', 'CA');
    expect(fn).toThrow('Could not find a state or province for "CA"');
  });

  // --

  it('should find a CA province by 2-digit abbr without a country', () => {
    expect(addressStateIso('ab')).toEqual(['AB', 'CA']);
  });

  it('should find a CA province by 2-digit abbr with periods', () => {
    expect(addressStateIso('B.C.')).toEqual(['BC', 'CA']);
  });

  it('should find a CA province by name without a country', () => {
    expect(addressStateIso('québec')).toEqual(['QC', 'CA']);
  });

  it('should find a CA province by other known term without a country', () => {
    expect(addressStateIso('sask')).toEqual(['SK', 'CA']);
  });

  it('should find a CA province by 2-digit abbr with correct country', () => {
    expect(addressStateIso('mb', 'CA')).toEqual(['MB', 'CA']);
  });

  it('should NOT find a CA province by 2-digit abbr with incorrect country', () => {
    const fn = () => addressStateIso('on', 'US');
    expect(fn).toThrow('Could not find a state or province for "ON"');
  });
});
