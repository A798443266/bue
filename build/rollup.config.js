import tsPlugin from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

const name = 'Bue';
const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
* Copyright (c) 2019 bowencool
* Released under the MIT License.
*/`;

export default [
	{
		input: 'src/core/index.ts',
		plugins: [tsPlugin()],
		output: [
			{
				format: 'umd',
				banner,
				name,
				file: 'dist/bue.js',
			},
			{
				format: 'cjs',
				banner,
				name,
				file: 'dist/bue.common.js',
			},
			{
				format: 'esm',
				banner,
				name,
				file: 'dist/bue.esm.js',
			},
		],
	},
	{
		input: 'src/core/index.ts',
		plugins: [
			tsPlugin(),
			uglify({
				output: {
					comments: /^!/,
				},
			}),
		],
		output: {
			format: 'umd',
			banner,
			name,
			file: 'dist/bue.min.js',
		},
	},
];
