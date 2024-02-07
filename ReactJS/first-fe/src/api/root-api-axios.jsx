import axios from 'axios';

const BASE_URL = 'https://localhost:7000/'
const instance = axios.create({
    baseURL: BASE_URL,
    // timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export default instance