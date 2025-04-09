import './App.css';
import NoteState from './context/notes/NoteState'; // adjust the path as needed

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <NoteState>
    <Router> 
      <Navbar /> 
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
