import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
// import { Modal} from 'react-bootstrap';
import '../../../../assets/styles/Song.scss'
import Play from "./Play";

const Song = (props) => {
    
    const [isOpenPlayer, setIsOpenPlayer] = useState(Array(props.data.length).fill(false))
    const togglePopup = (index) => {
        const newIsOpenPlayers = [...isOpenPlayer];
        newIsOpenPlayers[index] = !newIsOpenPlayers[index];
        setIsOpenPlayer(newIsOpenPlayers);
    };

    useEffect(() => {
        console.log(props.data)
    })

    return (<>
        <div className="song-bg">
            {props.data.length > 0 && props.data.map((item, index) => {
                return (
                    <div key={item.id} 
                        className="card-element"
                        onClick={() => togglePopup(index)}
                    >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top"
                                src={item.image}
                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Play isOpen={isOpenPlayer[index]} 
                            onClose={() => togglePopup(index)}
                            idSong={item.id}/>
                    </div>
                )
            })}
        </div>
    </>)
}

export default Song