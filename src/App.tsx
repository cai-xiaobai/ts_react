import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  RouteComponentProps
} from 'react-router-dom';
import routes from './router/config';
import RouterApp from './router'
import './App.css';
import { Layout, Drawer } from 'antd';
import Menus from './component/Layout/Menus';
// import './App.less'
import 'antd/dist/antd.css';

/**
 * 当屏幕宽度小于 765 抽屉组件显示
 */
const ScreenStatus = 765

/**
 * Drawer组件显示的位置
 */
type Placement = 'left'

interface IState {
  collapsed: boolean
  placement: Placement
  drawerVisible: boolean
}

interface IProps extends RouteComponentProps{
  screenOffsetWidth: number
  breadcrumbList: any
  tagsNavData: any
  userInfo: any
  setScreenWidth: (P: number) => void
  deleteOneTag: (P: any) => void
  deleteAllTag: (P: any) => void
  deleteOtherTag: (P: any) => void
}

class App extends React.PureComponent<IProps, IState> {
  state: IState = {
    collapsed: false,
    drawerVisible:false,
    placement:'left'
  }

  //切换菜单
  handleMenuClick = () => {
    const { screenOffsetWidth } = this.props
    const { collapsed, drawerVisible } =  this.state

    //抽屉组件显示
    if(screenOffsetWidth < ScreenStatus) {
      this.setState({
        collapsed: false,
        drawerVisible: !drawerVisible
      })
    } else {
      this.setState({
        collapsed: !collapsed,
        drawerVisible: false
      })
    }
  }

  //点击抽屉遮罩关闭
  handleDrawerClose = () => {
    this.setState({
      drawerVisible: false
    })
  }

  render() {
    const { placement, drawerVisible, collapsed } = this.state
    const { 
      screenOffsetWidth, 
      tagsNavData,
      // history
    } = this.props

    const Sider = (
      <Layout.Sider>
        <Menus></Menus>
      </Layout.Sider>
    )

    const DrawerView = (
      <Drawer
        className="zh-app__drawer"
        placement={placement}
        closable={false}
        visible={drawerVisible}
        width={200}
        onClose={() => {
          this.handleDrawerClose()
        }}
      >
        {Sider}
      </Drawer>
    )

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {screenOffsetWidth < ScreenStatus ? DrawerView : Sider}
        <Layout>
        {/* Header */}
        <Layout.Content
            style={{ margin: '8px 16px 0', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ background: '#fff', borderRadius: '2px', padding: '5px', flexGrow: 1 }}>
                <RouterApp></RouterApp>
            </div>
            <Layout.Footer style={{ textAlign: 'center' }}>
              react-admin ©2020 Created by ccc
            </Layout.Footer>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}
export default App;
