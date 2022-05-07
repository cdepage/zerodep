import { ZeroDepError } from '../ZeroDepError';
import { ZeroDepErrorIs } from './ZeroDepErrorIs';

describe('ZeroDepErrorIs', () => {
  let err: ZeroDepErrorIs;

  beforeAll(() => {
    err = new ZeroDepErrorIs();
  });

  it('should extend base ZeroDepError', () => {
    expect(err).toBeInstanceOf(ZeroDepError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should have the correct name', () => {
    expect(err.name).toEqual('ZeroDepErrorIs');
  });

  it('should have default values', () => {
    expect(err.message).toEqual('Cannot check value');
    expect(err.category).toEqual('type');
    expect(err.source).toEqual('is');
    expect(err.value).toEqual(undefined);
  });
});
