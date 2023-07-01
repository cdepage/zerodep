import { addressState } from './addressState';

describe('addressState', () => {
  it('should find an American state', () => {
    expect(addressState('utah')).toEqual({
      stateAbbr: 'UT',
      stateName: 'Utah',
      stateFips: '49',
      countryAbbr: 'US',
      countryName: 'United States of America',
      counties: [
        {
          countyName: 'Beaver County',
          countyFips: '49001',
        },
        {
          countyName: 'Box Elder County',
          countyFips: '49003',
        },
        {
          countyName: 'Cache County',
          countyFips: '49005',
        },
        {
          countyName: 'Carbon County',
          countyFips: '49007',
        },
        {
          countyName: 'Daggett County',
          countyFips: '49009',
        },
        {
          countyName: 'Davis County',
          countyFips: '49011',
        },
        {
          countyName: 'Duchesne County',
          countyFips: '49013',
        },
        {
          countyName: 'Emery County',
          countyFips: '49015',
        },
        {
          countyName: 'Garfield County',
          countyFips: '49017',
        },
        {
          countyName: 'Grand County',
          countyFips: '49019',
        },
        {
          countyName: 'Iron County',
          countyFips: '49021',
        },
        {
          countyName: 'Juab County',
          countyFips: '49023',
        },
        {
          countyName: 'Kane County',
          countyFips: '49025',
        },
        {
          countyName: 'Millard County',
          countyFips: '49027',
        },
        {
          countyName: 'Morgan County',
          countyFips: '49029',
        },
        {
          countyName: 'Piute County',
          countyFips: '49031',
        },
        {
          countyName: 'Rich County',
          countyFips: '49033',
        },
        {
          countyName: 'Salt Lake County',
          countyFips: '49035',
        },
        {
          countyName: 'San Juan County',
          countyFips: '49037',
        },
        {
          countyName: 'Sanpete County',
          countyFips: '49039',
        },
        {
          countyName: 'Sevier County',
          countyFips: '49041',
        },
        {
          countyName: 'Summit County',
          countyFips: '49043',
        },
        {
          countyName: 'Tooele County',
          countyFips: '49045',
        },
        {
          countyName: 'Uintah County',
          countyFips: '49047',
        },
        {
          countyName: 'Utah County',
          countyFips: '49049',
        },
        {
          countyName: 'Wasatch County',
          countyFips: '49051',
        },
        {
          countyName: 'Washington County',
          countyFips: '49053',
        },
        {
          countyName: 'Wayne County',
          countyFips: '49055',
        },
        {
          countyName: 'Weber County',
          countyFips: '49057',
        },
      ],
    });
  });

  it('should find an Canadian province', () => {
    expect(addressState('bc')).toEqual({
      stateAbbr: 'BC',
      stateName: 'British Columbia',
      stateFips: '00',
      countryAbbr: 'CA',
      countryName: 'Canada',
      counties: [],
    });
  });

  it('should NOT find an unknown state/province', () => {
    const fn = () => addressState('unknown');
    expect(fn).toThrow('Could not find a state or province for "UNKNOWN"');
  });
});
