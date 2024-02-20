import {Modal} from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import{
    GetById
} from '../../../../api/services/SongService'
import { useEffect, useState } from 'react';

const Play = (props) =>{

    const [song, setSong] = useState()

    const getSong = async () =>{
        try {
            let res = await GetById(props.idSong)
            if (res && res.data) {
                setSong(res.data)
                console.log(song)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getSong()
        console.log(song)
    },[])

    return(<>
        <div>
            {song && (
                
                <div>
                    <Modal show={props.isOpen} onHide={props.onClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{song.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <audio controls>
                            <source src={song.fileName} type="audio/mpeg"/>
                        </audio>
                    </Modal.Footer>
                    </Modal>
                </div>
            )}
            
            <ToastContainer/>
        </div>
    </>)
}

export default Play 