const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, './src');
const port = 3000;
module.exports = {
  context: sourcePath,
  mode: 'development',
  entry: {
    app: ['./app/App.tsx',],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app/[name].bundle.js'
  },
  devtool: 'source-map',

  devServer: {
    contentBase: sourcePath,
    hot: true,
    port: port,
    historyApiFallback: true,
    open: true
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [

          {
            loader: "style-loader"
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              camelcase: true,
              modules: true,
              namedExport: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader",
          }]
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/
    ]),
  ]
}
