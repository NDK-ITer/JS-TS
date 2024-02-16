import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import '../assets/styles/Header.scss';
import LogoApp from '../assets/images/MainLogo.png';
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import UserHeader from './user/UserHeader';


const Header = () =>{
    const location = useLocation()

    useEffect(() => {
        
    })

    return(
        <>
        <div className="form-container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <Image src={LogoApp}
                            style={{ 
                                borderSpacing: "50%", 
                                height: "50px", 
                                width: "50px" 
                            }} 
                        />
                        <span> Sing Together</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" activeKey={location.pathname}>
                            <Nav.Link as={Link} to="/my-song">Song</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        {/* <Nav.Link as={Link} to="/auth">User</Nav.Link> */}
                        <UserHeader/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        </>
    )
}
export default Header;