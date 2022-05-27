import request from '../utils/request'

export function getIcons( params = {} ){
    // return axios.get(`/api/getUsers`)
    return request({
        method: 'GET',
        url: '/api/geticons',
        params,
    })
}