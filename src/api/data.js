import request from '../utils/request'
import '../mock'

export function getProducts( params = {} ) {
    return request({
        method: 'GET',
        url: '/products',
        params
    }) 
}

export function fetchData(query) {
    return request({
        url: './table.json',
        method: 'GET',
        params: query
    })
}

export const getDashboard = (params = {}) => {
    return request({
        method: 'GET',
        url: '/dashboard/getDashboard',
        params
    })
}

export const getTest = (params = {}) => {
    return request({
        method: 'GET',
        url: '/test',
        params
    })
}

export function getUsers() {
    return request({
        url:"/api/getUsers",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: ["云柱", "火柱"],
            }
        }
    })
}