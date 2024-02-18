import { useEffect, useState } from 'react';
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
import Song from './song/Song';

const MainInformation = (props) => {

    const [isClicked, setIsClicked] = useState(false);
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

    const handleClick = () => {
        setIsClicked(!isClicked); // Đảo ngược trạng thái khi click
    };

    useEffect(() => {
        getInformation()
    }, [])

    return (
        <div>
            {userInformation && (
                <div>
                    <div className='container-avatar'>
                        <Col xs={6} md={4}>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Image src={userInformation.linkAvatar}
                                    roundedCircle
                                />
                                {isHovered && (
                                    <div className='edit-avatar-btn'>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </div>
                    <div className='tab-category'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="profile" title="Profile">
                                <Profile />
                            </Tab>
                            <Tab eventKey="song" title="Song">
                                <Song />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}
export default MainInformation;