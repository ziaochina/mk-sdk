
require.config({
    paths: {
        'react': __require_base_url__ + 'react.development',
        'react-dom': __require_base_url__ + 'react-dom.development',
        'prop-types': __require_base_url__ + 'prop-types',
        'redux': __require_base_url__ + 'redux',
        'react-redux': __require_base_url__ + 'react-redux',
        "moment": __require_base_url__ + 'moment-with-locales',
        'lodash': __require_base_url__ + 'lodash',
        'immutable': __require_base_url__ + 'immutable',
        'echarts': __require_base_url__ + 'echarts',
        'MK': __require_base_url__ + 'mk-core',
        'MK.appLoader': __require_base_url__ + 'mk-app-loader',
        'MK.utils': __require_base_url__ + 'mk-utils',
        'MK.component': __require_base_url__ + 'mk-component',
        'MK.metaEngine': __require_base_url__ + 'mk-meta-engine',
        'mk-aar-grid': __require_base_url__ + 'mk-aar-grid',
        'mk-aar-form': __require_base_url__ + 'mk-aar-form',
    },
    shim: {
        MK: {
            deps: ['css!'+ __require_base_url__ +'mk.css']
        }
    },
    map: {
        '*': {
            css: __require_base_url__ + 'css.js'
        }
    },
    waitSeconds:0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
