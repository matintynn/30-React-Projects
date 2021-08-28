import SideMenu from './components/SideMenu/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import Favorites from './pages/Favorites';
import Message from './pages/Message';
import Rewards from './pages/Rewards'

function App() {
  return (
    <div className="main-container">
      <Router>
        <SideMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/favorites' exact component={Favorites} />
          <Route path='/message' exact component={Message} />
          <Route path='/rewards' exact component={Rewards} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
