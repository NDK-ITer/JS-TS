import { Link } from 'react-router-dom';
import '../../assets/styles/RegisterForm.scss'
import { Image } from 'react-bootstrap';

const RegisterForm = () =>{
    return(<>
    <div className="register-container col-12 col-sm-4">
        <form>
            <div className='title'>
                {/* <Image src={LoginLogo}
                    style={
                        { 
                            borderSpacing: "50%", 
                            height: "50px", 
                            width: "50px" 
                        }
                    }/> */}
                <span>Register</span>
            </div>

            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
                <label>User name</label>
                <input type="text" className="form-control" placeholder="User name" />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </div>
            <p className="login-Link text-right">
                Already registered <Link to="/login">login?</Link>
            </p>
        </form>
    </div>
    
    </>)
}

export default RegisterForm