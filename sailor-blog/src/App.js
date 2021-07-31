import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					{/* this switch component make sure just 1 route is showed */}
					<Switch>
						{/* add "exact" to get exact link */}
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						{/* asterik (*) means catch other route */}
						<Route path="*">
							<NotFoundPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
