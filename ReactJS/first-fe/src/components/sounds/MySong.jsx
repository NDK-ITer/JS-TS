import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from '../../contexts/UserContext';
import {useNavigate} from 'react-router-dom';
import { 
    GetMySong 
} from '../../api/services/SongService';

const MySong = (props) =>{

    let navigate = useNavigate()
    const { user } = useContext(UserContext)
    const[listSong, setListSong] = useState([])
    const getSongWithUser = async() =>{
        try {
            let res = await GetMySong();
            if (res && res.data) {
                setListSong(res.data)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        if (!user.isAuth) {
            navigate('/auth')
        }
        getSongWithUser()
    },[])

    return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Sound</th>
                        <th>Published Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listSong && listSong.length > 0 && listSong.map((item, index) => {
                            return(
                                <tr key={`song-${index}`}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <audio controls>
                                            <source src={item.fileName} type="audio/mpeg"/>
                                        </audio>
                                    </td>
                                    <td>{item.publishedDate}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                <ToastContainer/>
            </Table>
    )
}
export default MySong;