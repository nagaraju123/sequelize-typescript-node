const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPlugin = require("webpack-shell-plugin");
const webpack = require("webpack");
 
const NODE_ENV = process.env.NODE_ENV || "development";
 
module.exports = {
 entry: "./src/server.ts",
 mode: NODE_ENV,
 target: "node",
 watch: NODE_ENV === "development",
 output: {
 path: path.resolve(__dirname, "./build"),
 filename: "main.js"
 },
 resolve: {
 extensions: [".ts", ".js"]
 },
 // externals: [nodeExternals()],
 
 plugins: [
 new WebpackShellPlugin({
 onBuildEnd: ["npm run run:dev"]
 }),
 new webpack.IgnorePlugin(/pg-hstore/),
 new webpack.IgnorePlugin(/pg/),
 new webpack.ProvidePlugin({
 tedious: "tedious"
 })
 ],
 module: {
 rules: [
 {
 test: /\.ts$/,
 use: ["ts-loader"]
 }
 ]
 }
};