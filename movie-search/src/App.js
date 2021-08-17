import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MoviesContextProvider from "./contexts/context";


function App() {

  return (
    <div className="text-light">
      <MoviesContextProvider>
        <Header />
        <MoviesList />
        <Favorites />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
