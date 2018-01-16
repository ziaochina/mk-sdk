define('MK.appLoader', ['MK'], mk=>mk.appLoader)
define('MK.utils', ['MK'], mk=>mk.utils)
define('MK.component', ['MK'], mk=>mk.component)
define('MK.metaEngine', ['MK'], mk=>mk.metaEngine)
define('MK.metaEngine', ['MK'], mk=>mk.metaEngine)

define('lodash.merge', ['lodash'], lodash=>lodash.merge)
define('lodash.get', ['lodash'], lodash=>lodash.get)
define('lodash.curry', ['lodash'], lodash=>lodash.curry)
define('lodash.isequal', ['lodash'], lodash=>lodash.isequal)
define('lodash.flow', ['lodash'], lodash=>lodash.flow)
define('lodash.throttle', ['lodash'], lodash=>lodash.throttle)
define('lodash.debounce', ['lodash'], lodash=>lodash.debounce)
define('lodash.isarray', ['lodash'], lodash=>lodash.isarray)



require.config({
    paths: {
        'react': __require_base_url__ + 'react.production.min',
        'react-dom': __require_base_url__ + 'react-dom.production.min',
        'prop-types': __require_base_url__ + 'prop-types.min',
        'redux': __require_base_url__ + 'redux.min',
        'react-redux': __require_base_url__ + 'react-redux.min',
        "moment": __require_base_url__ + 'moment-with-locales.min',
        'lodash': __require_base_url__ + 'lodash.min',
        'immutable': __require_base_url__ + 'immutable.min',
        'echarts': __require_base_url__ + 'echarts.min',
        'MK': __require_base_url__ + 'mk-core.min',
        'MK.appLoader': __require_base_url__ + 'mk-app-loader',
        'MK.utils': __require_base_url__ + 'mk-utils',
        'MK.component': __require_base_url__ + 'mk-component',
        'MK.metaEngine': __require_base_url__ + 'mk-meta-engine',
        'mk-aar-grid': __require_base_url__ + 'mk-aar-grid.min',
        'mk-aar-form': __require_base_url__ + 'mk-aar-form.min',
    },
    shim: {
        MK: {
            deps: ['css!'+ __require_base_url__ +  'mk.css']
        }
    },
    map: {
        '*': {
            css: __require_base_url__ + 'css.min.js'
        }
    },
    waitSeconds : 0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
