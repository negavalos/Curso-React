import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, routes, route, Link, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="Hola welcome props" name="Nelson" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/AboutMe">Sobre mi</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/AboutMe" element={<AboutMe />}/>
            <Route path="/Profile/:name" element={<Profile />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
