import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
// import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';

const genRollupConfig = (output) => {
  const finalOutput = {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  };

  if (!['iife', 'umd'].includes(output.format)) {
    finalOutput['preserveModules'] = true;
    finalOutput['preserveModulesRoot'] = 'src';
  }

  return {
    input: ['./src/index.tsx'],
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      ...output,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: output && output.dir ? output.dir : 'dist',
        exclude: ['./src/**/*.stories.ts', './src/**/*.stories.tsx'],
      }),
      postcss(),
      terser(),
      clear({
        targets: ['dist'],
      }),
    ],
    external: ['react', 'react-dom'],
  };
};

export default [
  genRollupConfig({
    dir: 'dist/esm',
  }),
  genRollupConfig({
    format: 'cjs',
    dir: 'dist/commonjs',
  }),
  genRollupConfig({
    format: 'umd',
    dir: 'dist/umd',
    name: 'UIKit',
  }),
];
