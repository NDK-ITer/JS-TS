import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: `http://localhost:7000/`,
    timeout: 1000*60*5,
    withCredentials: false
});

instance.interceptors.request.use(function (config) {
    const jwt  = Cookies.get('jwt');
    if (jwt) {
        config.headers[`Authorization`] = `Bearer ${jwt}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

instance.interceptors.response.use(function (res) {
    let result = res.data
    if(result.state != 1){
        alert(result.mess)
    }
    return result;
}, function (error) {
    let res = {}
    if (error.response) {
        res.data = error.response.data
        res.status = error.response.status
        res.headers = error.response.headers
        console.log(res)
    }
    else if(error.request){
        console.log(error.request)
    }
    else{
        console.log(error.mess)
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(res)
    return res;
});

export default instance;