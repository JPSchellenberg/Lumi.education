var webpack = require('webpack');

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: './src/server/index.ts',
  output: {
    path: './dist',
    filename: "lumi.education-spa-server.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: null,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],

    preLoaders: []
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ]
};