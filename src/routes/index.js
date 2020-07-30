/**
 * @author zy
 * @date 2020/4/5
 * @Description: 路由组件
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { webRouteConfig } from './web';
import _ from 'lodash';


//保存所有路由配置的数组
const routeConfig = [webRouteConfig]

/**
 * 路由配置
 * @author zy
 * @date 2020/4/5
 */
export default function () {

    /**
     * 生成路由嵌套结构
     * @author: zy
     * @date: 2020-03-05
     * @param routeConfig: 路由配置数组
     */
    const renderRouters = (routeConfig) => {
        const routes = [];

        //遍历每一个路由项
        _.forEach(routeConfig, item => {
            //这里使用了嵌套路由
            routes.push(
                <Route
                    key={item.path}
                    path={item.path}
                    component={() =>
                        <div className={item.title}>
                            {item.component && <item.component />}
                            {item.subMenus && renderRouters(item.subMenus)}
                        </div>
                    }
                    exact={item.subMenus ? false : true}
                />
            );
        });

        return <Switch>{routes}</Switch>;
    };

    return renderRouters(routeConfig);
}