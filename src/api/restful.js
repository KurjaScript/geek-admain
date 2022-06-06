import request from '../utils/request'

export function getUsersList(params = {}) {
    return request({
        method: 'GET',
        // url: $config.restfulService+'/users',
        url: '/users',
        params
    })
}

export function postNewUser(params) {
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

export function putUpdateUser(params) {
    return request({
        method: 'POST',
        url: '/users/10',
        params: {
            name: "zhang",
            email: "foo@bar.com"
        }
    })
}