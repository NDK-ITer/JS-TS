import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import '../../../assets/styles/InformationUser.scss'
import {
    GetMyInformation
} from '../../../api/services/UserService';
import Profile from './profile/Profile';
import {UserContext} from '../../../contexts/UserContext'
import Song from './song/Song'

const MainInformation = (props) => {

    const {user} = useContext(UserContext)
    const [isHovered, setIsHovered] = useState(false);
    const [userInformation, setUserInformation] = useState()

    const getInformation = async () => {
        try {
            let res = await GetMyInformation();
            if (res && res.data) {
                setUserInformation(res.data)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getInformation()
    }, [])

    return (
        <div>
            {userInformation && (
                <div>
                    <div className='container-avatar'
                        title={<Image src={userInformation.linkAvatar}
                        />}
                    >
                        <Col xs={6} md={4}>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Image src={userInformation.linkAvatar}
                                    roundedCircle
                                />
                                <div  className='name-perform'>
                                    <p>{user.name}</p>
                                </div>
                                {isHovered && (
                                    <span className='edit-avatar-btn'>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>
                                )}
                            </div>
                        </Col>
                    </div>
                    <div className='tab-category'>
                        <div className='center-content'>
                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="profile" title="Profile">
                                    <Profile data={userInformation} />
                                </Tab>
                                <Tab eventKey="song" title="Song">
                                    <Song data={userInformation.listSong} />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}
export default MainInformation;