
require.config({
    paths: {
        react: 'https://unpkg.com/react/umd/react.production.min',
        'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.production.min',
        'prop-types': 'https://unpkg.com/prop-types/prop-types.min',
        redux: 'https://unpkg.com/redux/dist/redux.min',
        'react-redux': 'https://unpkg.com/react-redux/dist/react-redux.min',
        moment: 'https://unpkg.com/moment/min/moment.min',
        lodash: 'https://unpkg.com/lodash/lodash.min',
        immutable: 'https://unpkg.com/immutable/dist/immutable.min',
        echarts: 'https://unpkg.com/echarts/dist/echarts.min',
        MK: 'https://unpkg.com/mk-sdk/dist/mk-core.min',
        'MK.appLoader': 'https://unpkg.com/mk-sdk/dist/mk-app-loader',
        'MK.utils': 'https://unpkg.com/mk-sdk/dist/mk-utils',
        'MK.component': 'https://unpkg.com/mk-sdk/dist/mk-component',
        'MK.metaEngine': 'https://unpkg.com/mk-sdk/dist/mk-meta-engine',
    },
    shim: {
        MK: {
            deps: ['css!https://unpkg.com/mk-sdk/dist/mk.css']
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
