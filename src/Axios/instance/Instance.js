import axios from "axios";

const instance = axios.create({
    baseURL: 'http://172.18.192.154:8088/api', // 设置基础URL
});

// 请求拦截器：在发送请求之前执行
instance.interceptors.request.use(
    function(config) {
        // 获取本地的 Cookie
        const cookies = document.cookie.split(';');
        // 在请求头中添加 Cookie
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            config.headers[name] = value;
        });
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default instance;