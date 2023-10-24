import { Route, BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage/Homepage';
import { Contactus } from './Contactus/Contactus';
import { Nav } from './Homepage/Navigation/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>


    </div>
  );
}

export default App;
