const path = require("path");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  target: "node",
  entry: "./src/worker/ssr.js",
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/src/worker",
    filename: "_ssr.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: false,
            generate: "ssr",
          },
        },
      },
    ],
  },
  mode,
  plugins: [],
  devtool: false,
};
