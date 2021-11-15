import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main';

function App(){
  return <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
  </BrowserRouter>
}

export default App;