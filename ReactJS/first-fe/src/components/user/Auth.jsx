import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { Image } from 'react-bootstrap';
import LoginLogo from'../../assets/images/LoginLogo.png';
import { useNavigate  } from 'react-router-dom';
import {
    Login,
    Register,
    GetMyInformation,
    Logout} from '../../api/services/UserService';

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate  = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loginForm, setLoginForm] = useState({
        email:'',
        password: ''
    })

    const [registerForm, setRegisterForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password: '',
    })
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const loginSubmit = async () => {
        try {
            const response = await Login(loginForm)
            if (response.state === 1) {
                Cookies.set('jwt', response.jwt);
                Cookies.set('user', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const register = async () =>{
        try {
            const response = await Register(registerForm)
            if (response.state === 1) {
                Cookies.set('jwt', response.jwt);
                Cookies.set('user', JSON.stringify(response.data));
                navigate('/all-song')
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            // Xử lý đăng nhập
            setLoginForm({
                email: email,
                password: password
            })
            loginSubmit();
            console.log('Đăng nhập');
        } else {
            // Xử lý đăng ký
            if (password !== confirmPassword) {
                alert('Mật khẩu và xác nhận mật khẩu không khớp!');
                return;
            }
            setRegisterForm({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            register();
            console.log('Đăng ký');
        }
    };

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <Image src={LoginLogo}
                    style={
                        { 
                            borderSpacing: "50%", 
                            height: "100px", 
                            width: "100px" 
                        }
                    }/>
            <h1 className="text-center">{isLogin ? 'Log in' : 'Register'}</h1>
            <Form onSubmit={handleSubmit}>
                {!isLogin && (
                    <Form.Group controlId="formName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Input First Name" 
                            onChange={(e) => setFirstName(e.target.value)}/>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Input Last Name" 
                            onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                )}
                <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Input email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                    <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Input password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                {!isLogin &&(
                    <Form.Group controlId="formPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Input password again" 
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </Form.Group>
                )}
                <div>
                    <Button variant="primary" type="submit" block>
                        {isLogin ? 'Sign in' : 'Sign up'}
                    </Button>
                </div>
                
            </Form>
            <p className="text-center mt-3">
                {isLogin ? 'Want to join with us?' : 'Ready Account?'}
                <Button variant="link" onClick={toggleForm} className="ml-2">
                {isLogin ? 'Sign up now!' : 'Sign in now!'}
                </Button>
            </p>
            </Col>
        </Row>
        </Container>
    );
}

export default LoginForm;
