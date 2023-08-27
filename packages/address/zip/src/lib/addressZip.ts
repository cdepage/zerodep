import { CountryIso2 } from '@zerodep/types';

// zip/postal code formats
const US_EXT = '(?<zip>[0-9]{5})[ -]?(?<zipExt>[0-9]{4})?';
const CA = '(?<postalCode>[a-z][0-9][a-z][ -]?[0-9][a-z][0-9])';

const zipRegex = new RegExp(`\\b${US_EXT}|${CA}\\b`, 'gi');

interface IMatchGroups {
  zip?: string;
  zipExt?: string;
  postalCode?: string;
}
interface AddressZip {
  zip: string;
  zipExt?: string;
  countryIso2s: CountryIso2[];
  source: string;
  ndx: number;
  length: number;
}

const formatPostalCode = (val?: string) => {
  if (!val) {
    return undefined;
  }
  const pc = val.replace(/[^0-9A-Z]/g, '');
  return `${pc.substring(0, 3)} ${pc.substring(3, 6)}`;
};

export const addressZip = (address: string): AddressZip[] => {
  const zips: AddressZip[] = [];
  const matches = address.matchAll(zipRegex);

  // edge case: no matches
  if (!matches) {
    return [];
  }

  for (const match of matches) {
    const { zip, zipExt, postalCode } = match.groups as IMatchGroups;
    const source = match[0].trim();
    zips.push({
      zip: zip ?? formatPostalCode(postalCode) ?? '',
      zipExt,
      countryIso2s: zip ? ['US'] : ['CA'],
      source,
      ndx: address.lastIndexOf(source),
      length: source.length,
    });
  }

  if (zips.length > 1) {
    zips.sort((a, b) => (a.ndx > b.ndx ? -1 : 1));
  }

  return zips;
};
