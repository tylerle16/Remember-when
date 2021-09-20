import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Landing from './components/pages/landing'
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';

import Sidebar from './components/Sidebar';



import ImageGrid from './components/ImageGrid';


function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen   )
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

        <Route exact path='/home'>
          <Homepage />
          <ImageGrid/>
        </Route>
        {/* <Route path='/api/v1/users/register'> */}

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
