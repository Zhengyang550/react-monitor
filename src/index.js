/**
 * @author zy
 * @date 2020/4/5
 * @Description: 入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import {BusProvider} from '@/hooks/use_bus';
import {Provider} from 'react-redux';
import store from '@/redux';

ReactDOM.render(
    <AppContainer>
        <BusProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </BusProvider>
    </AppContainer>,
    document.getElementById('root')
)