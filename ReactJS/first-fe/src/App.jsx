import Container from 'react-bootstrap/Container';
import './assets/styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoute from './routes/AppRoute';

function App() {

  // const {user} = useContext(UserContext)
  // console.log('app: ', user)
  return (
      <div className='app-container app'>
        <Header/>
        <Container>
          <AppRoute/>
        </Container>
        <Footer/>
      </div>
  );
}

export default App;
