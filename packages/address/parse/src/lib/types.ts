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
