import ts from 'rollup-plugin-ts';

const dir = 'is/is.typedarray';

const banner = `/**
 * @source the https://github.com/cdepage/zerodep/tree/main/packages/${dir}
 */`;

export default [
  {
    input: `packages/${dir}/src/index.ts`,
    output: [
      {
        file: `dist/packages/${dir}/esm.js`,
        format: 'esm',
        banner,
      },
      {
        file: `dist/packages/${dir}/cjs.js`,
        format: 'cjs',
        banner,
        interop: 'auto',
      },
      {
        file: `dist/packages/${dir}/umd.js`,
        name: 'zd',
        format: 'iife',
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
