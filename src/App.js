import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Searchbus from './components/Searchbus';
import Admin from './components/Admin';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext"
function App() { 
  return (
  
    <Router>
      <Nav />
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchbus' element={<Searchbus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Auth' element={<Login />}></Route>
          <Route path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
  
}
export default App;