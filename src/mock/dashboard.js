import request from '../utils/request'

export function getDashboard( params = {} ){
    // return axios.get(`/api/getUsers`)
    return request({
        method: 'GET',
        url: '/api/dashboard',
        params,
    })
}