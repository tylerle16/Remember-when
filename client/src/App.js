import './App.css';

import React, { useState, useEffect } from 'react';


import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Landing from './components/pages/landing'
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';



import ImageGrid from './components/ImageGrid';


function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/v1/users/current')
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setUser(data)
        }
      })
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    // imported <Title/> and uploadform

    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <ProtectedRoute exact path='/home'>
          <Homepage />
          <ImageGrid />
        </ProtectedRoute>
        <Route exact path='/register'>
          <Registration />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
