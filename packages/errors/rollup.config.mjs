import { dirname } from 'path';
import ts from 'rollup-plugin-ts';
import { fileURLToPath } from 'url';
import strip from '@rollup/plugin-strip';

const __filename = fileURLToPath(import.meta.url);

// get the relative path of the file
const dir = dirname(__filename).split('/').slice(-2).join('/');

export default [
  {
    input: `${dir}/src/index.ts`,
    output: [
      {
        file: `dist/${dir}/esm.js`,
        format: 'esm',
      },
      {
        file: `dist/${dir}/cjs.js`,
        format: 'cjs',
        interop: 'auto',
      },
    ],
    plugins: [
      ts({
        tsconfig: `${dir}/tsconfig.lib.json`,
      }),
      strip({
        include: '**/*(ts|mjs|js)',
        sourceMap: false,
      }),
    ],
  },
];
