const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          { loader: 'file-loader' },
          {
            loader: 'image-webpack-loader',
            options: {
              // Compresses JPEG images
              mozjpeg: {
                progressive: true,
              },
              // Compresses PNG images
              optipng: {
                enabled: false,
              },
              // Compresses PNG images
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // Compresses GIF images
              gifsicle: {
                interlaced: false,
              },
              // Compresses JPG and PNG into WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
  ],
};