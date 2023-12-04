import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';
import Enemies from './Enemies';
import Mounts from './Mounts';
import Units from './Units';
import Buildings from './Buildings';
import Contact from './Contact';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    < BrowserRouter >
      <Routes>
        <Route path="/"  element={<Home />}  />
        <Route path="/enemies"  element={<Enemies />}  />
        <Route path="/mounts"  element={<Mounts />}  />
        <Route path="/units"  element={<Units />}  />
        <Route path="/buildings"  element={<Buildings />}  />
        <Route path="/contact"  element={<Contact />}  />
      </ Routes >
    </ BrowserRouter > 
  );
}

export default App;
