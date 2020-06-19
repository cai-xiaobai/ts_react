import React, { Dispatch } from 'react';
import './index.less'
import { RootState } from '../../redux/Types';
import { actionTypes, actionCreators } from '../../redux/modules/home';
import { connect } from 'react-redux';

interface HomeProps {
    readonly homeData: any
    readonly testData: string
    readonly setHomeData: (payload: any) => void
}

//​ Omit<T, K>​ 帮助类型。​Omit<T, K>​ 类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型
type FromStateProps = Omit<HomeProps, 'setHomeData'> //相当于剔除掉setHomeData

const mapStateToProps = (state: RootState): FromStateProps => {
    return {
        homeData: state.home.homeData,
        testData: '哈哈'
    }
}

// mapStateToProps 的 key 的联合类型
type MapStateToPropsKeys = keyof FromStateProps
type FormDispatchProps = Omit<HomeProps, MapStateToPropsKeys>

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.HomeAction>): FormDispatchProps => {
    return {
        setHomeData: (payload) => {
            dispatch(actionCreators.setHomeData(payload))
        }
    }
}

/**
 * home 页面
 */
const HomePage = (props: HomeProps) => {
    //获取主页数据
    const getHomeData = () => {

    }

    return (
        <div className="home">
            我是主页
        </div>
    )
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)