import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { 
    GetMyInformation 
} from '../../api/services/UserService';

const Profile = (props) =>{

    const[userInformation, setUserInformation] = useState()
    const getInformation = async() =>{
        try {
            let res = await GetMyInformation();
            if (res && res.data) {
                setUserInformation(res.data)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        getInformation()
    },[])

    return(
        <div>
            {userInformation && (
                <div>
                    <img src={userInformation.linkAvatar} alt="" />
                </div>
            )}
            <ToastContainer/>
        </div>
    )
}
export default Profile;