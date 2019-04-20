import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(
    config => {
        // 这里写死一个token，你需要在这里取到你设置好的token的值
        const token = store.state.token;
        if (token) {
            config.headers.Authorization = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    });

axios.interceptors.response.use(
    config => config,
    error => {
        if (error.response.status === 401) {
            alert('请登录之后, 再次操作');
            return Promise.reject(error)
        } else {
            alert(error.response.data.message);
            return Promise.reject(error)
        }
    });

export default axios