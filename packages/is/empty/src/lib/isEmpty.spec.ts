import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  describe('positive cases', () => {
    it('should treat undefined as empty', () => {
      expect(isEmpty(undefined)).toEqual(true);
    });

    it('should treat null as empty', () => {
      expect(isEmpty(null)).toEqual(true);
    });

    it('should treat an empty string as empty', () => {
      expect(isEmpty('')).toEqual(true);
    });

    it('should treat an empty array as empty', () => {
      expect(isEmpty([])).toEqual(true);
    });

    it('should treat an empty object as empty', () => {
      expect(isEmpty({})).toEqual(true);
    });

    it('should treat an empty Map as empty', () => {
      expect(isEmpty(new Map())).toEqual(true);
    });

    it('should treat an empty Set as empty', () => {
      expect(isEmpty(new Set())).toEqual(true);
    });

    it('should treat an empty WeakMap as empty', () => {
      expect(isEmpty(new WeakMap())).toEqual(true);
    });

    it('should treat an empty WeakSet as empty', () => {
      expect(isEmpty(new WeakSet())).toEqual(true);
    });
  });

  describe('negative cases', () => {
    it('should treat a string as non-empty', () => {
      expect(isEmpty('a')).toEqual(false);
    });

    it('should treat an integer as non-empty', () => {
      expect(isEmpty(1)).toEqual(false);
    });

    it('should treat a non-empty array as non-empty', () => {
      expect(isEmpty(['a'])).toEqual(false);
    });

    it('should treat a non-empty object as non-empty', () => {
      expect(isEmpty({ some: 'value' })).toEqual(false);
    });

    it('should treat a non-empty Map as non-empty', () => {
      expect(isEmpty(new Map([['a', 1]]))).toEqual(false);
    });

    it('should treat a non-empty Set as non-empty', () => {
      expect(isEmpty(new Set(['a']))).toEqual(false);
    });

    it('should treat a float as non-empty', () => {
      expect(isEmpty(0.08)).toEqual(false);
    });

    it('should treat a BigInt as non-empty', () => {
      expect(isEmpty(42n)).toEqual(false);
    });

    it('should treat a boolean true as non-empty', () => {
      expect(isEmpty(true)).toEqual(false);
    });

    it('should treat a boolean false as non-empty', () => {
      expect(isEmpty(false)).toEqual(false);
    });

    it('should treat a date false as non-empty', () => {
      expect(isEmpty(new Date())).toEqual(false);
    });

    it('should treat a function false as non-empty', () => {
      expect(isEmpty(() => 42)).toEqual(false);
    });

    it('should treat a Promise false as non-empty', () => {
      expect(isEmpty(new Promise(() => {}))).toEqual(false);
    });

    it('should treat a Symbol false as non-empty', () => {
      expect(isEmpty(Symbol())).toEqual(false);
    });

    it('should treat an Error false as non-empty', () => {
      expect(isEmpty(new Error('test'))).toEqual(false);
    });
  });
});
