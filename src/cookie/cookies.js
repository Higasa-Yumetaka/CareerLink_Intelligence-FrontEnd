
async function deleteCookie(name) {
    // 将cookie的过期时间设置为过去的时间
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export default deleteCookie;