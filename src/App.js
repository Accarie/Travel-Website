import React from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
      <Router>  
      <Navbar />
      <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/services' exact Component={Services}></Route>
      <Route path='/products' exact Component={Products}></Route>
      <Route path='/sign-up' exact Component={SignUp}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App;


































