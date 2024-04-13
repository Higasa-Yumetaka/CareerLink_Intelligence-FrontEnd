import instance from "./Instance";

// 通过token获取用户信息
export async function getUserInfo() {
    try {
        const response = await instance.get('/getUserInfo');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getUserName() {
    const userInfo = await getUserInfo();
    return userInfo.data.username;
}
