/**
 * @author zy
 * @date 2020/4/5
 * @Description: web路由
 * 不懂的可以参考：https://segmentfault.com/a/1190000020812860
 * https://reacttraining.com/react-router/web/api/Route
 */
import Layout from '@/layout';
import menus from '@/views/menu_config';
import {getMenus} from '@/utils';
import {WEB_ROOT_PATH} from '@/config';

/**
 * web路由配置项
 * @author zy
 * @date 2020/4/5
 */

//web菜单配置
export const webMenuConfig = getMenus(menus, WEB_ROOT_PATH);

//web route配置
export const webRouteConfig = {
    title: 'home',
    path: WEB_ROOT_PATH,
    component: Layout,                      //根路径下配置web统一布局样式
    subMenus: webMenuConfig
}