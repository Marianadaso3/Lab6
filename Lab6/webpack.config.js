const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    home: "./index.js",
    index: "./src/index.js",
    pag2: "./src/pag2.js",
    pag3: "./src/pag3.js",
    pag4: "./src/pag4.js",
    pag5: "./src/pag5.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "bundle_con_babel"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({ filename: "main.bundle.css" }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pag2.html",
      filename: "pag2.html",
      chunks: ["pag2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pag3.html",
      filename: "pag3.html",
      chunks: ["pag3"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pag4.html",
      filename: "pag4.html",
      chunks: ["pag4"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pag5.html",
      filename: "pag5.html",
      chunks: ["pag5"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|ogg|wav|mp3|jfif)$/i,
        use: "file-loader",
      },
      {
       test: /\.m?js$/,
        exclude: /(node_modules)/,
        use:  {
          loader: 'babel-loader',
          options:  {
            presets: ['@babel/preset-env'],
            //Agregar plugins adicionales 
            plugins: ["@babel/plugin-transform-runtime"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
            
          }
        }  
      },
    ],
  },
};
