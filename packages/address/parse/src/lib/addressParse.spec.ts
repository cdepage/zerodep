import { addressParse } from './addressParse';

describe('addressParse', () => {
  it('should parse a full address with secondary before city', () => {
    const addy =
      '9655 east river road northeast apt 12 salem oregon 97303-1234 usa';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '9655 EAST RIVER RD NE APT 12 SALEM OREGON 97303-1234 USA',

      secondary: 'APT 12',

      street: '9655 E RIVER RD NE',
      city: 'SALEM',
      stateAbbr: 'OR',
      zip: '97303',
      zipExt: '1234',
      countryIso2: 'US',
    });
  });

  it('should parse a full address with secondary leading', () => {
    const addy =
      'apt 12 9655 east river road northeast salem oregon 97303-1234 usa';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: 'APT 12 9655 EAST RIVER RD NE SALEM OREGON 97303-1234 USA',

      secondary: 'APT 12',

      street: '9655 E RIVER RD NE',
      city: 'SALEM',
      stateAbbr: 'OR',
      zip: '97303',
      zipExt: '1234',
      countryIso2: 'US',
    });
  });

  it('should parse an address to the city', () => {
    const addy = '9655 river rd ne salem';
    const res = addressParse(addy);
    expect(res).toEqual({
      source: addy,
      normalized: '9655 RIVER RD NE SALEM',

      street: '9655 RIVER RD NE',
      city: 'SALEM',
    });
  });

  it('should parse an address with leading #apt', () => {
    const addy =
      '#42 14694 Woodburn Monitor Road Northeast Woodburn Oregon 97071';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '#42 14694 WOODBURN MONITOR RD NE WOODBURN OREGON 97071',

      secondary: '#42',

      street: '14694 WOODBURN MONITOR RD NE',
      city: 'WOODBURN',
      stateAbbr: 'OR',
      zip: '97071',
    });
  });

  it('should parse address 67', () => {
    const addy = 'A210 Northwest Alder St. Dundee Oregon 97115';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: 'A210 NW ALDER ST DUNDEE OREGON 97115',

      street: 'A210 NW ALDER ST',
      city: 'DUNDEE',
      stateAbbr: 'OR',
      zip: '97115',
    });
  });

  it('should parse address 80', () => {
    const addy = '1005 N Gravenstein Highway Sebastopol CA 95472';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '1005 N GRAVENSTEIN HIGHWAY SEBASTOPOL CA 95472',

      street: '1005 N GRAVENSTEIN HWY',
      city: 'SEBASTOPOL',
      stateAbbr: 'CA',
      zip: '95472',
    });
  });

  it('should parse address 93', () => {
    const addy = '1005 Gravenstein Hwy 95472';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '1005 GRAVENSTEIN HWY 95472',

      street: '1005 GRAVENSTEIN HWY',
      zip: '95472',
    });
  });

  it('should parse address 104', () => {
    const addy = '1005 Gravenstein Hwy N, 95472';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '1005 GRAVENSTEIN HWY N 95472',

      street: '1005 GRAVENSTEIN HWY N',
      zip: '95472',
    });
  });

  it('should parse address 115', () => {
    const addy = '3813 1/2 Some Road, Los Angeles, CA';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '3813 1/2 SOME ROAD LOS ANGELES CA',

      street: '3813 1/2 SOME RD',
      city: 'LOS ANGELES',
      stateAbbr: 'CA',
    });
  });

  xit('should parse address 127', () => {
    const addy = '123 Maple Rochester, New York';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '123 MAPLE ROCHESTER NEW YORK',

      street: '123 MAPLE',
      city: 'ROCHESTER',
      stateAbbr: 'NY',
    });
  });

  it('should parse an address with an apt, city, state & country', () => {
    const addy = '123 Maple Street Rochester, New York 10001-1234';
    expect(
      addressParse(addy, {
        city: 'Rochester',
        state: 'New York',
        country: 'USA',
        zip: '10001',
        zipExt: '1234',
      })
    ).toEqual({
      source: addy,
      normalized: '123 MAPLE ST ROCHESTER NEW YORK 10001-1234',
      street: '123 MAPLE ST ROCHESTER',
      city: 'ROCHESTER',
      stateAbbr: 'NY',
      zip: '10001',
      zipExt: '1234',
      countryIso2: 'US',
    });
  });

  // eslint-disable-next-line
  // TODO: fix this so the building is correctly identified
  it('should parse an highway contract address', () => {
    const addy = '10135 starr st sw';
    expect(addressParse(addy)).toEqual({
      source: addy,
      normalized: '10135 STARR ST SW',

      street: 'STARR ST SW',
      zip: '10135',
    });
  });
});
