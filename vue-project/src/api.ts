
const baseUrl = import.meta.env.VITE_API_HOST

// 用户信息查询
export function user_info() {
    return new Promise(resolve => {
        const url = baseUrl + '/user/123'
        fetch(url, { method: "get" })
            .then(res => res.json())
            .then(resolve)
    })
}

// 列表查询
export function user_list() {
    return new Promise(resolve => {
        const url = baseUrl + '/user'
        fetch(url, {
            method: "post", body: JSON.stringify({ page: 1, size: 10 }), headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resolve)
    })
}

// 用户删除
export function user_del() {
    return new Promise(resolve => {
        const url = baseUrl + '/user/456'
        fetch(url, { method: "delete" })
            .then(res => res.json())
            .then(resolve)
    })
}

export function cors_user_info() {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user/123'
        fetch(url, { method: "get" })
            .then(res => res.json())
            .then(resolve)
    })
}

export function cors_user_list() {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user'
        fetch(url, {
            method: "post", body: JSON.stringify({ page: 1, size: 10 }), headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resolve)
    })
}

export function cors_user_del() {
    return new Promise(resolve => {
        const url = baseUrl + '/cors/user/456'
        fetch(url, { method: "delete" })
            .then(res => res.json())
            .then(resolve)
    })
}

export function proxy_user_list() {
    return new Promise(resolve => {
        const url = '/proxy/user'
        fetch(url, {
            method: "post", body: JSON.stringify({ page: 1, size: 10 }), headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resolve)
    })
}
