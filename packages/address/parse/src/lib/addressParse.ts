import { addressCountry } from '@zerodep/address-country';
import { addressDirectional } from '@zerodep/address-directional';
import { addressNormalize } from '@zerodep/address-normalize';
import { addressSecondary } from '@zerodep/address-secondary';
import { addressState } from '@zerodep/address-state';
import { addressStreet } from '@zerodep/address-street';
import { addressZip } from '@zerodep/address-zip';
import { stringWords } from '@zerodep/string-words';

interface AddressOptions {
  city?: string;
  state?: string;
  zip?: string;
  zipExt?: string;
  country?: string;
}

interface InternalAddress {
  source: string;
  normalized: string;

  secondaryType?: string;
  secondaryNumber?: string;

  building?: string;
  preDirectional?: string;
  preStreetName?: string;
  streetType?: string;
  postStreetName?: string;
  postDirectional?: string;

  city?: string;
  stateAbbr?: string;
  zip?: string;
  zipExt?: string;
  countryIso2?: string;
}

interface Address {
  source: string;
  normalized: string;

  secondary?: string;

  street?: string;
  city?: string;
  stateName?: string;
  stateAbbr?: string;
  zip?: string;
  zipExt?: string;
  countryName?: string;
  countryIso2?: string;
}

export const addressParse = (
  line: string,
  options: AddressOptions = {}
): Address => {
  //
  // STEP 1: prepare the response
  //

  const address: InternalAddress = {
    source: line,
    normalized: addressNormalize(line),
  };

  //
  // STEP 2: normalize provided city, state, country, zip options
  //

  // option.country
  if (options?.country) {
    const optionCountries = addressCountry(options?.country || '');
    if (optionCountries.length) {
      options.country = optionCountries[0].countryIso2;
    }
  }

  // option.state
  if (options?.state) {
    const optionStates = addressState(options?.state || '');
    if (optionStates.length) {
      options.state = optionStates[0].stateAbbr;
    }
  }

  // option.city
  if (options?.city) {
    options.city = addressNormalize(options?.city || '') || undefined;
  }

  //
  // STEP 3: identify as many pieces of the address as possible
  //

  const countries = addressCountry(address.normalized);
  const zips = addressZip(address.normalized);
  const states = addressState(address.normalized);
  const streets = addressStreet(address.normalized);
  const directionals = addressDirectional(address.normalized);
  const secondaries = addressSecondary(address.normalized);

  const countryTerms = countries.map((country) => country.source);
  const zipTerms = zips.map((zip) => zip.source);
  const stateTerms = states.map((state) => state.source);
  const streetTerms = streets.map((street) => street.source);
  const directionalTerms = directionals.map(
    (directional) => directional.source
  );
  const secondaryTerms = secondaries.map((secondary) => secondary.source);

  //
  // STEP 4: break the normalized address into pieces we can identify
  //

  const pieces: any[] = [];
  const terms = stringWords(address.normalized);
  let offset = 0;
  terms.forEach((term, ndx) => {
    const type: string[] = [];
    if (countryTerms.includes(term)) type.push('country');
    if (zipTerms.includes(term)) type.push('zip');
    if (stateTerms.includes(term)) type.push('state');
    if (streetTerms.includes(term)) type.push('street');
    if (directionalTerms.includes(term)) type.push('directional');
    if (secondaryTerms.includes(term)) type.push('secondary');
    if (!type.length) type.push('unknown');

    const isNumeric = !/[^0-9]/g.test(term);

    pieces.push({
      term,
      ndx: offset,
      type,
      isNumeric,
    });
    offset += term.length;
  });

  // order the pieces backwards for parsing sanity
  pieces.reverse();
  // console.log(pieces);

  //
  // STEP 5: add suggestions to what the next items may be based on previous items
  //

  pieces.forEach((item, ndx) => {
    if (
      item.type.includes('country') &&
      pieces[ndx + 1] &&
      pieces[ndx + 1].type.includes('unknown')
    ) {
      pieces[ndx + 1].type.push('state');
    }

    if (
      item.type.includes('zip') &&
      pieces[ndx + 1] &&
      pieces[ndx + 1].type.includes('unknown')
    ) {
      pieces[ndx + 1].type.push('state');
    }

    if (item.type.includes('state') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('city');
    }

    if (item.type.includes('city') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('directional');
      pieces[ndx + 1].type.push('streetName');
    }

    if (item.type.includes('directional') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('streetName');
      pieces[ndx + 1].type.push('building');
    }

    if (item.type.includes('streetName') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('building');
    }

    if (item.type.includes('street') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('streetName');
    }

    if (item.type.includes('building') && pieces[ndx + 1]) {
      pieces[ndx + 1].type.push('secondaryNumber');
    }

    if (item.type.includes('secondary')) {
      if (!pieces[ndx + 1]) {
        pieces[ndx - 1].type = ['unknown', 'secondaryNumber', 'building'];
      } else {
        pieces[ndx - 1].type.unshift('building');
        pieces[ndx - 1].type.unshift('secondaryNumber');
      }
    }
  });

  //
  // STEP 6: figure out each piece
  //

  const stash: any[] = [];
  let ndx = -1;

  for (const item of pieces) {
    ndx += 1;

    // country
    if (!address.countryIso2 && item.type.includes('country')) {
      const countryItem = countries.find((i) => i.source === item.term);
      if (countryItem) {
        address.countryIso2 = countryItem.countryIso2;
        pieces[ndx].val = 'country';
        continue;
      }
    }

    // zip
    if (!address.zip && item.type.includes('zip')) {
      const zipItem = zips.find((i) => i.source === item.term);
      if (zipItem) {
        address.zip = zipItem.zip;
        address.zipExt = zipItem.zipExt;
        pieces[ndx].val = 'zip';
        continue;
      }
    }

    // state
    if (
      !address.stateAbbr &&
      !address.city &&
      !address.secondaryNumber &&
      !address.secondaryType &&
      !address.postDirectional &&
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      !item.type.includes('directional') &&
      item.type.includes('state')
    ) {
      const stateItem = states.find((i) => i.source === item.term);
      if (stateItem) {
        address.stateAbbr = stateItem.stateAbbr;
        pieces[ndx].val = 'state';
        continue;
      }
    }

    // city
    if (
      item.type.includes('city') &&
      !address.secondaryNumber &&
      !address.secondaryType &&
      !address.postDirectional &&
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      !item.type.includes('street')
    ) {
      address.city = address.city || '';
      address.city = `${item.term} ${address.city}`.trim();
      pieces[ndx].val = 'city';
      continue;
    }

    // secondaryNumber
    if (
      !address.secondaryNumber &&
      !address.secondaryType &&
      !address.postDirectional &&
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      item.type.includes('secondaryNumber')
    ) {
      address.secondaryNumber = item.term;
      pieces[ndx].val = 'secondaryNumber';
      continue;
    }

    // secondaryType
    if (
      !address.secondaryType &&
      !address.postDirectional &&
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      item.type.includes('secondary')
    ) {
      const secondaryItem = secondaries.find((i) => i.source === item.term);
      if (secondaryItem) {
        address.secondaryType = secondaryItem.secondary;
        pieces[ndx].val = 'secondaryType';
        continue;
      }
    }

    // postDirectional
    if (
      !address.postDirectional &&
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      item.type.includes('directional')
    ) {
      const directionalItem = directionals.find((i) => i.source === item.term);
      if (directionalItem) {
        address.postDirectional = directionalItem?.directional;
        pieces[ndx].val = 'postDirectional';
        continue;
      }
    }

    // postStreetName
    if (
      !address.postStreetName &&
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      !item.type[0].includes('street') &&
      item.type.includes('streetName')
    ) {
      address.postStreetName = item.term;
      pieces[ndx].val = 'postStreetName';
      continue;
    }

    // streetType
    if (
      !address.streetType &&
      !address.preStreetName &&
      !address.preDirectional &&
      !address.building &&
      item.type.includes('street')
    ) {
      const streetItem = streets.find((i) => i.source === item.term);
      if (streetItem) {
        address.streetType = streetItem?.streetType;
        pieces[ndx].val = 'streetType';
        continue;
      }
    }

    // preStreetName
    if (
      !address.preDirectional &&
      !address.building &&
      item.type[0] !== 'directional' &&
      item.type.includes('streetName')
    ) {
      address.preStreetName = address.preStreetName || '';
      address.preStreetName = `${item.term} ${address.preStreetName}`.trim();
      pieces[ndx].val = 'preStreetName';
      continue;
    }

    // preDirectional
    if (
      !address.preDirectional &&
      !address.building &&
      item.type[0] === 'directional'
    ) {
      const directionalItem = directionals.find((i) => i.source === item.term);
      if (directionalItem) {
        address.preDirectional = directionalItem?.directional;
        pieces[ndx].val = 'preDirectional';
        continue;
      }
    }

    // building
    if (!address.building && item.type.includes('building')) {
      address.building = item.term;
      pieces[ndx].val = 'building';
      continue;
    }

    // secondaryNumber
    if (
      !address.secondaryNumber &&
      address.building &&
      item.type.includes('secondaryNumber')
    ) {
      address.secondaryNumber = item.term;
      pieces[ndx].val = 'secondaryNumber';
      continue;
    }

    // secondaryType
    if (
      !address.secondaryType &&
      address.building &&
      item.type.includes('secondary')
    ) {
      const secondaryItem = secondaries.find((i) => i.source === item.term);
      if (secondaryItem) {
        address.secondaryType = secondaryItem.secondary;
        pieces[ndx].val = 'secondaryType';
        continue;
      }
    }

    stash.push(item);
  }

  // console.log(stash)

  // edge case: stash is a city if there is a building & street type
  if (
    stash.length === 1 &&
    (address.preStreetName || address.postStreetName) &&
    address.streetType &&
    !address.city
  ) {
    const item = stash.pop();
    address.city = item.term;
  }

  // edge case: stash is a building if it is numeric & there is no building
  if (stash.length && !address.building && stash[0].isNumeric) {
    const item = stash.pop();
    console.log('item', item);
    address.building = item.term;
  }

  // edge case: a city, no state, and a country: country is probably a state
  if (address.city && !address.stateAbbr && address.countryIso2) {
    const stateItem = states.find((i) => i.source === address.countryIso2);
    if (stateItem) {
      address.stateAbbr = stateItem.stateAbbr;
      address.countryIso2 = undefined;
    }
  }

  // edge case: building includes a fractional address, secondaryNumber exists without secondaryType
  if (
    address.building?.includes('/') &&
    address.secondaryNumber &&
    !address.secondaryType
  ) {
    address.building = `${address.secondaryNumber} ${address.building}`;
    address.secondaryNumber = undefined;
  }

  // console.log(options);
  // console.log('stash', stash);
  // console.log('pieces', pieces);
  // console.log('address', address);

  //
  // STEP 7: inject options
  //

  if (options?.country) {
    address.countryIso2 = options.country;
  }
  if (options?.zip) {
    address.zip = options.zip;
  }
  if (options?.zipExt) {
    address.zipExt = options.zipExt;
  }
  if (options?.state) {
    address.stateAbbr = options.state;
  }
  if (options?.city) {
    address.city = options.city;
  }

  //
  // STEP 8: build response
  //

  const street: string | undefined =
    [
      address.building,
      address.preDirectional,
      address.preStreetName,
      address.streetType,
      address.postStreetName,
      address.postDirectional,
    ]
      .filter((t) => t)
      .join(' ')
      .trim() || undefined;

  const secondary: string | undefined =
    [address.secondaryType, address.secondaryNumber]
      .filter((t) => t)
      .join(' ')
      .trim() || undefined;

  return {
    source: address.source,
    normalized: address.normalized,

    secondary,
    street,
    city: address.city,
    // stateName: '',
    stateAbbr: address.stateAbbr,
    zip: address.zip,
    zipExt: address.zipExt,
    // countryName: '',
    countryIso2: address.countryIso2,
  } as Address;
};
