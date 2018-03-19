var webpack = require("webpack"),
    path = require("path"),
    env = process.env.NODE_ENV,
    compress = process.env.COMPRESS,
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    plugins = []

plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env)
}))

plugins.push(new webpack.optimize.ModuleConcatenationPlugin())

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


//plugins.push(new CopyWebpackPlugin([{
//    context: './static',
//    from: '**/*',
//    to: ''
//}]))



module.exports = {
    entry: ["./src/index.js"],

    output: {
        filename: env === 'production' ? 'mk-core.min.js': 'mk-core.js',
        path: path.join(__dirname, `/dist${env === 'production' ? '': '/debug'}`),
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
            use: extractCSS.extract({
                fallback: "style-loader",
                use: [{ loader: "css-loader", options: { minimize: true } } ]
            })
        }, {
            test: /\.less$/,
            use: extractCSS.extract({
                fallback: "style-loader",
                use: [{ loader: "css-loader", options: { minimize: true } }, 'less-loader']
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
                    name: '[name].[ext]',
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
