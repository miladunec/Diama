import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Findyourcruise from './Pages/Findyourcruise';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Nopage from './Pages/Nopage';



const App = () => {
  
  return (
      <>
        
        <Router>
          
          
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/findcruise" element={<Findyourcruise />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Nopage/>} />
            
          </Routes>
          
        </Router>
        
        
        
      </>
    )
}

export default App;