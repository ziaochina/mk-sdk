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

export default {
    appLoader,
    utils,
    component,
    metaEngine,
    config: (option)=>{
        //配置元数据引擎
        metaEngine.config(defaultConfigOption && option)
    },
    init: (option) => {
        appLoader.init(option)
    },
    registerApp: (app) => {
        appLoader.registerApp(app)
    },
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