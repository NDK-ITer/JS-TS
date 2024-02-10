import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { GetAll } from '../api/services/SongService';

const TableUser = (props) =>{
    const[listSong, setListSong] = useState([])

    const getSongWithUser = async() =>{
        let res = await GetAll();
        if (res && res.data) {
            setListSong(res.data)
        }
    }

    useEffect(()=>{
        getSongWithUser()
    },[])

    return(
        <>
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
            </Table>
        </>
    )
}
export default TableUser;