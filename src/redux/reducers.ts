// Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
//该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。

import { combineReducers } from 'redux'
import { RootReducer } from './Types.d'

import { homeReducer } from './modules/home'

const rootReducer: RootReducer = combineReducers({
    home: homeReducer
})

export default rootReducer