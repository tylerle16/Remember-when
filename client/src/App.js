import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';


function App() {
  return (
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
    </Router>
    
  );
}

export default App;
