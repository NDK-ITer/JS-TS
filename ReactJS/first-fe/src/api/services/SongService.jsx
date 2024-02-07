import axios from 'axios';

const GetByUserId = () => {
    return axios.get(`http://localhost:7000/v1/song/user/65c2ef30d70ae620536b2102`)
}

export {
    GetByUserId
}