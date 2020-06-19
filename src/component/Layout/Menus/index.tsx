import * as React from 'react'
import { Menu } from 'antd'
import Icon from '@ant-design/icons' //antd v4以后Icon组件从这引入
import { withRouter, RouteComponentProps, } from 'react-router-dom'
import menuConfig, { MenusConfig } from './menuConfig'

interface MenusProps extends RouteComponentProps {}

const injectMenu = (menus: Array<MenusConfig>) => {
    return menus.map((itemMenu) => {
        if(itemMenu.SubMenu && itemMenu.SubMenu.length > 0) {
            return (
                <Menu.SubMenu
                    key={itemMenu.title}
                    title={
                        <span>
                            <Icon type={itemMenu.icon} />
                            <span>{itemMenu.title}</span>
                        </span>
                    }
                >
                    {injectMenu(itemMenu.SubMenu)}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={itemMenu.path}>
                    <Icon type={itemMenu.icon} />
                    <span>{itemMenu.title}</span>
                </Menu.Item>
            )
        }
    })
}

//根菜单
const Menus = (props:MenusProps) => {
    const handleMenu = (params: any) => {
        if(params.key !== props.history.location.pathname) {
            props.history.push(params.key)
        }
    }

    return (
        <Menu 
            theme="dark"
            defaultSelectedKeys={[props.history.location.pathname]}
            onClick={handleMenu}
            mode='inline'
        >
            {injectMenu(menuConfig)}
        </Menu>
    )
}

export default withRouter(Menus)