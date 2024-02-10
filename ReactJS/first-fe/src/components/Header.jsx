import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import React from 'react';
import Avatar from './user/Avatar';
import LogoApp from '../assets/images/MainLogo.png';
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Header = () =>{
    const location = useLocation()

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <Image src={LogoApp}
                            style={{ 
                                borderSpacing: "50%", 
                                height: "50px", 
                                width: "50px" 
                                }
                            } 
                        />
                        <span> Sing Together</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" activeKey={location.pathname}>
                            <Nav.Link as={Link} to="/all-song">Song</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Navbar as={Link} to = "/profile">
                        <Avatar/>
                    </Navbar> */}
                </Container>
            </Navbar>
        </>
    )
}
export default Header;