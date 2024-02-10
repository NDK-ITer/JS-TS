import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Cookies from 'js-cookie';

const Avatar = () => {

    const [user, setUser] = useState();
    
    useEffect(() => {
        // const user = JSON.parse(Cookies.get('user'))
        // if (user) {
        //     setUser(user)
        // }
    })
    return (<>
        {user ?( 
                <div>
                    <Image
                        src={user.linkAvatar}
                        roundedCircle={true}
                        style={{ 
                            borderRadius: "5%", 
                            height: "50px", 
                            width: "50px" 
                            }
                        } 
                    />
                </div>
            ):(
                <div>
                    
                </div>
            )

        }
    </>)
}

export default Avatar