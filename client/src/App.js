import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Title from './components/Title';
import UploadForm from './components/UploadForm';


function App() {
  return (
    // imported <Title/> and uploadform

    <Router>
      <Navbar />
      <Switch>
        <Route path='/api/v1/users/register'>
    <Registration/>
    </Route>
    <Route>
    <Login />
    </Route>
    </Switch><br/>
    <Footer/>
    <Route>
      <UploadForm/>
    </Route>
    <Route>
    <Title/>
    </Route>
    </Router>
    
  );
}

export default App;
