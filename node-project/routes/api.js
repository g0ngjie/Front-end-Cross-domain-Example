
const baseUrl = "//127.0.0.1:8080"

// 用户信息查询
exports.user_info = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/user/123'
        fetch(url, { method: "get" })
            .then(res => res.json())
            .then(resolve)
    })
}

// 列表查询
exports.user_list = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/user'
        fetch(url, { method: "post", body: JSON.stringify({ page: 1, size: 10 }) })
            .then(res => res.json())
            .then(resolve)
    })
}

// 用户删除
exports.user_del = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/user/456'
        fetch(url, { method: "delete" })
            .then(res => res.json())
            .then(resolve)
    })
}

exports.cors_user_info = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user/123'
        fetch(url, { method: "get" })
            .then(res => res.json())
            .then(resolve)
    })
}

exports.cors_user_list = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user'
        fetch(url, { method: "post", body: JSON.stringify({ page: 1, size: 10 }) })
            .then(res => res.json())
            .then(resolve)
    })
}

exports.cors_user_del = function () {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user/456'
        fetch(url, { method: "delete" })
            .then(res => res.json())
            .then(resolve)
    })
}

exports.proxy_user_list = function () {
    return new Promise(resolve => {
        const url = '/cors/user'
        fetch(url, { method: "post", body: JSON.stringify({ page: 1, size: 10 }) })
            .then(res => res.json())
            .then(resolve)
    })
}