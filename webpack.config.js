module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-path-concat
    path: __dirname + 'build',
    publicPath: '/',
    filename: 'bundle.js;',
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
};
