import { createStore, compose, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers'
import reactThunk from 'redux-thunk'
import { RootState, RootAction } from './Types.d'

//创建 store 引入 redux devtools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store: Store<RootState, RootAction> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reactThunk))
)

export default store