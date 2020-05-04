const path = require("path")

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "dist"),
      path.join(__dirname, "data"),
      path.join(__dirname, "static"),
    ],
    compress: true,
    port: 9000,
  },
}
