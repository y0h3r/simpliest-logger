import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './index.ts',
  output: [
    {
      file: 'dist/simpliest-logger.esm.js',
      format: 'es',
      name: 'SimpliestLogger',
      sourcemap: true,
    },
    {
      file: 'dist/simpliest-logger.cjs.js',
      format: 'cjs',
      name: 'SimpliestLogger',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
