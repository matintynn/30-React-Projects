import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SinglePost from "./components/SinglePost";

function App() {
  const user = false;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register'>
          {user ? <Home /> : <Register />}
        </Route>
        <Route path='/login'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route path='/write'>
          {user ? <Write /> : <Register />}
        </Route>
        <Route path='/setting'>
          {user ? <Setting /> : <Register />}
        </Route>
        <Route path='/post/:postId' exact component={SinglePost} />
        {/* <Route path='/register' exact component={Register} /> */}
        {/* <Route path='/login' exact component={Login} /> */}
        {/* <Route path='/write' exact component={Write} /> */}
        {/* <Route path='/setting' exact component={Setting} /> */}
      </Switch>
    </Router>
  );
}

export default App;
