
require.config({
    baseUrl: __require_base_url__ || '',
    paths: {
        'react': 'react.production.min',
        'react-dom': 'react-dom.production.min',
        'prop-types': 'prop-types.min',
        'redux': 'redux.min',
        'react-redux': 'react-redux.min',
        "moment": 'moment-with-locales.min',
        'lodash': 'lodash.min',
        'immutable': 'immutable.min',
        'echarts': 'echarts.min',
        'MK': 'mk-core.min',
        'MK.appLoader': 'mk-app-loader',
        'MK.utils': 'mk-utils',
        'MK.component': 'mk-component',
        'MK.metaEngine': 'mk-meta-engine',
        'mk-aar-grid': 'mk-aar-grid.min',
        'mk-aar-form': 'mk-aar-form.min',
    },
    shim: {
        MK: {
            deps: ['css!mk.css']
        }
    },
    map: {
        '*': {
            css: 'css.min.js'
        }
    },
    waitSeconds : 0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
