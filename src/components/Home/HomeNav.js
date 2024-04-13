import React, { useState } from 'react';
import { Divider, Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('大类1', '1', null, []),
    getItem('大类2', '2', null, []),
    getItem('大类3', 'sub1', null, [
        getItem('小类1', '3'),
        getItem('小类2', '4'),
        getItem('小类3', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('大类4', 'sub2', null, [
        getItem('小类4', '7'),
        getItem('小类5', '8'),
        getItem('小类6', '9'),
        getItem('小类7', '10'),
    ]),
];

const HomeNav = () => {

    return (
        <>
            <Menu
                style={{
                    width: '40vh',
                }}
                mode='vertical'
                theme='light'
                items={items}
            />
        </>
    );
}

export default HomeNav;