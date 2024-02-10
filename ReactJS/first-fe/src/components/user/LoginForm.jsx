import { useState } from 'react';
import Cookies from 'js-cookie';
import { Image } from 'react-bootstrap';
import {Login} from '../../api/services/UserService';
import LoginLogo from'../../assets/images/LoginLogo.png';
import '../../assets/styles/LoginForm.scss';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Login({
                email: email,
                password: password
            })
            if (response.state === 1) {
                Cookies.set('jwt', response.jwt);
                Cookies.set('user', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (<>
    <div className='login-container col-12 col-sm-4'>
        <form onSubmit={loginSubmit}>
            <div className='title'>
                <Image src={LoginLogo}
                    style={
                        { 
                            borderSpacing: "50%", 
                            height: "50px", 
                            width: "50px" 
                        }
                    }/>
                <span>Log in</span>
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
            <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn-login">Login</button>
            </div>
            <p className="forgot-password text-right">
                <Link to="/forgot-password"  className='forgot-password-text'><div>Forgot password?</div></Link>
            </p>
        </form>
    </div>
    </>);
}

export default LoginForm;