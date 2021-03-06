import { ZeroDepError } from '../ZeroDepError';
import { ZeroDepErrorTo } from './ZeroDepErrorTo';

describe('ZeroDepErrorGuard', () => {
  let err: ZeroDepErrorTo;

  beforeAll(() => {
    err = new ZeroDepErrorTo();
  });

  it('should extend base ZeroDepError', () => {
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorTo');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Cannot convert value');
    expect(err.category).toEqual('syntax');
    expect(err.source).toEqual('to');
    expect(err.value).toEqual(undefined);
  });
});
