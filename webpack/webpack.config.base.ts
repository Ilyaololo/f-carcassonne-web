/* tslint:disable:object-literal-sort-keys */

import * as path from 'path';

import * as webpack from 'webpack';
import { Config } from 'webpack-config';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

const configuration = new Config()
  .merge({
    // target: 'web',

    stats: {
      // Add asset Information
      assets: true,

      // Sort assets by a field
      assetsSort: 'field',

      // Add information about cached (not built) modules
      cached: false,

      // Show cached assets (setting this to `false` only shows emitted files)
      cachedAssets: false,

      // Add children information
      children: false,

      // Add chunk information (setting this to `false` allows for a less verbose output)
      chunks: false,

      // Add built modules information to chunk information
      chunkModules: false,

      // Add the origins of chunks and chunk merging info
      chunkOrigins: false,

      // Sort the chunks by a field
      chunksSort: 'field',

      // `webpack --colors` equivalent
      colors: true,

      // Display the entry points with the corresponding bundles
      entrypoints: false,

      // Add details to errors (like resolving log)
      errorDetails: true,

      // Exclude modules which match one of the given strings or regular expressions
      exclude: [],

      // Add the hash of the compilation
      hash: true,

      // Set the maximum number of modules to be shown
      maxModules: 15,

      // Add built modules information
      modules: false,

      // Sort the modules by a field
      modulesSort: 'field',

      // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
      moduleTrace: false,

      // Show the exports of the modules
      providedExports: false,

      // Add public path information
      publicPath: false,

      // Add information about the reasons why modules are included
      reasons: false,

      // Add timing information
      timings: true,

      // Show which exports of a module are used
      usedExports: false,

      // Add webpack version information
      version: false,
    },

    entry: {
      main: [
        path.resolve('src', 'main.ts'),
      ],
    },

    resolve: {
      extensions: ['.js', '.ts', '.json'],

      modules: [
        'node_modules',
        path.resolve('src'),
      ],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                cacheDirectory: 'node_modules/.cache/awesome-typescript-loader',
                silent: true,
                useCache: true,
                useTranspileModule: true,
              },
            },
          ],
        },
      ],
    },

    output: {
      filename: '[name].js',
      path: path.resolve('public/js/'),
    },

    plugins: [
      new Dotenv(),

      new webpack.EnvironmentPlugin([
      ]),

      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),

      new HardSourceWebpackPlugin(),
    ],
  });

export default configuration;
