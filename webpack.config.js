'use strict';

let path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    {VueLoaderPlugin} = require('vue-loader'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin');

// 获取命令参数，命令写在package.json中
let args = process.argv;
// 确定目录
let dist = path.resolve(__dirname, './', 'dist/');
let src = path.resolve(__dirname);

// webpack 配置
module.exports = {
    // 入口文件
    entry: {
        index: './index/main.js'
    },
    // 输出
    output: {
        // 输出目录
        path: dist,
        //publicPath: '', 文件引用前缀
        // 输出文件名，[name]与入口文件同名
        filename: '[name]-[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'], // require 文件时可省略后缀 .js .vue
        alias: {
            'vue': 'vue/dist/vue.js'  // 使用完整版的vue
        }
    },
    module: {
        // 加载器配置
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                // 目标文件
                test: /\.css$/,
                use: [
                    // 使用这个插件，使得所有less 能被打入一个文件，而不是一个个style
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader' // 先用css-loader处理css,再用style-loader将css写入<style>标签
                ]
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader', 'sass-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader', 'less-loader'
                ]
            }, {
                test: /\.(js)$/,
                // 排除目标
                exclude: /(node_modules)/,
                // 用babel-loader 编译 jsx，问号后面为参数。
                //es2015插件包含了babel-plugin-transform-es2015-modules-commonjs，会把ES6模块转成CommonJS模块
                loader: 'babel-loader?presets[]=es2015'
            }, {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
                // 小于 8k的图片，输出为base64 dataurl
                loader: 'url-loader?name=assets/images/[name].[hash:8].[ext]&limit=8192'
            }, {
                test: /\.(ttf|otf|woff|eot)$/,
                // 字体转 dataurl
                loader: 'url-loader?name=assets/fonts/[name].[hash:8].[ext]&limit=1024'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    // optimization: {
    //   // 模块拆分提取规则
    //   splitChunks: {
    //     /* 同时满足以下条件才拆分成单独文件 */
    //     chunks: 'all', // 引用类型，all 表示 initial引用 + async引用
    //     minSize: 30000, // 压缩前体积大于30000B
    //     minChunks: 1,  // 引用数量大于 1
    //     maxAsyncRequests: 5, // 异步引用数量小于5
    //     maxInitialRequests: 3, // 初始引用数量小于3
    //     /**********************************/
    //     name: true,
    //     // 缓存组
    //     cacheGroups: {
    //       vendors: {
    //         name: 'vendors',
    //         priority: 10, // 提取到本组的优先级
    //         /* 将符合以下条件的模块提取到组 */
    //         chunks: "all",
    //         test: /node_modules\\/,
    //         minSize: 30000,
    //         minChunks: 1
    //       }
    //     }
    //   }
    // },
    // 额外插件
    plugins: [
        // CSS提取 插件
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        // 入口html生成 插件
        new HtmlWebpackPlugin({
            // 模板
            template: './assets/index.html',
            favicon:'./assets/favicon.png',
            filename: 'index.html',  // 目标文件名
            title: '德必南京',
            chunks: ['index', 'vendors']
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'])  // 清空dist
    ],
    // 配置 webpack-dev-server
    devServer: {
        historyApiFallback: true, // 允许路由
        inline: true,
        port: 8090,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
            "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type"
        }
    }
};
