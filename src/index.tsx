import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from './redux'
import ZHCH from 'antd/es/locale-provider/zh_CN'
import LoadingFull from './component/LoadingFull'
import './index.css';


const Page = React.lazy(() => import('./Page'))

ReactDOM.render(
    <Provider store={store}>
      <ConfigProvider locale={ZHCH}>
        <React.Suspense fallback={<LoadingFull></LoadingFull>}>
          <Page />
        </React.Suspense>
      </ConfigProvider>
    </Provider>,
  document.getElementById('root') as HTMLDivElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
