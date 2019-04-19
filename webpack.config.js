const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, './src');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  context: sourcePath,
  mode: 'production',
  entry: {
    app: ['./app/App.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app/[name].[chunkhash].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              camelcase: true,
              modules: true,
              namedExport: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: path.resolve(
        __dirname,
        'src',
        'assets',
        'logo',
        'logo_teamwork.png',
      ),
      // The prefix for all image files (might be a folder or a name)
      prefix: 'favicon-[hash]/',
      // Emit all stats of the generated icons
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'TeamWork',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
};
