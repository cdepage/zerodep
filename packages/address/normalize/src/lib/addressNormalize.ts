import { ZeroDepError } from '@zerodep/errors';
import { stringDeburr } from '@zerodep/string-deburr';

export const addressNormalize = (address: string): string => {
  if (!address) {
    return '';
  }

  // Ensure addresses have a reasonable length to prevent ReDoS (regular expression denial of service)
  // - @see https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
  if (address.length > 200) {
    const error = new ZeroDepError('Address is too long');
    error.value = `${address.substring(0, 200)}...`;
    throw error;
  }

  // USPS does not like: commas, periods, parens, quotes, apostrophes, most special characters
  // USPS tolerates: hyphens, though they're not needed in street or city names
  // USPS does like: uppercase
  // A few changes to make parsing easier
  return (
    stringDeburr(address.toUpperCase())
      .replace(/[\n\r*,":;@]/g, ' ')
      .replace(/'/g, '')
      .replace(/ +/g, ' ')

      // parentheses and their contents
      .replace(/\(([\s\S]*)\)/g, ' ')

      // directionals
      .replace(/\b(N|NORTH)[-.]?(W|WEST)[-.]?\b/g, 'NW ')
      .replace(/\b(N|NORTH)[-.]?(E|EAST)[-.]?\b/g, 'NE ')
      .replace(/\b(S|SOUTH)[-.]?(W|WEST)[-.]?\b/g, 'SW ')
      .replace(/\b(S|SOUTH)[-.]?(E|EAST)[-.]?\b/g, 'SE ')

      // po box
      .replace(
        /\b(P|POST)[-. ]?(O|OFFC|OFFICE)[-. ]?(B|BX|BOX)[-. ]?\b/g,
        'PO BOX '
      )

      // rural routes
      .replace(/\b(R|RURAL)[-. ]?(R|ROUTE)[-. ]?\b/g, 'RR ')

      // highway contract
      .replace(
        /\b(H|HIWAY|HIGHWAY)[-. ]?(C|CONTRACT)[-. ]?(R|ROUTE)?[-. ]?\b/g,
        'HC '
      )
      .replace(/\b(S|STAR)[-. ]?(R|ROUTE)[-. ]?\b/g, 'HC ')

      // general delivery
      .replace(
        /\b(G|GEN|GENERAL)[-. ]?(D|DEL|DELIVERY)[-. ]?\b/g,
        'GENERAL DELIVERY '
      )

      // private mail boxes
      .replace(
        /\b(P|PRIVATE|PRIV|PVT)[-. ]?(M|MAIL)[-. ]?(B|BX|BOX)[-. ]?\b/g,
        'PMB '
      )

      // secondary unit + #
      .replace(
        /\b(APT|APMT|APTMT|APARTMENT|BLDG|BUILDING|DEPT|DEPARTMENT|FL|FLOOR|FLR|HNGR|HANGER|KEY|LOT|OFC|OFFICE|OFFC|PIER|RM|ROOM|SLIP|SPC|SPACE|STOP|STE|SUITE|TRLR|TRAILER|UNIT|BSMT|BASEMENT|BSMNT|FRNT|FRONT|LBBY|LOBBY|LOWR|PH|PENTHOUSE|REAR|SIDE|UPPR|UPPER)[-. ]?#[-. ]?\b/g,
        '$1 '
      )
      .replace(/\b(APT|APMT|APTMT|APARTMENT) ([0-9A-Z-]+)\b/g, 'APT $2')
      .replace(/\b(BLDG|BUILDING) ([0-9A-Z-]+)\b/g, 'BLDG $2')
      .replace(/\b(DEPT|DEPARTMENT) ([0-9A-Z-]+)\b/g, 'DEPT $2')
      .replace(/\b(OFC|OFFICE|OFFC) ([0-9A-Z-]+)\b/g, 'OFC $2')
      .replace(/\b(RM|ROOM) ([0-9A-Z-]+)\b/g, 'RM $2')
      .replace(/\b(SPC|SPACE) ([0-9A-Z-]+)\b/g, 'SPC $2')
      .replace(/\b(STE|SUITE) ([0-9A-Z-]+)\b/g, 'STE $2')

      // periods and double-spaces
      .replace(/\./g, ' ')
      .replace(/ +/g, ' ')
      .trim()
  );
};
