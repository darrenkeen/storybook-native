import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pluginjson from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

const config = {
  input: 'components/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    pluginjson(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};

export default config;
