import { geoState } from './geoState';

describe('geoState', () => {
  it('should find an American state', () => {
    expect(geoState('utah')).toEqual({
      stateName: 'Utah',
      stateAbbr: 'UT',
      stateFips: '49',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
      countryName: 'United States',
      countryIso2: 'US',
    });
  });

  it('should find an Canadian province', () => {
    expect(geoState('bc')).toEqual({
      stateName: 'British Columbia',
      stateAbbr: 'BC',
      stateFips: '00',
      regionCensus: undefined,
      regionDivision: undefined,
      regionBea: undefined,
      countryName: 'Canada',
      countryIso2: 'CA',
    });
  });

  it('should NOT find an unknown state/province', () => {
    const fn = () => geoState('unknown');
    expect(fn).toThrow('Could not find a state or province for "UNKNOWN"');
  });
});
