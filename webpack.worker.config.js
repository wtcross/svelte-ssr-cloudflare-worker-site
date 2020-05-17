const mode = process.env.NODE_ENV || "development";

module.exports = {
  target: "webworker",
  entry: "./src/worker/index.js",
  mode,
  output: {
    path: __dirname + "/build",
    filename: "worker.js",
  },
  resolve: {
    extensions: [".mjs", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: false,
        },
      },
    ],
  },
  devtool: false,
};
