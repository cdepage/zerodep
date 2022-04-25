import { ZeroDepError } from './ZeroDepError';

describe('ZeroDepError', () => {
  let err: ZeroDepError;

  beforeAll(() => {
    err = new ZeroDepError();
  });

  it('should be an instance of Error', () => {
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepError');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('An unexpected error has occurred');
    expect(err.code).toEqual(500);
    expect(err.source).toEqual(undefined);
  });
});
