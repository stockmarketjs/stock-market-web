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

export default axios