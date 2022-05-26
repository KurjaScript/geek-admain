import axios from 'axios'
import request from '../utils/request'

export function getUsers( params = {} ){
    // return axios.get(`/api/getUsers`)
    return request({
        method: 'GET',
        url: '/api/getUsers',
        params,
    })
}