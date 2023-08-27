export interface AddressPieces {
  city?: string;
  state?: string;
  country?: string;
  zip?: string | number;
}

export interface Address {
  attn?: string;
  careOf?: string;
  pmb?: string;
  secondary?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  state?: string;
  zip?: string;
  zipExt?: string;
  country?: string;

  msc?: string;
  poBox?: string;
  rural?: string;
  highway?: string;
  military?: string;
  generalDelivery?: string;
  // condoUrbanization?: string; // puerto rico
  // misc?: string; // unknown address part
  secondaryType?: string;
  secondaryNumber?: string;
  buildingNumber?: string;
  directionalPre?: string;
  streetNamePre?: string;
  streetType?: string;
  streetNamePost?: string;
  directionalPost?: string;
  street?: string;
}

export interface IAddressWip extends Address {
  source: string; // what the user provided
  normalized: string; // what the user provided
  remaining: string; // unparsed parts of the address
  remainingPreStreet?: string; // unparsed parts of the address before the street type
  remainingPostStreet?: string; // unparsed parts of the address after the street type
}
