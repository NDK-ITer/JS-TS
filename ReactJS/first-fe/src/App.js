import './styles/App.scss';
import Header from './components/Header';
import TableSong from './components/TableSong';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <TableSong/>
      </Container>
    </div>
  );
}

export default App;
