import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('我要找工作', '1', <PieChartOutlined />, [getItem('寻找职位', '1-1')]),
    getItem('了解我的优势', '2', <DesktopOutlined />, [getItem('在线简历', '2-1'), getItem('职位推荐', '2-2'), getItem('个人分析', '2-3')]),
];

const StudentSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                   theme={"light"} style={{height: "100vh"}}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </>
    )
}

export default StudentSider;
