
require.config({
    paths: {
        react: 'https://unpkg.com/react/umd/react.development',
        'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.development',
        'prop-types': 'https://unpkg.com/prop-types/prop-types',
        redux: 'https://unpkg.com/redux/dist/redux',
        'react-redux': 'https://unpkg.com/react-redux/dist/react-redux',
        moment: 'https://unpkg.com/moment/moment',
        lodash: 'https://unpkg.com/lodash/lodash',
        immutable: 'https://unpkg.com/immutable/dist/immutable',
        echarts: 'https://unpkg.com/echarts/dist/echarts',
        //MK: 'https://unpkg.com/mk-sdk/dist/mk-core',
        //'MK.appLoader': 'https://unpkg.com/mk-sdk/dist/mk-app-loader',
        //'MK.utils': 'https://unpkg.com/mk-sdk/dist/mk-utils',
        //'MK.component': 'https://unpkg.com/mk-sdk/dist/mk-component',
        //'MK.metaEngine': 'https://unpkg.com/mk-sdk/dist/mk-meta-engine',
        MK: 'mk-core',
        'MK.appLoader': 'mk-app-loader',
        'MK.utils': 'mk-utils',
        'MK.component': 'mk-component',
        'MK.metaEngine': 'mk-meta-engine',
    },
    shim: {
        MK: {
            //deps: ['css!https://unpkg.com/mk-sdk/dist/mk.css']
            deps: ['css!mk.css']
        }
    },
    map: {
        '*': {
            css: 'https://unpkg.com/require-css/css.js'
        }
    }
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
