import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AutoComplete, Input} from 'antd';


const HomeSearch = () => {
    return (
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{
                width: '80vh',
                // 居中
                margin: '0 auto',
            }}
            size="large"
        >
            <Input.Search size="large" placeholder="搜索你想了解的职业" enterButton />
        </AutoComplete>
    );
}

export default HomeSearch;
