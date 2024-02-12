import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import {Register} from '../../../api/services/UserService';
import '../../../assets/styles/Register.scss';

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        specialName:'',
        born: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (registerData.confirmPassword !== registerData.password) {
                alert('Password is not confirm!')
                return
            }
            const response = await Register(registerData)
            if (response.state === 1) {
                console.log('Login is successful!')
                Cookies.set('jwt', response.jwt);
                Cookies.set('user', JSON.stringify(response.data));
                console.log(Cookies.get('jwt'))
                // navigate('/all-song')
            }
        } catch (error) {
            console.error('Register error:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
            type="text"
            name="firstName"
            value={registerData.firstName}
            onChange={handleInputChange}
            placeholder="first name"
            />
        </Form.Group>

        <Form.Group controlId="formBasicName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
            type="text"
            name="lastName"
            value={registerData.lastName}
            onChange={handleInputChange}
            placeholder="last name"
            />
        </Form.Group>

        <Form.Group controlId="formBasicName">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
            type="text"
            name="specialName"
            value={registerData.specialName}
            onChange={handleInputChange}
            placeholder="user name"
            />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
            placeholder="email"
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Born:</Form.Label>
            <Form.Control
            type="text"
            name="born"
            value={registerData.born}
            onChange={handleInputChange}
            placeholder="born"
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            placeholder="password"
            />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            placeholder="confirm password"
            />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
            <Form.Label>Ảnh đại diện:</Form.Label>
            <Form.Control
                type="file"
                name="avatar"
                onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group>
            <Button variant="primary" type="submit" className='btn-submit'>
                Sign up
            </Button>
        </Form.Group>
        </Form>
    );
}

export default RegisterForm;
