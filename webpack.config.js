const webpack = require("webpack"),
    path = require("path"),
    env = process.env.NODE_ENV

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")



module.exports = {
    mode: env || 'development',
    optimization: {
        minimizer: env === 'production' ? [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ] : []
    },
    devtool: env === 'production' ? undefined : 'source-map',
    plugins: [
        new MiniCssExtractPlugin({ filename: env === 'production' ? "mk.min.css" : "mk.css" })
    ],
    entry: ["./src/index.js"],

    output: {
        filename: env === 'production' ? 'mk-core.min.js': 'mk-core.js',
        path: path.join(__dirname, `/dist${env === 'production' ? '/release': '/debug'}`),
        library: 'MK',
        libraryTarget: 'umd'
        
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
        "lodash.keys": 'lodash.keys',
        "lodash.merge": 'lodash.merge',
        "lodash.get": 'lodash.get',
        'lodash.curry': 'lodash.curry',
        "lodash.isequal": 'lodash.isequal',
        "lodash.flow": 'lodash.flow',
        "lodash.throttle": 'lodash.throttle',
        "lodash.debounce": 'lodash.debounce',
        "lodash.isarray": 'lodash.isarray',
        "lodash.memoize": 'lodash.memoize',
        "lodash/get": 'lodash.get',
        "lodash/set": 'lodash.set',
        "lodash/has": 'lodash.has',
        "lodash/isArray": 'lodash.isArray',
        "lodash/isSymbol": 'lodash.isSymbol',
        "lodash/eq": 'lodash.eq',
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
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 8192
                }
            }
        }]
    }
}

