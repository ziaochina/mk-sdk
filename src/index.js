import React from 'react'
import { render } from 'react-dom'
import * as appLoader from 'mk-app-loader'
import utils from 'mk-utils'
import * as component from 'mk-component'
import metaEngine from 'mk-meta-engine'
import { Provider } from 'react-redux'
import 'mk-component/dist/assets/style/index.less'

//注册组件
Object.keys(component).forEach(key=>{
    metaEngine.componentFactory.registerComponent(key, component[key])
})

const defaultConfigOption = {
    toast : component.Toast, //轻提示使用组件，mk-meta-engine使用
    notification : component.Notification, //通知组件
    modal: component.Modal 
}

function getDependencies(){
    var dependencies = []
    if(!window['React']){
        dependencies.add('https://unpkg.com/react/umd/react.development.js')
    }

    if(!window['ReactDOM']){
        dependencies.add('https://unpkg.com/react/umd/react.development.js')
    }

    if(!window['moment']){
        dependencies.add('https://unpkg.com/moment/moment.js')
    }

    if(!window['_']){
        dependencies.add('https://unpkg.com/lodash/lodash.js')
    }

    if(!window['Redux']){
        dependencies.add('https://unpkg.com/redux/dist/redux.js')
    }

    if(!window['ReactRedux']){
        dependencies.add('https://unpkg.com/react-redux/dist/react-redux.js')
    }

    if(!window['Immutable']){
        dependencies.add('https://unpkg.com/immutable/dist/immutable.js')
    }

    if(!window['PropTypes']){
        dependencies.add('https://unpkg.com/prop-types/prop-types.js')
    }

    if(!window['echarts']){
        dependencies.add('https://unpkg.com/echarts/dist/echarts.min.js')
    }

    return dependencies
}
    

export default {
    appLoader,
    utils,
    component,
    metaEngine,
    //准备依赖
    ready:(cb)=>{
        const deps = getDependencies()
        if(deps.length> 0){
            seajs.use(deps, cb)
            return
        }
        cb()
    },
    //初始化MK环境
    init: (option) => {
        appLoader.init(option)
    },
    //配置元数据引擎
    config: (option)=>{
        metaEngine.config(defaultConfigOption && option)
    },
    //注册App
    registerApp: (app) => {
        appLoader.registerApp(app.name, app)
    },
    //render
    render: (appName, targetDomId) => {
        render(
            <Provider store={window.__mk_store__}>
                <appLoader.AppLoader name={appName} />
            </Provider>,
            document.getElementById(targetDomId)
        )
    } 
}

/*
app.config()

mk.init()

mk.registerApp(app)

mk.render()
*/