import React, { useState, createContext, useContext } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import {ConfigProvider, Menu} from 'antd';
import { useGlobalNavContext } from '../../global/GlobalNavContext';

const items = [
    {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: '学生招聘',
        key: 'student',
    },
    {
        label: '企业用人',
        key: 'hr',
    },
    {
        label: '关于我们',
        key: 'about',
    },
];
const NavBar = () => {
    // 获取NavBar状态
    const [navBarState, setNavBarState] = useGlobalNavContext();
    // 点击导航栏
    const onClick = (e) => {
        setNavBarState(e.key);
        // 跳转到对应页面
        if (e.key === 'home' && window.location.pathname !== '/') {
            window.location.href = '/';
        } else if (e.key === 'student' && window.location.pathname !== '/student') {
            window.location.href = '/student';
        } else if (e.key === 'hr' && window.location.pathname !== '/hr') {
            window.location.href = '/hr';
        } else if (e.key === 'about' && window.location.pathname !== '/about') {
            window.location.href = '/about';
        }
    };
    //console.log('navBarState', navBarState);
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#6476f3' },
            // algorithm: theme.darkAlgorithm,
        }}>
            <Menu onClick={onClick}
                  //defaultSelectedKeys={['home']}
                  selectedKeys={[navBarState]}
                  mode={"horizontal"}
                  defaultOpenKeys={['sub1']}
                  style={{display: 'flex', justifyContent: 'center'}}
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </ConfigProvider>
    );
};
export default NavBar;