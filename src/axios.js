import axios from 'axios';

const instance = axios.create({
    //https://auto1test-8a243.firebaseio.com/
    baseURL: 'https://test-3cc94.firebaseio.com/'
});

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;