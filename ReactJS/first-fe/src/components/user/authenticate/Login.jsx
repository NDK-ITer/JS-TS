import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { Login } from '../../../api/services/UserService';
import '../../../assets/styles/LoginForm.scss';

const LoginForm = (props) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Login(loginData)
            if (response.state === 1) {
                Cookies.set('jwt', response.jwt);
                Cookies.set('user', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                placeholder="email"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="password"
                />
            </Form.Group>

            <Form.Group>
                <Button variant="primary" type="submit" className='btn-submit'>
                    Login
                </Button>
            </Form.Group>
        </Form>
    );
}

export default LoginForm;
