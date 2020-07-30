/**
 * @author zy
 * @date 2020/4/5
 * @Description: 找不到页面
 */
import React from 'react';
import {Result, Button} from 'antd';

/**
 * 页面找不到组件
 * @author zy
 * @date 2020/4/5
 */
function PageNotFound(props) {
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={
                <Button
                    type='primary'
                    onClick={() => {
                        props.history.push('/')
                    }}>
                    Back Home
                </Button>
            }
        />
    )
}

export default PageNotFound