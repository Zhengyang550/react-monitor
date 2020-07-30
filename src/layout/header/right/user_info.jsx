/**
 * @author zy
 * @date 2020/4/12
 * @Description: 用户信息
 */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dropdown, Menu, Avatar} from 'antd';

/**
 * 用户细腻些组件
 * @author zy
 * @date 2020/4/12
 */
function UserInfo(props) {
    //将store状态user映射到组件
    const userInfo = useSelector(state => state.user)||{username:'郑洋'};

    //获取用户信息
    const {username} = userInfo;

    //菜单
    const menuOverLay = (
        <Menu>
            <Menu.Item>
                <span>我的信息</span>
            </Menu.Item>
            <Menu.Item>
                <span>修改密码</span>
            </Menu.Item>
            <Menu.Item>
                {/*<span onClick={() => dispatch(loginout())}>退出登录</span>*/}
                <span>退出登录</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Dropdown placement='bottomCenter' overlay={menuOverLay} trigger={['click', 'hover']}>
                <Avatar size={32}
                        src='http://img2.imgtn.bdimg.com/it/u=3906498928,936423956&fm=26&gp=0.jpg'>{username}</Avatar>
            </Dropdown>
        </div>
    )
}

export default UserInfo;