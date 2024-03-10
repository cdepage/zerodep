import { dirname } from 'path';
import ts from 'rollup-plugin-ts';
import { fileURLToPath } from 'url';
import strip from '@rollup/plugin-strip';

const __filename = fileURLToPath(import.meta.url);

// get the relative path of the file
const dir = dirname(__filename).split('/').slice(-3).join('/');

export default [
  {
    input: `${dir}/src/index.ts`,
    output: [
      {
        file: `dist/${dir}/index.mjs`,
        format: 'esm',
      },
      {
        file: `dist/${dir}/index.cjs`,
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
