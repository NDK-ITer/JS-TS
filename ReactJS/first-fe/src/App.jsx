import Container from 'react-bootstrap/Container';
import {Routes, Route} from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import TableSong from './components/TableSong';
import LoginForm from './components/user/LoginForm';
import HomePage from './components/Home'
import RegisterForm from './components/user/Register';

function App() {
  return (
      <div className='app-container'>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/all-song' element={<TableSong/>}/>
          </Routes>
        </Container>
      </div>
  );
}

export default App;
