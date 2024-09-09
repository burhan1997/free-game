const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
		assetModuleFilename: 'assets/[name][hash][ext]',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['stylelint-custom-processor-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.svg/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	devtool: 'inline-cheap-source-map',
	context: __dirname,
	target: 'web',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3000,
		hot: true,
	},
}
