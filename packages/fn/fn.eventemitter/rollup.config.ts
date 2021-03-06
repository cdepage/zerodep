import ts from 'rollup-plugin-ts';

const dir = 'fn/fn.eventemitter';

const banner = `/**
 * @source the https://github.com/cdepage/zerodep/tree/main/packages/${dir}
 */`;

export default [
  {
    input: `packages/${dir}/src/index.ts`,
    output: [
      {
        file: `dist/packages/${dir}/index.esm.js`,
        format: 'esm',
        banner,
      },
      {
        file: `dist/packages/${dir}/index.cjs.js`,
        format: 'cjs',
        banner,
        interop: 'auto',
      },
    ],
    plugins: [
      ts({
        tsconfig: `packages/${dir}/tsconfig.lib.json`,
      }),
    ],
  },
];
