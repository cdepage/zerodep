import { ZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuard } from './ZeroDepErrorGuard';

describe('ZeroDepErrorGuard', () => {
  let err: ZeroDepErrorGuard;

  beforeAll(() => {
    err = new ZeroDepErrorGuard();
  });

  it('should extend base ZeroDepError', () => {
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorGuard');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Value is invalid');
    expect(err.tax).toEqual('unknown');
    expect(err.source).toEqual('guard');
    expect(err.value).toEqual(undefined);
  });
});
