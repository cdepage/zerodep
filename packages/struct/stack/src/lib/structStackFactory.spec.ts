import { structStackFactory } from './structStackFactory';

describe('structStackFactory', () => {
  it('should create a stack with expected interface methods', () => {
    const stack = structStackFactory();
    expect(stack).toHaveProperty('fromArray');
    expect(stack).toHaveProperty('toArray');
    expect(stack).toHaveProperty('push');
    expect(stack).toHaveProperty('pop');
    expect(stack).toHaveProperty('peek');
    expect(stack).toHaveProperty('size');
  });

  describe('instance', () => {
    const stack = structStackFactory<Record<string, number>>();

    it('should add items to the stack and have the correct size', () => {
      expect(stack.size()).toEqual(0);
      stack.push({ a: 1 });
      stack.push({ b: 2 });
      expect(stack.size()).toEqual(2);
    });

    it('should return the last item in the stack when peeked, but not remove it', () => {
      stack.push({ c: 3 });
      const size = stack.size();
      expect(stack.peek()).toEqual({ c: 3 });
      expect(stack.size()).toEqual(size);
    });

    it('should return the last item in the stack when popped, and remove it', () => {
      stack.push({ d: 4 });
      const size = stack.size();
      expect(stack.pop()).toEqual({ d: 4 });
      expect(stack.peek()).not.toEqual({ d: 4 });
      expect(stack.size()).toEqual(size - 1);
    });

    it('should clear all items on the stack', () => {
      stack.push({ e: 5 });
      expect(stack.size()).toBeGreaterThan(0);
      stack.clear();
      expect(stack.size()).toEqual(0);
    });

    it('should return "undefined" if no item on the stack when peeked', () => {
      stack.clear();
      expect(stack.peek()).toEqual(undefined);
    });

    it('should return "undefined" if no item on the stack when popped', () => {
      stack.clear();
      expect(stack.pop()).toEqual(undefined);
    });

    it('should populate at runtime', () => {
      const stack = structStackFactory([1, 2, 3]);
      stack.push(4);
      stack.push(5);
      const item1 = stack.pop();
      expect(item1).toEqual(5);
      expect(stack.toArray()).toEqual([1, 2, 3, 4]);
    });

    it('should be serializable', () => {
      stack.clear();
      stack.push({ a: 1 });
      stack.push({ b: 2 });
      stack.push({ c: 3 });
      expect(stack.toArray()).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
    });
  });

  describe('multiple instances', () => {
    const stack1 = structStackFactory();
    stack1.fromArray(['a', 'b', 'c']);

    const stack2 = structStackFactory([1, 2, 3, 4, 5]);

    it('should support multiple stacks', () => {
      expect(stack1.peek()).toEqual('c');
      expect(stack1.size()).toEqual(3);

      expect(stack2.peek()).toEqual(5);
      expect(stack2.size()).toEqual(5);
    });
  });
});
