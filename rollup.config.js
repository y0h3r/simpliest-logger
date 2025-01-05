import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './index.ts',
  output: {
    file: 'dist/simpliest-logger.js',
    format: 'cjs',
    name: 'SimpliestLogger',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
