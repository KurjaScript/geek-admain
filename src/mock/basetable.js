import request from '../utils/request'

export function getBasetable(params = {}){
    // return axios.get(`/api/getUsers`)
    return request({
        method: 'GET',
        url: '/api/getbasetable',
        params
    })
}

export function postBasetable(data){
    return request({
        method: 'POST',
        url: '/api/postbasetable',
        data: {obj: data},
    })
}