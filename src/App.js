import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './Project';
import Education from './Education';

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Education/>
      <Project/>
      <Skills/>
    </div>
  );
}

export default App;
