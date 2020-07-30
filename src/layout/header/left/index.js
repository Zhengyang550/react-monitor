/**
 * @author zy
 * @date 2020/4/6
 * @Description: 头部左侧布局
 */
import React from 'react';
import {RedditOutlined} from '@ant-design/icons';
import styles from './styles.scss';
import {HEADER_WEB_NAME} from '@/config'

/**
 * 头部左侧布局组件
 * @author zy
 * @date 2020/4/6
 */
const HeaderLeft = props => {

    return (
        <div className={styles.headerLeft}>
            <a href='/' className={styles.blogIcon}>
                <RedditOutlined  />{HEADER_WEB_NAME}
            </a>
        </div>
    )
}

export default HeaderLeft;