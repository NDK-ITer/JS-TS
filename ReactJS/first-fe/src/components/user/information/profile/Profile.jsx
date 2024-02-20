import { useEffect, useState } from "react"

const Profile = (props) => {
    const [user, setUser] = useState()

    console.log(user)

    useEffect(() => {
        setUser(props.data)
    },[])

    return (<>
        {user && (
            <div className="prf-bg">
                {user.FirstName}
            </div>
        )}
    </>)
}

export default Profile