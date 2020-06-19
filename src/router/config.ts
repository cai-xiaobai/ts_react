import { lazy, ComponentType } from 'react'

interface Meta {
    title: string
    rules: string[]
}

export interface RouteConfig {
    name: string
    path: string
    component: ComponentType
    meta: Meta
}

const routes: RouteConfig[] = [
    {
        name:'Home',
        path:'/app',
        component:lazy(() => import('../views/Home')),
        meta:{
            title:'首页',
            rules:['loginRequired']
        }
    }
];

export default routes;