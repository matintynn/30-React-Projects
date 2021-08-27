import Navbar from "./components/Navbar";
import Footer from "./components/ReactFooter";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="webpage-container">
        <Navbar />
        {/* Switch: showing 1 page at the time */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/about' exact component={About} />
          <Route path='*' />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
