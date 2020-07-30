/**
 * @author zy
 * @date 2020/4/5
 * @Description: 事件监听器
 * useContext Hook 是如何工作的：https://segmentfault.com/a/1190000020111320?utm_source=tag-newest
 * useEffect Hook 是如何工作的：https://segmentfault.com/a/1190000020104281
 * 微型库解读之200byte的EventEmitter - Mitt：https://segmentfault.com/a/1190000012997458?utm_source=tag-newest
 * 使用event bus进行非父子组件间的通信:https://blog.csdn.net/wengqt/article/details/80114590

 我们可以通过对event的订阅和发布来进行通信，这里举一个栗子：A和B是两个互不相关的组件，A组件的功能是登录，B组件的功能是登录之后显示用户名，这里就需要A组件将用户名传递给B组件。那么我们应该怎么做呢？
 1、在A组件中注册/发布一个type为login的事件；
 2、在B组件中注册一个监听/订阅，监听login事件的触发；
 3、然后当登录的时候login事件触发，然后B组件就可以触发这个事件的回调函数。
 */
import React, {useEffect} from 'react';
import mitt from 'mitt';

//创建上下文
const context = React.createContext();

//外层提供数据的组件
const Provider = context.Provider;

//useContext 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
export function useBus() {
    return React.useContext(context);
}

/**
 * 事件监听器函数
 * @author zy
 * @date 2020/4/5
 * @param name：监听的事件名称
 * @param fn：事件触发时的回调函数
 */
export function busListener(name, fn) {
    //获取 context 的当前值
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const bus = useBus();

    //组件第一次挂载执行，第二个参数发生变化时执行
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        //事件订阅
        bus.on(name, fn);
        //组件卸载之前执行
        return () => {
            //取消事件订阅
            bus.off(name, fn);
        }
    }, [bus, name, fn])
}

//外层提供数据的组件 向后代组件跨层级传值bus，这样后代组件都可以通过useBus获取到bus的值
export function BusProvider({children}) {
    const [bus] = React.useState(() => mitt());
    return <Provider value={bus}>{children}</Provider>
}