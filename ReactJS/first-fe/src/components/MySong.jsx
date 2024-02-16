import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from "react-toastify";
import { 
    GetAll,
    GetMySong 
} from '../api/services/SongService';

const TableUser = (props) =>{
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
export default TableUser;