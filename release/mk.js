
require.config({
    paths: {
        react: '/mk/react.production.min',
        'react-dom': '/mk/react-dom.production.min',
        'prop-types': '/mk/prop-types.min',
        redux: '/mk/redux.min',
        'react-redux': '/mk/react-redux.min',
        moment: '/mk/moment.min',
        lodash: '/mk/lodash.min',
        immutable: '/mk/immutable.min',
        echarts: '/mk/echarts.min',
        MK: '/mk/mk-core.min',
        'MK.appLoader': '/mk/dist/mk-app-loader',
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
            css: '/mk/css.min.js'
        }
    }
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
