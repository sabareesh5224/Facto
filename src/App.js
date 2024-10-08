// App.js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Crypto from './Crypto/Crypto';
import { Home } from './Home';
import Ai from './Ai/Ai';
import Robotics from './Robotics/Robotics';
import Facts from './Facts/Facts';
import Mech from './Mech/Mech';
import Electric from './Electric/Electric';


function App() {
  return (
    <>
    
    <Router>

      <Routes>

        <Route  path="/" element={<Home />} />
        <Route  path="/crypto" element={<Crypto />} />
        <Route path="/ai" element={<Ai/>}/>
        <Route path="/Robotics" element={<Robotics/>}/>
        <Route path="/facts" element={<Facts/>}/>
        <Route path='/Mechanical' element={<Mech/>}/>
        <Route path='/Electrical' element={<Electric/>}/>
        

      </Routes>

    </Router></>
  );
}

export default App;
