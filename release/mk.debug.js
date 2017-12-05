
require.config({
    paths: {
        react: '/mk/react.development',
        'react-dom': '/mk/react-dom.development',
        'prop-types': '/mk/prop-types',
        redux: '/mk/redux',
        'react-redux': '/mk/react-redux',
        moment: '/mk/moment',
        lodash: '/mk/lodash',
        immutable: '/mk/immutable',
        echarts: '/mk/echarts',
        MK: '/mk/mk-core',
        'MK.appLoader': '/mk/mk-app-loader',
        'MK.utils': '/mk/mk-utils',
        'MK.component': '/mk/mk-component',
        'MK.metaEngine': '/mk/mk-meta-engine',
    },
    shim: {
        MK: {
            deps: ['css!/mk/mk.css']
        }
    },
    map: {
        '*': {
            css: '/mk/css.js'
        }
    }
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
