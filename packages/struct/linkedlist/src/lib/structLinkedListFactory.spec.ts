import { structLinkedListFactory } from './structLinkedListFactory';

describe('structLinkedListFactory', () => {
  it('initialize an empty linked list', () => {
    const ll = structLinkedListFactory();

    expect(ll.size()).toEqual(0);
    expect(ll.getHead()).toEqual(null);
    expect(ll.getTail()).toEqual(null);
  });

  it('initialize a linked list from an array', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);

    expect(ll.size()).toEqual(3);
    expect(ll.getHead()?.data).toEqual('a');
    expect(ll.getTail()?.data).toEqual('c');
  });

  it('should add one node', () => {
    const ll = structLinkedListFactory(['a']);
    expect(ll.getHead()?.data).toEqual('a');
    expect(ll.getTail()?.data).toEqual('a');
  });

  it('should add two nodes that reference each other', () => {
    const ll = structLinkedListFactory(['a', 'b']);
    const head = ll.getHead();
    const tail = ll.getTail();
    expect(head?.data).toEqual('a');
    expect(tail?.data).toEqual('b');

    expect(head?.next?.data).toEqual('b');
    expect(tail?.prev?.data).toEqual('a');
  });

  it('should add three nodes that reference each other', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    const head = ll.getHead();
    const tail = ll.getTail();
    expect(head?.data).toEqual('a');
    expect(tail?.data).toEqual('c');

    expect(head?.next?.data).toEqual('b');
    expect(tail?.prev?.data).toEqual('b');
  });

  it('should convert a list to an array', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    expect(ll.toArray()).toEqual(['a', 'b', 'c']);
    expect(ll.toArrayReverse()).toEqual(['c', 'b', 'a']);
  });

  it('should prepend items to an empty list', () => {
    const ll1 = structLinkedListFactory();
    ll1.prepend('a');
    ll1.prepend('b');
    ll1.prepend('c');

    expect(ll1.size()).toEqual(3);
    expect(ll1.getHead()?.data).toEqual('c');
    expect(ll1.getTail()?.data).toEqual('a');
  });

  it('should append items to an empty list', () => {
    const ll = structLinkedListFactory();
    ll.append('a');
    ll.append('b');
    ll.append('c');

    expect(ll.size()).toEqual(3);
    expect(ll.getHead()?.data).toEqual('a');
    expect(ll.getTail()?.data).toEqual('c');
  });

  it('should clear a list', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    expect(ll.size()).toEqual(3);

    ll.clear();
    expect(ll.size()).toEqual(0);
    expect(ll.getHead()).toEqual(null);
    expect(ll.getTail()).toEqual(null);
  });

  it('should return the head & tail nodes', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c', 'd']);
    expect(ll.getHead()?.data).toEqual('a');
    expect(ll.getTail()?.data).toEqual('d');
  });

  it('should be able to "walk" the list', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c', 'd']);
    expect(ll.getHead()?.next?.next?.data).toEqual('c');
  });

  it('should be able to find a node', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c', 'd']);
    const comparator = (data: string) => data === 'b';

    expect(ll.find(comparator)?.data).toEqual('b');
  });

  it('should add a new node before a specified node', () => {
    const ll = structLinkedListFactory(['a', 'b', 'd']);
    expect(ll.size()).toEqual(3);

    const node = ll.getTail();
    expect(node?.data).toEqual('d');

    ll.insertBefore(node!, 'c');

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'b', 'c', 'd']);
    expect(fwd).toEqual(rev.reverse());
  });

  it('should add a new node as the head node', () => {
    const ll = structLinkedListFactory(['b', 'c']);
    const node = ll.getHead();
    expect(node?.data).toEqual('b');

    ll.insertBefore(node!, 'a');

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'b', 'c']);
    expect(fwd).toEqual(rev.reverse());

    expect(ll.getHead()?.data).toEqual('a');
    expect(ll.size()).toEqual(3);
  });

  it('should add a new node after a specified node', () => {
    const ll = structLinkedListFactory(['a', 'b', 'd']);
    expect(ll.size()).toEqual(3);

    const node = ll.getHead()?.next;
    expect(node?.data).toEqual('b');

    ll.insertAfter(node!, 'c');
    expect(ll.size()).toEqual(4);

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'b', 'c', 'd']);
    expect(fwd).toEqual(rev.reverse());
  });

  it('should add a new node as the tail node', () => {
    const ll = structLinkedListFactory(['a', 'b']);
    const node = ll.getTail();
    expect(node?.data).toEqual('b');

    ll.insertAfter(node!, 'c');

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'b', 'c']);
    expect(fwd).toEqual(rev.reverse());

    expect(ll.getTail()?.data).toEqual('c');
    expect(ll.size()).toEqual(3);
  });

  it('should delete a node from the middle of a list', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    const node = ll.getHead()?.next;
    expect(node?.data).toEqual('b');

    ll.deleteNode(node!);

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'c']);
    expect(fwd).toEqual(rev.reverse());
    expect(ll.size()).toEqual(2);
  });

  it('should delete the head node', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    ll.deleteHead();

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['b', 'c']);
    expect(fwd).toEqual(rev.reverse());
    expect(ll.size()).toEqual(2);
    expect(ll.getHead()?.data).toEqual('b');
  });

  it('should update list head & tail pointers when removing a node from a single-item list', () => {
    const ll = structLinkedListFactory(['one']);
    const node = ll.getHead();
    ll.deleteNode(node!);

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual([]);
    expect(rev).toEqual([]);
    expect(ll.size()).toEqual(0);
  });

  it('should not cause errors when deleting the head node on an empty list', () => {
    const ll = structLinkedListFactory();
    ll.deleteHead();
    expect(ll.size()).toEqual(0);
  });

  it('should delete the tail node', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c']);
    ll.deleteTail();

    const fwd = ll.toArray();
    const rev = ll.toArrayReverse();
    expect(fwd).toEqual(['a', 'b']);
    expect(fwd).toEqual(rev.reverse());
    expect(ll.size()).toEqual(2);
    expect(ll.getTail()?.data).toEqual('b');
  });

  it('should not cause errors when deleting the tail node on an empty list', () => {
    const ll = structLinkedListFactory();
    ll.deleteTail();
    expect(ll.size()).toEqual(0);
  });

  it('should be iterable', () => {
    const ll = structLinkedListFactory(['a', 'b', 'c', 'd', 'e']);
    const array = [];
    for (const val of ll) {
      array.push(val);
    }
    expect(array).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('should match the README.md example', () => {
    const ll = structLinkedListFactory();

    ll.append('c');
    ll.append('d');

    ll.prepend('b');
    ll.prepend('a');

    expect(ll.size()).toEqual(4);

    expect(ll.toArray()).toEqual(['a', 'b', 'c', 'd']);

    const head = ll.getHead();
    expect(head?.data).toEqual('a');

    const tail = ll.getTail();
    expect(tail?.data).toEqual('d');

    expect(head?.next?.data).toEqual('b');
    expect(tail?.prev?.data).toEqual('c');

    ll.insertBefore(tail!, 'c2');
    ll.insertAfter(head!, 'a2');
    expect(ll.toArray()).toEqual(['a', 'a2', 'b', 'c', 'c2', 'd']);

    ll.deleteHead();
    ll.deleteTail();
    const newHead = ll.getHead(); // { data: "a2", prev: null, next: [Object]}

    const nextNode = newHead?.next;
    ll.deleteNode(nextNode!);

    expect(ll.toArray()).toEqual(['a2', 'c', 'c2']);
  });
});
