/**
 * @author zy
 * @date 2020/4/5
 * @Description: 根组件
 */
import React from 'react';
import Routes from '@/routes';
import {BrowserRouter} from 'react-router-dom';

export default function App(props) {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}