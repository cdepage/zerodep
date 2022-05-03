import { ZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorFormat } from './ZeroDepErrorFormat';

describe('ZeroDepErrorFormat', () => {
  let err: ZeroDepErrorFormat;

  beforeAll(() => {
    err = new ZeroDepErrorFormat();
  });

  it('should extend base ZeroDepError', () => {
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorFormat');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Cannot format value');
    expect(err.category).toEqual('unknown');
    expect(err.source).toEqual('format');
    expect(err.value).toEqual(undefined);
  });
});
