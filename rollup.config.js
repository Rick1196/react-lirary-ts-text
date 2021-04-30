import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import typescript from "rollup-plugin-typescript2";

const config = {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};

export default config;
