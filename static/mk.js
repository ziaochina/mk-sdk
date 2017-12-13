
require.config({
    paths: {
        'react': 'https://unpkg.com/react/umd/react.production.min',
        'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.production.min',
        'prop-types': 'https://unpkg.com/prop-types/prop-types.min',
        'redux': 'https://unpkg.com/redux/dist/redux.min',
        'react-redux': 'https://unpkg.com/react-redux/dist/react-redux.min',
        "moment": 'https://unpkg.com/moment/min/moment-with-locales.min',
        'lodash': 'https://unpkg.com/lodash/lodash.min',
        'immutable': 'https://unpkg.com/immutable/dist/immutable.min',
        'echarts': 'https://unpkg.com/echarts/dist/echarts.min',
        //MK: 'https://unpkg.com/mk-sdk/dist/mk-core.min',
        //'MK.appLoader': 'https://unpkg.com/mk-sdk/dist/mk-app-loader',
        //'MK.utils': 'https://unpkg.com/mk-sdk/dist/mk-utils',
        //'MK.component': 'https://unpkg.com/mk-sdk/dist/mk-component',
        //'MK.metaEngine': 'https://unpkg.com/mk-sdk/dist/mk-meta-engine',
        'MK': 'mk-core.min',
        'MK.appLoader': 'mk-app-loader',
        'MK.utils': 'mk-utils',
        'MK.component': 'mk-component',
        'MK.metaEngine': 'mk-meta-engine',
        'mk-aar-grid': 'https://unpkg.com/mk-aar-grid/dist/mk-aar-grid.min',
        'mk-aar-form': 'https://unpkg.com/mk-aar-form/dist/mk-aar-form.min',
    },
    shim: {
        MK: {
            //deps: ['css!https://unpkg.com/mk-sdk/dist/mk.css']
            deps: ['css!mk.css']
        }
    },
    map: {
        '*': {
            css: 'https://unpkg.com/require-css/css.min.js'
        }
    }
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
