const path = require('path');
const webpack = require('webpack');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app
  },
  devServer: {
    host,
    port,
    contentBase: `./${outputPath}`,
    disableHostCheck: true,
    publicPath: baseHref,
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    stats: {
      colors: true
    }
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.sass$/,
        loader: 'style-loader'
      },
      {
        test: /\.sass$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          url: false
        }
      },
      {
        test: /\.sass$/,
        loader: 'sass-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, outputPath)
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};
