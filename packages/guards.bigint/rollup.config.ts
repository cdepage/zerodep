import ts from 'rollup-plugin-ts';

const dir = 'guards.bigint';

export default [
  {
    input: `packages/${dir}/src/index.ts`,
    output: [
      {
        file: `dist/packages/${dir}/index.esm.js`,
        format: 'esm',
        banner: `/* @source the https://github.com/cdepage/zerodep/tree/main/packages/${dir} */`,
      },
      {
        file: `dist/packages/${dir}/index.cjs.js`,
        format: 'cjs',
        banner: `/* @source the https://github.com/cdepage/zerodep/tree/main/packages/${dir} */`,
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
