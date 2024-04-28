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
  return (
    stringDeburr(address.toUpperCase())
      .replace(/[\n\r]/g, ', ')
      .replace(/[*":;@()_]/g, ' ')
      .replace(/'/g, '')
      .replace(/ +/g, ' ')

      // po box
      .replace(
        /\b(P|P.|POST)[- ]?(O|O.|OFFC|OFFICE)[- ]?(B|B.|BOX)?[- ]?([#0123456789]+)+([- ])?\b/g,
        'PO BOX $4$5'
      )

      // directionals
      .replace(/\b(N|NORTH)[-.]?(W|WEST)[-.]?\b/g, 'NW ')
      .replace(/\b(N|NORTH)[-.]?(E|EAST)[-.]?\b/g, 'NE ')
      .replace(/\b(S|SOUTH)[-.]?(W|WEST)[-.]?\b/g, 'SW ')
      .replace(/\b(S|SOUTH)[-.]?(E|EAST)[-.]?\b/g, 'SE ')
      .replace(/\b([NSEW])[-.]?\b/g, '$1 ')

      // rural routes
      .replace(/\b(R|RURAL)[-. ]?(R|ROUTE)[-. ]?\b/g, 'RR ')

      // highway contract
      .replace(
        /\b(H|HWY|HIWAY|HIGHWAY)[-. ]*(C|CONTRACT)[-. ]*(R|RT|ROUTE)?[-. ]*\b/g,
        'HC '
      )
      .replace(/\b(STAR[-. ]?ROUTE|S[-. ]?R)\b/g, 'HC ')

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

      // incorrect street type abbreviations
      .replace(/\bTRL\b/, 'TR')

      // periods after street type abbreviations
      .replace(
        /\b(ALY|ANX|ARC|AVE|BYU|BCH|BND|BLF|BLFS|BTM|BLVD|BR|BRG|BRK|BRKS|BG|BGS|BYP|CP|CYN|CPE|CSWY|CTR|CTRS|CIR|CIRS|CLF|CLFS|CLB|CMN|CMNS|COR|CORS|CRSE|CT|CTS|CV|CVS|CRK|CRES|XING|XRD|XRDS|CURV|DL|DM|DV|DR|DRS|EST|ESTS|EXPY|EXT|EXTS|FALL|FLS|FRY|FLD|FLDS|FLT|FLTS|FRD|FRDS|FRST|FRG|FRGS|FRK|FT|FWY|GDN|GDNS|GTWY|GLN|GLNS|GRN|GRNS|GRV|GRVS|HBR|HBRS|HVN|HTS|HWY|HL|HLS|HOLW|INLT|INTERSTATE|IS|ISS|ISLE|JCT|JCTS|KEY|KEYS|KNL|KNLS|LK|LKS|LAND|LNDG|LN|LGT|LGTS|LF|LCK|LCKS|LDG|LOOP|LOOPS|MALL|MNR|MNRS|MDW|MDWS|ML|MLS|MSN|MTWY|MT|MTN|MTNS|NCK|ORCH|OVL|OPAS|PARK|PKWY|PASS|PSGE|PATH|PIKE|PNE|PNES|PL|PLN|PLNS|PLZ|PT|PTS|PRT|PRTS|PR|RAD|RAM|RNCH|RPD|RPDS|RST|RDG|RDGS|RIV|RD|RDS|RTE|ROW|RUE|RUN|SHL|SHLS|SHR|SHRS|SKWY|SPG|SPGS|SPUR|SQ|SQS|STN|STRA|STRM|ST|STS|SMT|TER|TRWY|TRCE|TRAK|TRFY|TR|TRLR|TUNL|TPKE|UPAS|UN|UNS|VLY|VLYS|VIA|VW|VWS|VLG|VLGS|VL|VIS|WALK|WALL|WAY|WAYS|WL|WLS)[-. ]*\b/g,
        '$1 '
      )

      // secondary unit
      .replace(
        /\b(APT|APMT|APTMT|APARTMNT|APRTMNT|APARTMENT)([#-. ])+([0-9A-Z-]+)\b/g,
        'APT $3'
      )
      .replace(/\b(BLDG|BUILDING)([#-. ])+([0-9A-Z-]+)\b/g, 'BLDG $3')
      .replace(/\b(DEPT|DEPARTMENT)([#-. ])+([0-9A-Z-]+)\b/g, 'DEPT $3')
      .replace(/\b(OFC|OFFICE|OFFC)([#-. ])+([0-9A-Z-]+)\b/g, 'OFC $3')
      .replace(/\b(RM|ROOM)([#-. ])+([0-9A-Z-]+)\b/g, 'RM $3')
      .replace(/\b(SPC|SPACE)([#-. ])+([0-9A-Z-]+)\b/g, 'SPC $3')
      .replace(/\b(STE|SUITE)([#-. ])+([0-9A-Z-]+)\b/g, 'STE $3')
      .replace(/\bUNIT([#-. ])+([0-9A-Z-]+)\b/g, 'UNIT $2')
      .replace(/\b(PH|PENTHOUSE|PENT HOUSE)([#-. ])+([0-9A-Z-]+)\b/g, 'PH $3')
      .replace(/\b(APT|BLDG|DEPT|OFC|RM|SPC|STE|UNIT)([0-9-]+)\b/g, '$1 $2')

      // orphaned #
      .replace(' # ', ' #')

      // abbreviate popular street types if surrounded by words on both sides
      .replace(/\b([A-Z]+) AVENUE ([A-Z]+|#)\b/, '$1 AVE $2')
      .replace(/\b([A-Z]+) DRIVE ([A-Z]+|#)\b/, '$1 DR $2')
      .replace(/\b([A-Z]+) STREET ([A-Z]+|#)\b/, '$1 ST $2')
      .replace(/\b([A-Z]+) ROAD ([A-Z]+|#)\b/, '$1 RD $2')

      // abbreviate common street types if they end the value
      .replace(/\b([A-Z0-9]+) AVENUE$/, '$1 AVE')
      .replace(/\b([A-Z0-9]+) BOULEVARD$/, '$1 BLVD')
      .replace(/\b([A-Z0-9]+) COURT$/, '$1 CT')
      .replace(/\b([A-Z0-9]+) DRIVE$/, '$1 DR')
      .replace(/\b([A-Z0-9]+) PLACE$/, '$1 PL')
      .replace(/\b([A-Z0-9]+) STREET$/, '$1 ST')
      .replace(/\b([A-Z0-9]+) TERRACE$/, '$1 TER')
      .replace(/\b([A-Z0-9]+) ROAD$/, '$1 RD')

      // abbreviate directionals if they end the value
      .replace(/\b([A-Z0-9]+) NORTH$/, '$1 N')
      .replace(/\b([A-Z0-9]+) SOUTH$/, '$1 S')
      .replace(/\b([A-Z0-9]+) EAST$/, '$1 E')
      .replace(/\b([A-Z0-9]+) WEST$/, '$1 W')

      // formatted numbers, e.g. 80,000
      .replace(/\b(\d+),(\d+)\b/g, '$1$2')

      // periods and double-spaces
      // .replace(/\./g, ' ')
      .replace(/[,.]/g, ' ')
      .replace(/ +/g, ' ')
      .trim()
  );
};
