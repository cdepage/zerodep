import {
  eventEmitterFactory,
  StructEventEmitter,
} from '@zerodep/struct-eventemitter';

export interface QueueEvents<T> {
  enqueued: { name: string; ts: number; payload: T };
  dequeued: { name: string; ts: number; payload: T };
  emptied: { name: string; ts: number };
}

export interface StructQueue<T>
  extends Pick<
    StructEventEmitter<QueueEvents<T>>,
    'on' | 'once' | 'first' | 'off'
  > {
  fromArray: (data: T[]) => void;
  toArray: () => T[];
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  front: () => T | undefined;
  size: () => number;
  isEmpty: () => boolean;
  clear: () => void; // same syntax as Map() and Set()
}

export const structQueueFactory = <T = any>(
  name: string,
  data: T[] = []
): StructQueue<T> => {
  let items: T[] = [...data];

  // add event emitter capabilities (do not expose emit & removeAllListeners in the public API)
  const { emit, removeAllListeners, ...eventEmitterMethods } =
    eventEmitterFactory<QueueEvents<T>>();

  return {
    // time complexity: linear - O(n)
    fromArray: (data: T[]) => {
      items = [...data];
    },

    // time complexity: constant - O(1)
    toArray: () => items,

    // time complexity: constant - O(1)
    enqueue: (item: T) => {
      items.push(item);
      emit('enqueued', { name, ts: Date.now(), payload: item });
    },

    // time complexity: constant - O(1)
    dequeue: (): T | undefined => {
      const item = items.shift();

      // no need to notify everybody of nothing
      if (item) {
        emit('dequeued', { name, ts: Date.now(), payload: item });

        if (items.length === 0) {
          emit('emptied', { name, ts: Date.now() });
        }
      }
      return item;
    },

    // time complexity: constant - O(1)
    front: (): T => items[0],

    // time complexity: constant - O(1)
    clear: () => {
      if (items.length > 0) {
        emit('emptied', { name, ts: Date.now() });
      }
      items = [];
    },

    // time complexity: constant - O(1)
    size: () => items.length,

    // time complexity: constant - O(1)
    isEmpty: () => items.length === 0,

    // event emitter hooks
    ...eventEmitterMethods,
  };
};
