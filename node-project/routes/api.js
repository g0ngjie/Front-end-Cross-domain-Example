const axios = require('axios').default

const baseUrl = "http://127.0.0.1:8080";

// 用户信息查询
exports.user_info = function () {
    const url = baseUrl + '/user/123'
    return axios.get(url)
}

// 列表查询
exports.user_list = function () {
    const url = baseUrl + '/user'
    return axios.post(url, { page: 1, size: 10 })
}

// 用户删除
exports.user_del = function () {
    const url = baseUrl + '/user/456'
    return axios.delete(url)
}

exports.cors_user_info = function () {
    const url = baseUrl + '/cors/user/123'
    return axios.get(url)
}

exports.cors_user_list = function () {
    const url = baseUrl + '/cors/user'
    return axios.post(url, { page: 1, size: 10 })
}

exports.cors_user_del = function () {
    const url = baseUrl + '/cors/user/456'
    return axios.delete(url)
}
