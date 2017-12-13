var request = require('request');
const fs = require('fs');
const url = require('url');
const path = require('path');

var jss = [
    'https://unpkg.com/react/umd/react.production.min.js',
    'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
    'https://unpkg.com/prop-types/prop-types.min.js',
    'https://unpkg.com/redux/dist/redux.min.js',
    'https://unpkg.com/react-redux/dist/react-redux.min.js',
    'https://unpkg.com/moment/min/moment.min.js',
    'https://unpkg.com/lodash/lodash.min.js',
    'https://unpkg.com/immutable/dist/immutable.min.js',
    'https://unpkg.com/echarts/dist/echarts.min.js',
    'https://unpkg.com/echarts/dist/echarts.min.js',
    'https://unpkg.com/mk-aar-grid/dist/mk-aar-grid.min.js',

    'https://unpkg.com/react/umd/react.development.js',
    'https://unpkg.com/react-dom/umd/react-dom.development.js',
    'https://unpkg.com/prop-types/prop-types.js',
    'https://unpkg.com/redux/dist/redux.js',
    'https://unpkg.com/react-redux/dist/react-redux.js',
    'https://unpkg.com/moment/moment.js',
    'https://unpkg.com/lodash/lodash.js',
    'https://unpkg.com/immutable/dist/immutable.js',
    'https://unpkg.com/echarts/dist/echarts.js',
    'https://unpkg.com/mk-aar-grid/dist/mk-aar-grid.js',

    'https://unpkg.com/requirejs/require.js',
    'https://unpkg.com/require-css/css.js',
    'https://unpkg.com/require-css/css.min.js',
]

jss.forEach(js => {
    request(js, function (err, res, body) {
        var o = path.parse(js)
        fs.createWriteStream('dist/' + o.base).write(body)
    })
})
