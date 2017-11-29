
require.config({
    baseUrl: 'lib',
    paths: {
        react: 'https://unpkg.com/react/umd/react.development',
        'react-dom': 'https://unpkg.com/react-dom/umd/react-dom.development',
        'prop-types': 'https://unpkg.com/prop-types/prop-types',
        redux: 'https://unpkg.com/redux/dist/redux',
        'react-redux': 'https://unpkg.com/react-redux/dist/react-redux',
        moment: 'https://unpkg.com/moment/moment',
        lodash: 'https://unpkg.com/lodash/lodash',
        immutable: 'https://unpkg.com/immutable/dist/immutable',
        echarts: 'https://unpkg.com/echarts/dist/echarts.min',
        MK: 'mk/mk',
        'MK.appLoader': 'mk/mk-app-loader',
        'MK.utils': 'mk/mk-utils',
        'MK.component': 'mk/mk-component',
        'MK.metaEngine': 'mk/mk-meta-engine',
    },
    shim: {
        MK: {
            deps: ['css!mk/mk.css']
        }
    },
    map: {
        '*': {
            css: 'https://unpkg.com/require-css/css.min.js'
        }
    }
})