import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routeConfig, { RouteConfig } from './config';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { actionCreators, actionTypes } from '../redux/modules/settings'

interface RequireRules {
    //返回的是 重定向的路径 Redirect 无返回则为''
    loginRequired: () => string
}

//权限限制规则
const requireRules: RequireRules = {
    loginRequired: () => {
        const userInfo = JSON.parse(window.localStorage.getItem('USER_INFO') || '{}')
        return Object.keys(userInfo).length > 0 ? '' : '/login'
    }
}

interface IRouteProps {
    // setTagNavData: (P: any) => void
}

const Protected = function Protected(Comp: React.ComponentType, item: RouteConfig){
    return (props: any): React.ReactElement => {
        //TODO 处理一些额外的事件
        const { meta, path } = item
        document.title = meta.title || 'ts-react-admin'

        //路由拦截 进入页面前 检查
        if(meta.rules && meta.rules instanceof Array) {
            const middleware = meta.rules.map((item) => (requireRules as any)[item])
            for(let i = 0; i < middleware.length; i++) {
                const result = middleware[i](path)
                if(result) {
                    return <Redirect to={result} />
                }
            }
        }
        // const { setTagNavData } = props
        // setTagNavData({
        //     path,
        //     title:meta.title
        // })
        return <Comp />
    }
}

//封装路由
const RouterApp = (props: any) => {
    return (
        <Switch>
            {routeConfig.map((item: RouteConfig) => (
                <Route
                    key={item.path}
                    path={item.path}
                    exact
                    render={() => Protected(item.component,item)(props)}
                ></Route>
            ))}
            <Route render={() => <Redirect to="/404" />} />
        </Switch>

    )
}

export default RouterApp