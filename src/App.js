import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from './components/Projects';


//BOOTSTRAP INSTALLED
//TYPEWRITER NPM INSTALLED
//REACT ROUTE DOM INSTALLED
function App() {
  return (
    <div className="App" >
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
