import path from 'path'
import webpack from 'webpack'
import csswring from 'csswring'
import mqpacker from 'css-mqpacker'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import PostCssAssetsPlugin from 'postcss-assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

var ENV = process.env.NODE_ENV || 'development'
var isProd = ENV === 'production'

module.exports = {
  context: path.join(__dirname, 'app'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    publicPath: isProd ? '/' : 'http://localhost:8080/'
  },

  module: {
    rules: [
      { enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'standard-loader',
        options: {
          parser: 'babel-eslint'
        }
      },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1!postcss-loader'
        })
      },
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1!postcss-loader!sass-loader'
        })
      },
      { test: /\.html$/, use: 'raw-loader' },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  plugins: ([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }, count) => resource && resource.indexOf(path.join(__dirname, 'src')) === -1
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: isProd,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash:5].css',
      allChunks: true,
      disable: !isProd
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      removeRedundantAttributes: isProd,
      inject: 'body',
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd
      }
    })
  ])
  .concat(isProd ? [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new PostCssAssetsPlugin({
      test: /\.css$/,
      log: true,
      plugins: [
        mqpacker,
        csswring({
          preserveHacks: true,
          removeAllComments: true
        })
      ]
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'public')
    }])
  ] : []),

  stats: { colors: true },

  devtool: ENV === 'production' && 'eval',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    open: true
  }
}
