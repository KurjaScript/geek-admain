import axios from 'axios';


const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'http://localhost:3000',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        // if (response.status === 20000) {
        //     return response;
        // } else {
        //     Promise.reject(error);
        // }
        return response
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);


export default service;
