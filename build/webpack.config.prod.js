const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'production',
	entry: {
		bue: path.resolve(__dirname, '../src/core/index.js'),
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bue.min.js',
		library: 'Bue',
		libraryTarget: 'umd',
	},
});