import { dirname } from 'path';
import ts from 'rollup-plugin-ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// get the relative path of the file
const dir = dirname(__filename).split('/').slice(-3).join('/');

const banner = `/**
 * @source the https://github.com/cdepage/zerodep/tree/main/${dir}
 */`;

export default [
  {
    input: `${dir}/src/index.ts`,
    output: [
      {
        file: `dist/${dir}/esm.js`,
        format: 'esm',
        banner,
      },
      {
        file: `dist/${dir}/cjs.js`,
        format: 'cjs',
        banner,
        interop: 'auto',
      },
      {
        file: `dist/${dir}/umd.js`,
        name: 'zd',
        format: 'iife',
        banner,
        interop: 'auto',
      },
    ],
    plugins: [
      ts({
        tsconfig: `${dir}/tsconfig.lib.json`,
      }),
    ],
  },
];
