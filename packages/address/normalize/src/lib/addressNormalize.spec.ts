import { addressNormalize } from './addressNormalize';

describe('addressNormalize', () => {
  it('should strip new lines, dashes, commas and periods', () => {
    const addy = `
       733 N. BROADWAY STREET SE - SUITE 137
       BALTIMORE, MD
       21205
    `;
    expect(addressNormalize(addy)).toEqual(
      '733 N BROADWAY STREET SE - STE 137 BALTIMORE MD 21205'
    );
  });

  it('should remove parentheses and their contents', () => {
    const addy = '1234 Main Street (something)';
    expect(addressNormalize(addy)).toEqual('1234 MAIN STREET');
  });

  it('should fix directionals', () => {
    const addy1 = '1234 Main Street S.w.';
    expect(addressNormalize(addy1)).toEqual('1234 MAIN STREET SW');

    const addy2 = '1234 Main Street n-e';
    expect(addressNormalize(addy2)).toEqual('1234 MAIN STREET NE');

    const addy3 = '1234 Main Street South-East';
    expect(addressNormalize(addy3)).toEqual('1234 MAIN STREET SE');

    const addy4 = '1234 Main Street Southwest';
    expect(addressNormalize(addy4)).toEqual('1234 MAIN STREET SW');

    const addy5 = '1234 East South Street';
    expect(addressNormalize(addy5)).toEqual('1234 EAST SOUTH STREET');

    const addy6 = '1234 Southeast Street';
    expect(addressNormalize(addy6)).toEqual('1234 SE STREET');
  });

  it('should fix po boxes', () => {
    const addy1 = 'pob 1234';
    expect(addressNormalize(addy1)).toEqual('PO BOX 1234');

    const addy2 = 'PO B 1234';
    expect(addressNormalize(addy2)).toEqual('PO BOX 1234');

    const addy3 = 'P.O.B 1234';
    expect(addressNormalize(addy3)).toEqual('PO BOX 1234');

    const addy4 = 'P-O Bx 1234';
    expect(addressNormalize(addy4)).toEqual('PO BOX 1234');

    const addy5 = 'drawer 1234';
    expect(addressNormalize(addy5)).not.toEqual('PO BOX 1234'); // "drawer" is too generic to fix here
  });

  it('should fix rural routes', () => {
    const addy1 = 'rr 2 box 3';
    expect(addressNormalize(addy1)).toEqual('RR 2 BOX 3');

    const addy2 = 'RRoute 2 box 3';
    expect(addressNormalize(addy2)).toEqual('RR 2 BOX 3');

    const addy3 = 'rural route 2 box 3';
    expect(addressNormalize(addy3)).toEqual('RR 2 BOX 3');

    const addy4 = 'r route 2 box 3';
    expect(addressNormalize(addy4)).toEqual('RR 2 BOX 3');
  });

  it('should fix highway contracts', () => {
    const addy1 = 'h.c. 68 box 23-a';
    expect(addressNormalize(addy1)).toEqual('HC 68 BOX 23-A');

    const addy2 = 'hc route 68 box 23-a';
    expect(addressNormalize(addy2)).toEqual('HC 68 BOX 23-A');

    const addy3 = 'h-c 68 box 23-a';
    expect(addressNormalize(addy3)).toEqual('HC 68 BOX 23-A');

    const addy4 = 'hiway contract 68 box 23-a';
    expect(addressNormalize(addy4)).toEqual('HC 68 BOX 23-A');

    const addy5 = 'star route 68 box 23-a';
    expect(addressNormalize(addy5)).toEqual('HC 68 BOX 23-A');
  });

  it('should fix general delivery', () => {
    const addy1 = 'gd';
    expect(addressNormalize(addy1)).toEqual('GENERAL DELIVERY');

    const addy2 = 'gen-del';
    expect(addressNormalize(addy2)).toEqual('GENERAL DELIVERY');

    const addy3 = 'g.delivery';
    expect(addressNormalize(addy3)).toEqual('GENERAL DELIVERY');

    const addy4 = 'general delivery';
    expect(addressNormalize(addy4)).toEqual('GENERAL DELIVERY');

    const addy5 = 'g.d.';
    expect(addressNormalize(addy5)).toEqual('GENERAL DELIVERY');
  });

  it('should fix private mail boxes', () => {
    const addy1 = 'pmb 234';
    expect(addressNormalize(addy1)).toEqual('PMB 234');

    const addy2 = 'p.m.b. 234';
    expect(addressNormalize(addy2)).toEqual('PMB 234');

    const addy3 = 'priv mailbox 234';
    expect(addressNormalize(addy3)).toEqual('PMB 234');

    const addy4 = 'private mailbox 234';
    expect(addressNormalize(addy4)).toEqual('PMB 234');

    const addy5 = 'pvt mail box 234';
    expect(addressNormalize(addy5)).toEqual('PMB 234');
  });

  it('should fix secondary unit prefixes', () => {
    const addy1 = 'apt #14-a';
    expect(addressNormalize(addy1)).toEqual('APT 14-A');

    const addy2 = 'apt # 14-a';
    expect(addressNormalize(addy2)).toEqual('APT 14-A');

    const addy3 = 'apartment # 2b';
    expect(addressNormalize(addy3)).toEqual('APT 2B');

    const addy4 = 'apmt 4';
    expect(addressNormalize(addy4)).toEqual('APT 4');

    const addy5 = 'apmt d';
    expect(addressNormalize(addy5)).toEqual('APT D');
  });

  it('should fix doc example 1', () => {
    const addy1 = '1234 Main Street S.West apt # 14-a';
    const addy2 = '1234 Main Street south-west apt 14-a';
    expect(addressNormalize(addy1)).toEqual('1234 MAIN STREET SW APT 14-A');
    expect(addressNormalize(addy2)).toEqual('1234 MAIN STREET SW APT 14-A');
  });

  it('should fix doc example 2', () => {
    const addy1 = 'apartment 3c, south-east cloverfield ave, manville nj 08835';
    const addy2 = 'apmt 3c se cloverfield ave manville nj 08835';
    expect(addressNormalize(addy1)).toEqual(
      'APT 3C SE CLOVERFIELD AVE MANVILLE NJ 08835'
    );
    expect(addressNormalize(addy2)).toEqual(
      'APT 3C SE CLOVERFIELD AVE MANVILLE NJ 08835'
    );
  });

  it('should fix doc example 3', () => {
    const addy1 = 'p.o.b 1234';
    const addy2 = 'po box 1234';
    expect(addressNormalize(addy1)).toEqual('PO BOX 1234');
    expect(addressNormalize(addy2)).toEqual('PO BOX 1234');
  });

  it('should throw when the address is longer than 200 characters', () => {
    const longAddress = `
      Attention: Mr. John Smith
      Care Of: Ms. Jane Doe
      6789 Oak Avenue, Apartment 1617181920, Building C, Suite 2122232425, Floor 28
      Lakeview, Texas 54321-6789
      United States of America
    `;
    const fn = () => addressNormalize(longAddress);
    expect(fn).toThrow('Address is too long');
  });

  it('should return an empty string when an empty string provided', () => {
    expect(addressNormalize('')).toEqual('');
  });
});
