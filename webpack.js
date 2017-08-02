var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: process.env.NODE_ENV === 'development' ? [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/index.ts',
    './src/client/stylesheets/main.scss',
    './src/client/stylesheets/new-age.less'
  ] : ['./src/client/index.ts', './src/client/stylesheets/main.scss', './src/client/stylesheets/new-age.less'],
  output: {
    path: __dirname + process.env.NODE_ENV === 'development' ? 'build/public' : 'dist/public',
    publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : '',
    filename: "lumi.education-spa-client.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: process.env.NODE_ENV === 'development' ? "source-map" : null,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "svg", "ttf", "eot", "woff2"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loader: "react-hot!ts-loader"
      },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      //{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ],

    preLoaders: process.env.NODE_ENV === 'development' ? [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
       {
        test: /\.js$/,
        loader: "source-map-loader"
      } 
    ] : []
  },
  devServer: {
    contentBase: 'dist/public',
    port: 8080,
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    proxy: {
      '/api/v0/*': {
        target: process.env.PROXY_SERVER ? process.env.PROXY_SERVER : 'http://localhost:3000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'lib', to: 'lib' },
      { from: 'img', to: 'img' }

    ]),
    new webpack.DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify( process.env.NODE_ENV ),
    'VERSION': JSON.stringify( process.env.VERSION )
  }
}),
  ]
};