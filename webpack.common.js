const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/main.js',
        vendor: './src/vendor.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
          filename: 'index.html',
            template:'./src/index.html',
        }),
        new HtmlWebpackPlugin({
          filename: 'about.html',
          template:'./src/about.html',
      }),
      new HtmlWebpackPlugin({
        filename: 'services.html',
        template:'./src/services.html',
    }),
      new HtmlWebpackPlugin({
        filename: 'service-one.html',
        template:'./src/service-one.html',
    }),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new webpack.ProvidePlugin({
          '$': "jquery",
          'jQuery': "jquery",
          'window.jQuery': 'jquery',
          'Popper': 'popper.js',
          "Bootstrap": "bootstrap.js"
      })
    ],
    module: {
        rules: [
            {
                test: /\.html/,
                use:['html-loader']
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'imgs',
                        esModule: false
                    }
                }
            }
        ]
    }
}
