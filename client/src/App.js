import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Landing from './components/pages/landing'
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
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
  return (
    // imported <Title/> and uploadform

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>

        <Route exact path='/home'>
          <Homepage />
          <ImageGrid />
        </Route>
        {/* <Route path='/api/v1/users/register'> */}

        <Route path='/register'>
          <Registration />
        </Route>

        <Route path='/login'>
          <Login />

        </Route>

        <Route path='/about'>
          <About />
        </Route>

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
