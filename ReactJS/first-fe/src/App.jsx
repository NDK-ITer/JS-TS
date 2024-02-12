import Container from 'react-bootstrap/Container';
import {Routes, Route} from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import TableSong from './components/TableSong';
import HomePage from './components/Home'
import Auth from './components/user/Auth'

function App() {
  return (
      <div className='app-container'>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/all-song' element={<TableSong/>}/>
          </Routes>
        </Container>
      </div>
  );
}

export default App;
