import Container from 'react-bootstrap/Container';
import {Routes, Route} from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import MySong from './components/MySong';
import HomePage from './components/Home'
import Auth from './components/user/authenticate/Auth'
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

function App() {

  const {user} = useContext(UserContext)
  console.log('app: ', user)
  return (
      <div className='app-container'>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/my-song' element={<MySong/>}/>
          </Routes>
        </Container>
      </div>
  );
}

export default App;
