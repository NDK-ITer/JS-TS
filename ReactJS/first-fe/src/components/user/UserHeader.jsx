import { useEffect } from 'react';
import { Image, NavDropdown, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../assets/styles/UserHeader.scss'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const UserHeader = (props) => {
    const { logout, user } = useContext(UserContext)

    const handleLogout = () => {
        logout()
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
                                    }} 
                                />
                                &nbsp;{user.name}
                            </div>
                        }
                    >
                        <NavDropdown.Item><Nav.Link as={Link} to="/profile"><i class="fa-solid fa-address-card"></i>&nbsp;Profile</Nav.Link></NavDropdown.Item>
                        <NavDropdown.Item><Nav.Link as={Link} to="/my-song"><i class="fa-solid fa-music"></i>&nbsp;Song</Nav.Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <div style={{
                            background: 'yellow',
                            color: 'white'
                        }}>
                            <NavDropdown.Item><Nav.Link as={Link} onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>&nbsp;Log Out</Nav.Link></NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
                
            :
                <div 
                    roundedCircle={true}
                    style={{
                        background: 'grey',
                        borderRadius: "15%", 
                    }}
                >
                    <Nav.Link as={Link} to="/auth">
                        <div>
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;<i class="fa-solid fa-user avatar"></i>
                        </div>
                    </Nav.Link>
                </div>
            

        }
    </>)
}

export default UserHeader