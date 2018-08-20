const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './public/index.html',
	filename: './index.html',
});
const extractTextPlugin = new ExtractTextPlugin({
	filename: 'styles.css',
	allChunks: true,
	disable: process.env.NODE_ENV !== 'production',
});
// eslint-disable-line global-require
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				resolve: { extensions: ['.js', '.jsx'] },
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [require('precss'), require('autoprefixer')];
							},
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [htmlWebpackPlugin, extractTextPlugin],
};
