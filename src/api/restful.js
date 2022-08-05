import request from '../utils/request'
const usersListCache = new Map()

// 普通缓存接口数据
export async function getUsersList (params = {}) {
    let key = 'usersList'
    // 从 data 缓存中获取数据
    let data = usersListCache.get(key)
    if (!data) {
        const res = await request({
            method: 'GET',
            // url: $config.restfulService+'/users',
            url: '/users',
            params
        })
        data = res
        usersListCache.set(key, data)
    }
    return data
}

export function postNewUser (params) {
    return request({
        method: 'POST',
        url: '/users',
        // params
        // params: {
        //     name: "zhang",
        //     email: "foo@bar.com"
        // }
        data: params
    })
}

export function putUpdateUser (params) {
    return request({
        method: 'POST',
        url: '/users/10',
        params: {
            name: "zhang",
            email: "foo@bar.com"
        }
    })
}