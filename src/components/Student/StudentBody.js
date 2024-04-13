import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const {Content, Footer} = Layout;
const StudentBody = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content
                style={{
                    margin: '0 16px',
                }}>
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    Bill is a cat.
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
};

export default StudentBody;