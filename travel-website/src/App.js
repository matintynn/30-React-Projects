import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Tours from './components/pages/Tours';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tours' exact component={Tours} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
