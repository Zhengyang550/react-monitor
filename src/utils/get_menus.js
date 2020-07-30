import _ from 'lodash';
import pageNotFoundMenu from '@/components/404/menu_config';

/**
 * 解析menu_config 将配置路径由相对路径转为绝对路径
 * @author zy
 * @date 2020/4/8
 * @param menus：menu_config配置
 * @return contextPath：设置根路径
 */
const getMenus = (menus, contextPath) => {
    const menusCopy = _.cloneDeep(menus);

    const decodeMenus = (menusCopy, menuContextPath) => {
        _.forEach(menusCopy, item => {
            //获取当前菜单路径
            let path = item.path ? `${menuContextPath}/${item.path}` : menuContextPath;
            item.path = path.replace(/\/+/g, '/');
            if (item.subMenus) {
                decodeMenus(item.subMenus, path);
            }
        })

        //给每个同阶菜单追加一个404   如/* /archives/* /archives/layout/*
        if (menusCopy) {
            const menu = _.cloneDeep(pageNotFoundMenu);
            menu.path = (menuContextPath + '/*').replace(/\/+/g, '/');
            menusCopy.push(menu);
        }
    }

    decodeMenus(menusCopy, contextPath);
    return menusCopy;
}

export default getMenus;