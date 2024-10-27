/* eslint-disable sonarjs/no-commented-code */
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

  it('should parse addresses used in the README', () => {
    // const addy0 = '7335 pumpkin hill st. northwest, #14b, atlanta, 30303';
    // expect(addressParse(addy0)).toEqual({
    //   source: '7335 pumpkin hill st. northwest, #14b, atlanta, 30303',
    //   normalized: '7335 PUMPKIN HILL ST NW #14B ATLANTA 30303',
    //   street: '7335 PUMPKIN HILL ST NW',
    //   city: '#14B',
    //   zip: '30303',
    // });

    // const addy1 = '6435 1/2 tulip road space 67 springfield';
    // expect(addressParse(addy1, { city: 'springfield', zip: '97478' })).toEqual({
    //   source: '7335 pumpkin hill st. northwest, #14b, atlanta, 30303',
    //   normalized: '7335 PUMPKIN HILL ST NW #14B ATLANTA 30303',
    //   street: '7335 PUMPKIN HILL ST NW',
    //   city: '#14B',
    //   zip: '30303',
    // });

    const addy2 = '6435 1/2 tulip road space 67 springfield';
    expect(addressParse(addy2)).toEqual({
      source: '6435 1/2 tulip road space 67 springfield',
      normalized: '6435 1/2 TULIP RD SPC 67 SPRINGFIELD',
      secondary: 'SPC 67',
      street: '1/2 TULIP RD',
    });

    const addy3 = '30 nelson street, penthouse, toronto, on m5v0h5';
    expect(addressParse(addy3)).toEqual({
      source: '30 nelson street, penthouse, toronto, on m5v0h5',
      normalized: '30 NELSON STREET PH TORONTO ON M5V0H5',
      secondary: 'PH',
      street: '30 NELSON ST',
      city: 'TORONTO',
      stateAbbr: 'ON',
      zip: 'M5V 0H5',
    });

    const addy4 = 'post office box 3094 collierville tn 38027';
    expect(addressParse(addy4)).toEqual({
      source: 'post office box 3094 collierville tn 38027',
      normalized: 'PO BOX 3094 COLLIERVILLE TN 38027',
      street: 'PO BOX 3094',
      city: 'COLLIERVILLE',
      stateAbbr: 'TN',
      zip: '38027',
    });

    // RURAL ROUTE
    // const addy5 = 'rural route #9 box #23a hornbrook california 96044';
    // expect(addressParse(addy5)).toEqual({
    //   source: 'ruralroute #9 box #23a hornbrook california 96044',
    //   normalized: 'RR #9 BOX #23A HORNBROOK CALIFORNIA 96044',
    //   street: '#9 BOX #23A',
    //   city: 'HORNBROOK',
    //   secondary: 'RR',
    //   stateAbbr: 'CA',
    //   zip: '96044',
    // });

    // GENERAL DELIVERY
    const addy6 = 'gen del tampa fl 33602-9999';
    expect(addressParse(addy6)).toEqual({
      source: 'gen del tampa fl 33602-9999',
      normalized: 'GENERAL DELIVERY TAMPA FL 33602-9999',
      street: 'GENERAL DELIVERY',
      city: 'TAMPA',
      stateAbbr: 'FL',
      zip: '33602',
      zipExt: '9999',
    });

    // HIGHWAY CONTRACT
    const addy7 = 'highway contract route 68 box 23a';
    expect(addressParse(addy7, { city: 'vale', state: 'co' })).toEqual({
      source: 'highway contract route 68 box 23a',
      normalized: 'HC 68 BOX 23A',
      city: 'VALE',
      stateAbbr: 'CO',
      street: 'HC',
    });
  });
});
