/**
 * @author zy
 * @date 2020/4/4
 * @Description: redux状态管理器配置
 * 不懂原理的可以参考：https://github.com/brickspert/blog/issues/22#middleware
 */
import thunk from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';
import rootReducers from './root_reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const storeEnhancers = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(thunk)) :
    compose()(composeWithDevTools(applyMiddleware(thunk)));

/**
 * 创建store
 * @author zy
 * @date 2020/4/5
 */
const configureStore = () => {
    //创建store对象
    const store = createStore(rootReducers, storeEnhancers);

    //reducer热加载
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./root_reducers', () => {
                store.replaceReducer(rootReducers)
            })
        }
    }

    return store;
}

export default configureStore();