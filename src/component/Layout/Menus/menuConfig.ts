export interface MenusConfig {
    icon: string
    title: string
    path?: string
    SubMenu?: Array<MenusConfig> 
}

const menus: Array<MenusConfig> = [
    {
        icon: 'pie-chart-outlined',
        title: '首页',
        path: '/app'
    },
    {
        icon: 'table',
        title: '会员',
        path: '/member'
    },
    {
        icon: 'pie-chart',
        title: '销售',
        path: '/shop'
    }
]

export default menus;