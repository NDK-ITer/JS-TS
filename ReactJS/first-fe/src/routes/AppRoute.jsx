import {Routes, Route} from 'react-router-dom';
import HomePage from '../components/Home'
import Auth from '../components/user/authenticate/Auth'
import AuthRoute from './AuthRoute';
import MainInformation from '../components/user/information/MainInformation';
import MySong from '../components/sounds/MySong';

const AppRoute = () => {
    return(<>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/my-song' element={
                <AuthRoute>
                    <MySong/>
                </AuthRoute>
            }/>
            <Route path='/main-information' element={
                <AuthRoute>
                    <MainInformation/>
                </AuthRoute>
            }/>
        </Routes>
    </>)
}

export default AppRoute