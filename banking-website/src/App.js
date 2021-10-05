import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
