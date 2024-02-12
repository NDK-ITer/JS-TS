import Root from '../Root';
import Cookies from 'js-cookie';

const version = `v1`

const Login = (props) => {
    return Root.post(`${version}/auth/login`,{
        email: props.email,
        password: props.password
    })
}

const Register = (props) => {
    return Root.post(`${version}/auth/register`,{
        firstName: props.firstName,
        lastName: props.lastName,
        specialName: props.specialName,
        born: props.born,
        email: props.email,
        password: props.password,
        avatar: props.avatar
    })
}

const GetMyInformation = () => {
    return Root.get(`${version}/user/me`)
}

const Logout = () =>{
    Cookies.set('jwt','');
    Cookies.set('user','')
}

export {
    Login,
    Register,
    GetMyInformation,
    Logout
}