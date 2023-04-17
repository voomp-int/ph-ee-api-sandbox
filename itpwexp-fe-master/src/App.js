import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from './components/Dashboard/Home';
import Login from './components/Login';
import OnboardingForm from './components/Form/OnboardingForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  const [dark, setdark] = useState(false)

  const toggleMode = () => {
    document.body.style.backgroundColor = !dark ? "black" : "white";
    setdark(!dark)
  } 

  return (
    <>
    <Router>
      <Routes>
          <Route path='/home/*' element={<Home/>} exact></Route>
          <Route path='/' element={<Login/>} exact></Route>
          <Route path='/onboard' element={<OnboardingForm/>} exact></Route>
          {/* <Route path='/main/*' element={<MainBoard dark ={dark} toggle={toggleMode} />} exact></Route>
          <Route path='/announcement/' element={<Announcement />} exact></Route>
          <Route path='/passwordReset/*' element={<SetNewPassword />} exact></Route>
          <Route path='/duoAuth/*' element ={<DuoAuth/>} exact></Route
          */}
      </Routes> 
    </Router>
    </>
  );
}

export default App;