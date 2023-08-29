import { structTreeFactory } from './structTreeFactory';

describe('structTreeFactory', () => {
  it('should initialize an empty tree', () => {
    const tree = structTreeFactory();
    expect(tree.getRootNode()).toEqual(null);
    expect(tree.toJSON()).toEqual(null);
  });

  it('should set and return the root node', () => {
    const tree = structTreeFactory();
    tree.setRootNode('root');

    expect(tree.getRootNode()).toEqual({
      data: 'root',
      parent: null,
      children: null,
    });
    expect(tree.toJSON()).toEqual({ data: 'root' });
  });

  it('should add a child node', () => {
    const tree = structTreeFactory();
    const rootNode = tree.setRootNode('root');
    const l1 = tree.addChild(rootNode, 'level 1');

    expect(rootNode).toEqual({
      data: 'root',
      parent: null,
      children: [l1],
    });

    expect(l1).toEqual({
      data: 'level 1',
      parent: rootNode,
      children: null,
    });

    expect(tree.toJSON()).toEqual({
      data: 'root',
      children: [{ data: 'level 1' }],
    });
  });

  it('should add children node', () => {
    const tree = structTreeFactory();
    const rootNode = tree.setRootNode('root');
    const children = tree.addChildren(rootNode, ['c1', 'c2', 'c3']);

    expect(children).toEqual([
      {
        data: 'c1',
        parent: rootNode,
        children: null,
      },
      {
        data: 'c2',
        parent: rootNode,
        children: null,
      },
      {
        data: 'c3',
        parent: rootNode,
        children: null,
      },
    ]);

    expect(rootNode).toEqual({
      data: 'root',
      parent: null,
      children,
    });

    expect(tree.toJSON()).toEqual({
      data: 'root',
      children: [{ data: 'c1' }, { data: 'c2' }, { data: 'c3' }],
    });
  });

  it('should do a depth-first search', () => {
    const tree = structTreeFactory<string>();
    const rootNode = tree.setRootNode('root');
    const children = tree.addChildren(rootNode, ['a', 'b', 'c']);
    const grandChildrenA = tree.addChildren(children[0], ['a-1', 'a-2']);
    const grandChildrenB = tree.addChildren(children[1], ['b-1', 'b-2']);
    const grandChildrenC = tree.addChildren(children[2], ['c-1', 'c-3']);
    tree.addChildren(grandChildrenA[0], ['a-1-a', 'a-1-b']);
    tree.addChildren(grandChildrenB[0], ['b-1-a', 'b-1-b']);
    tree.addChildren(grandChildrenC[0], ['c-1-a', 'c-1-b']);

    const comparator1 = (data: string) => data === 'a';
    const matchPath1 = tree.dfs(comparator1);
    expect(matchPath1?.data).toEqual('a');

    const comparator2 = (data: string) => data === 'b-1';
    const matchPath2 = tree.dfs(comparator2);
    expect(matchPath2?.data).toEqual('b-1');

    const comparator3 = (data: string) => data === 'c-1-b';
    const matchPath3 = tree.dfs(comparator3);
    expect(matchPath3?.data).toEqual('c-1-b');

    const comparator4 = (data: string) => data === 'x-5-x';
    const matchPath4 = tree.dfs(comparator4);
    expect(matchPath4).toEqual(null);
  });

  it('should do a breadth-first search', () => {
    const tree = structTreeFactory<string>();
    const rootNode = tree.setRootNode('root');
    const children = tree.addChildren(rootNode, ['a', 'b', 'c']);
    const grandChildrenA = tree.addChildren(children[0], ['a-1', 'a-2']);
    const grandChildrenB = tree.addChildren(children[1], ['b-1', 'b-2']);
    const grandChildrenC = tree.addChildren(children[2], ['c-1', 'c-3']);
    tree.addChildren(grandChildrenA[0], ['a-1-a', 'a-1-b']);
    tree.addChildren(grandChildrenB[0], ['b-1-a', 'b-1-b']);
    tree.addChildren(grandChildrenC[0], ['c-1-a', 'c-1-b']);

    const comparator1 = (data: string) => data === 'a';
    const matchPath1 = tree.bfs(comparator1);
    expect(matchPath1?.data).toEqual('a');

    const comparator2 = (data: string) => data === 'b-1';
    const matchPath2 = tree.bfs(comparator2);
    expect(matchPath2?.data).toEqual('b-1');

    const comparator3 = (data: string) => data === 'c-1-b';
    const matchPath3 = tree.bfs(comparator3);
    expect(matchPath3?.data).toEqual('c-1-b');

    const comparator4 = (data: string) => data === 'x-5-x';
    const matchPath4 = tree.dfs(comparator4);
    expect(matchPath4).toEqual(null);
  });

  it('should populate from a simple constructor', () => {
    const json = {
      data: 'root',
      children: [
        {
          data: 'level 1, item 1',
        },
      ],
    };
    const tree = structTreeFactory<string>(json);
    expect(tree.toJSON()).toEqual(json);
  });

  it('should populate from a complex constructor', () => {
    const json = {
      data: 'root',
      children: [
        {
          data: 'aa',
          children: [
            {
              data: 'bb',
              children: [
                {
                  data: 'cc',
                  children: [
                    {
                      data: 'dd1',
                      children: [
                        { data: 'ee1' },
                        { data: 'ee2' },
                        { data: 'ee3' },
                      ],
                    },
                    {
                      data: 'dd2',
                      children: [
                        { data: 'ff1' },
                        { data: 'ff2' },
                        { data: 'ff3' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    const tree = structTreeFactory<string>(json);
    expect(tree.toJSON()).toEqual(json);
  });

  it('should return a filtered array of nodes using depth-first search', () => {
    const json = {
      data: 'root',
      children: [
        {
          data: 'a',
          children: [{ data: 'a1' }, { data: 'a2' }, { data: 'a3' }],
        },
        {
          data: 'b',
          children: [{ data: 'b1' }, { data: 'b2' }, { data: 'b3' }],
        },
      ],
    };
    const tree = structTreeFactory<string>(json);

    const comparator1 = (data: string) => data.endsWith('1');
    const matches1 = tree.dfsFilter(comparator1).map((node) => node.data);
    expect(matches1).toEqual(['a1', 'b1']);

    const comparator2 = (data: string) => data.startsWith('a');
    const matches2 = tree.dfsFilter(comparator2).map((node) => node.data);
    expect(matches2).toEqual(['a', 'a1', 'a2', 'a3']);
  });

  it('should return a filtered array of nodes using breadth-first search', () => {
    const json = {
      data: 'root',
      children: [
        {
          data: 'a',
          children: [{ data: 'a1' }, { data: 'a2' }, { data: 'a3' }],
        },
        {
          data: 'b',
          children: [{ data: 'b1' }, { data: 'b2' }, { data: 'b3' }],
        },
      ],
    };
    const tree = structTreeFactory<string>(json);

    const comparator1 = (data: string) => data.endsWith('1');
    const matches1 = tree.bfsFilter(comparator1).map((node) => node.data);
    expect(matches1).toEqual(['a1', 'b1']);

    const comparator2 = (data: string) => data.startsWith('a');
    const matches2 = tree.bfsFilter(comparator2).map((node) => node.data);
    expect(matches2).toEqual(['a', 'a1', 'a2', 'a3']);
  });
});
