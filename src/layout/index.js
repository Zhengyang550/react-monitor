/**
 * @author zy
 * @date 2020/4/6
 * @Description: web页面布局
 */
import React from 'react';
import {Layout, Row, Col} from 'antd';
import Header from './header';

// 响应式
const siderLayout = {xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0}
const contentLayout = {xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24}


/**
 * Web布局组件
 * @author zy
 * @date 2020/4/6
 */
const WebLayout = props => {
    return (
        <Layout >
            <Header/>
            <Row>
                <Col {...siderLayout}>

                </Col>

                <Col {...contentLayout}>

                </Col>
            </Row>   </Layout>
    )
}

export default WebLayout;