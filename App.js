import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './Pages/Home';
import Findyourcruise from './Pages/Findyourcruise';
import Contact from './Pages/Contact';
import Login from './Login';
import Nopage from './Pages/Nopage';
import Signup from './Signup';
import User from './User';



const App = () => {
  
  return (
      <>
        
        <Router>
          
          
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/findcruise" element={<Findyourcruise />} />

            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/user/:id' element={<User />} />
            <Route path="*" element={<Nopage/>} />
            
          </Routes>
          
        </Router>
        
        
        
      </>
    )
}

export default App;