import { useEffect, useState } from 'react';
import { Image, NavDropdown, Nav } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../../assets/styles/UserHeader.scss'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Avatar = (props) => {
    const { logout, user } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    useEffect(() => {
        
    },[])
    return (<>
        {user.isAuth ? 
                <Nav>
                    <NavDropdown
                        title={
                            <div className='name-user'>
                                <Image 
                                    src={user.avatar}
                                    roundedCircle={true}
                                    style={{ 
                                        borderRadius: "5%", 
                                        height: "50px", 
                                        width: "50px" 
                                        }
                                    } 
                                />
                                &nbsp;{user.name}
                            </div>
                        }
                    >
                        <NavDropdown.Item><Nav.Link as={Link} to="/profile">Profile</Nav.Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Nav.Link as={Link} onClick={handleLogout}>Log Out</Nav.Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
            :
                <div>
                    <Nav.Link as={Link} to="/auth">
                        <div>
                            <i class="fa-solid fa-user avatar"></i>
                        </div>
                    </Nav.Link>
                </div>
            

        }
    </>)
}

export default Avatar