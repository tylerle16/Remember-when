import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Landing from './components/pages/landing'
import Homepage from './components/pages/Homepage';


function App() {
  return (
    // imported <Title/> and uploadform

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>

        <Route exact path='/landing'>
          <Landing />
        </Route>
        {/* <Route path='/api/v1/users/register'> */}

        <Route path='/register'>

          <Registration />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch><br />
      <Footer />
    </Router>

  );
}

export default App;
