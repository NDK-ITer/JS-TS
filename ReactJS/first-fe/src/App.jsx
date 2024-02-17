import Container from 'react-bootstrap/Container';
import './assets/styles/App.scss';
import Header from './components/Header';
import AppRoute from './routes/AppRoute';

function App() {

  // const {user} = useContext(UserContext)
  // console.log('app: ', user)
  return (
      <div className='app-container'>
        <Header/>
        <Container>
          <AppRoute/>
        </Container>
      </div>
  );
}

export default App;
