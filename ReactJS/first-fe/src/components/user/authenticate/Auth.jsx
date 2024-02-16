import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoginForm from './Login';
import RegisterForm from './Register';

function AuthForm() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleFormSwitch = () => {
        setIsLoginForm(!isLoginForm);
    };

    const handleLoginSubmit = (data) => {
        console.log('Đăng nhập:', data);
    };

    const handleRegisterSubmit = (data) => {
        console.log('Đăng ký:', data);
    };

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <h1 className="text-center">{isLoginForm ? 'Log in' : 'New Member'}</h1>
            {isLoginForm ? (
                <LoginForm onSubmit={handleLoginSubmit} />
            ) : (
                <RegisterForm onSubmit={handleRegisterSubmit} />
            )}
            <p className="text-center mt-3">
                {isLoginForm ? 'Not available account?' : 'available account?'}
                <Button variant="link" onClick={handleFormSwitch} className="ml-2">
                {isLoginForm ? 'Sign in now!' : 'Sign up now!'}
                </Button>
            </p>
            </Col>
        </Row>
        </Container>
    );
}

export default AuthForm;
