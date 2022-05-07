import ts from 'rollup-plugin-ts';

const dir = 'types/types.timezones';

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
    ],
    plugins: [
      ts({
        tsconfig: `packages/${dir}/tsconfig.lib.json`,
      }),
    ],
  },
];
