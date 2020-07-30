/**
 * @author zy
 * @date 2020/4/6
 * @Description: 利用useEffect实现组件第一次挂载
 */
import {useEffect} from 'react'

/**
 * useMount函数
 * @author zy
 * @date 2020/4/6
 */
export default function useMount(func) {
    //由于第二个参数不变，因此只会执行一次func函数
    useEffect(() => {
        typeof func === 'function' && func();
        // eslint-disable-next-line
    }, [])
}