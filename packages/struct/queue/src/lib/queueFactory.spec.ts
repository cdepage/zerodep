import { queueFactory } from './queueFactory';

jest.useFakeTimers();

describe('queueFactory', () => {
  it('should create a queue with expected interface methods', () => {
    const queue = queueFactory('Some Queue');
    expect(queue).toHaveProperty('fromArray');
    expect(queue).toHaveProperty('toArray');
    expect(queue).toHaveProperty('enqueue');
    expect(queue).toHaveProperty('dequeue');
    expect(queue).toHaveProperty('front');
    expect(queue).toHaveProperty('size');
    expect(queue).toHaveProperty('isEmpty');
    expect(queue).toHaveProperty('clear');
  });

  describe('instance', () => {
    const queue = queueFactory<Record<string, number>>('My Queue');

    it('should add items to the queue and have the correct size', () => {
      expect(queue.size()).toEqual(0);
      queue.enqueue({ a: 1 });
      queue.enqueue({ b: 2 });
      expect(queue.size()).toEqual(2);
      expect(queue.isEmpty()).toEqual(false);
    });

    it('should return the first item in the queue when "front", but not remove it', () => {
      queue.clear();
      queue.enqueue({ c: 3 });
      queue.enqueue({ d: 4 });
      const size = queue.size();
      expect(queue.front()).toEqual({ c: 3 });
      expect(queue.size()).toEqual(size);
    });

    it('should return the next item in the queue when dequeued, and remove it', () => {
      queue.clear();
      queue.enqueue({ d: 4 });
      queue.enqueue({ e: 5 });
      queue.enqueue({ f: 6 });
      const size = queue.size();
      expect(queue.dequeue()).toEqual({ d: 4 });
      expect(queue.front()).toEqual({ e: 5 });
      expect(queue.size()).toEqual(size - 1);
    });

    it('should clear all items on the queue', () => {
      queue.enqueue({ g: 7 });
      expect(queue.size()).toBeGreaterThan(0);
      queue.clear();
      expect(queue.size()).toEqual(0);
    });

    it('should return "undefined" if no item on the queue when fronted', () => {
      queue.clear();
      expect(queue.front()).toEqual(undefined);
    });

    it('should return "undefined" if no item on the queue when dequeued', () => {
      queue.clear();
      expect(queue.isEmpty()).toEqual(true);
      expect(queue.dequeue()).toEqual(undefined);
    });

    it('should be serializable', () => {
      queue.clear();
      queue.enqueue({ a: 1 });
      queue.enqueue({ b: 2 });
      queue.enqueue({ c: 3 });
      expect(queue.toArray()).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
    });
  });

  describe('multiple instances', () => {
    const queue1 = queueFactory('queue #1');
    queue1.fromArray(['a', 'b', 'c']);

    const queue2 = queueFactory('queue #2');
    queue2.fromArray([1, 2, 3, 4, 5]);

    it('should support multiple queues', () => {
      expect(queue1.front()).toEqual('a');
      expect(queue1.size()).toEqual(3);

      expect(queue2.front()).toEqual(1);
      expect(queue2.size()).toEqual(5);
    });
  });

  describe('event emitting', () => {
    const queue = queueFactory('my queue');
    const enqueueFn = jest.fn();
    const dequeueFn = jest.fn();
    const emptiedFn = jest.fn();

    beforeAll(() => {
      queue.on('enqueued', enqueueFn);
      queue.on('dequeued', dequeueFn);
      queue.on('emptied', emptiedFn);
    });

    afterEach(() => {
      queue.clear();
      enqueueFn.mockClear();
      dequeueFn.mockClear();
      emptiedFn.mockClear();
    });

    afterAll(() => {
      queue.off('enqueued', enqueueFn);
      queue.off('dequeued', dequeueFn);
      queue.off('emptied', emptiedFn);
    });

    it('should emit an "enqueued" event when an item enqueued', () => {
      const ts = Date.now();
      queue.enqueue('abc');
      expect(enqueueFn).toHaveBeenCalledWith({
        name: 'my queue',
        ts,
        payload: 'abc',
      });
    }, 10);

    it('should emit a "dequeued" event when an item dequeued (queue not empty)', () => {
      queue.enqueue('abc');
      queue.enqueue('def');
      const ts = Date.now();
      const val = queue.dequeue();
      expect(val).toEqual('abc');
      expect(enqueueFn).toHaveBeenCalledWith({
        name: 'my queue',
        ts,
        payload: 'abc',
      });
    }, 10);

    it('should emit a "dequeued" and "emptied" event when an item dequeued (queue made empty)', () => {
      queue.enqueue('ghi');
      const ts = Date.now();
      queue.dequeue();
      expect(dequeueFn).toHaveBeenCalledWith({
        name: 'my queue',
        ts,
        payload: 'ghi',
      });
      expect(emptiedFn).toHaveBeenCalledWith({ name: 'my queue', ts });
    }, 10);

    it('should emit an "emptied" event when queue is cleared and it previously had items', () => {
      queue.enqueue('jkl');
      expect(queue.size()).toEqual(1);
      queue.clear();
      expect(emptiedFn).toHaveBeenCalledTimes(1);
    }, 10);

    it('should NOT emit an "emptied" event when queue is cleared and it previously had no items', () => {
      expect(queue.size()).toEqual(0);
      queue.clear();
      expect(emptiedFn).toHaveBeenCalledTimes(0);
    }, 10);
  });
});
