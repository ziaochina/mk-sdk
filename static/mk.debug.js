
require.config({
    baseUrl: __require_base_url__ || '',
    paths: {
        'react': 'react.development',
        'react-dom': 'react-dom.development',
        'prop-types': 'prop-types',
        'redux': 'redux',
        'react-redux': 'react-redux',
        "moment": 'moment-with-locales',
        'lodash': 'lodash',
        'immutable': 'immutable',
        'echarts': 'echarts',
        'MK': 'mk-core',
        'MK.appLoader': 'mk-app-loader',
        'MK.utils': 'mk-utils',
        'MK.component': 'mk-component',
        'MK.metaEngine': 'mk-meta-engine',
        'mk-aar-grid': 'mk-aar-grid',
        'mk-aar-form': 'mk-aar-form',
    },
    shim: {
        MK: {
            deps: ['css!mk.css']
        }
    },
    map: {
        '*': {
            css: 'css.js'
        }
    },
    waitSeconds:0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
