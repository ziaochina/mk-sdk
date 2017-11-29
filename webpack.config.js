var webpack = require("webpack");
var path = require("path");
var env = process.env.NODE_ENV
var compress = process.env.COMPRESS

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin')

var plugins = []

plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env)
}))

if (env === 'production' && compress) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: {
                "ascii_only": true
            },
            compressor: {
                warnings: false
            }
        })
    )
}

const extractCSS = new ExtractTextPlugin("mk.css");
plugins.push(extractCSS)


plugins.push(new CopyWebpackPlugin([{
    context: './static',
    from: '**/*',
    to: ''
}]))

module.exports = {
    entry: ["./src/index.js"],

    output: {
        path: path.join(__dirname, "/dist"),
        library: "MK",
        libraryTarget: "umd"
    },

    resolve: {
        extensions: [".js"]
    },

    externals: {
        "react": {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        "react-dom": {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        "moment": "moment",
        "lodash":  {
            root: '_',
            commonjs2: 'lodash',
            commonjs: 'lodash',
            amd: 'lodash'
        },
        "redux": {
            root: 'Redux',
            commonjs2: 'redux',
            commonjs: 'redux',
            amd: 'redux'
        },
        "react-redux":  {
            root: 'ReactRedux',
            commonjs2: 'react-redux',
            commonjs: 'react-redux',
            amd: 'react-redux'
        },
        "immutable": {
            root: 'Immutable',
            commonjs2: 'immutable',
            commonjs: 'immutable',
            amd: 'immutable'
        },
        "prop-types":  {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types'
        },
        "echarts": 'echarts'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: extractCSS.extract({
                fallback: "style-loader",
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            use: extractCSS.extract({
                fallback: "style-loader",
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    limit: 8192
                }
            }
        }]
    },

    plugins: plugins
}

if (env === 'development') {
    module.exports.devtool = 'source-map'
}
