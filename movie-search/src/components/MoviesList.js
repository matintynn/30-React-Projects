import { useContext } from "react";
import { moviesContext } from "../contexts/context";
import AddFavorite from "./AddFavorite";

const MoviesList = () => {
    const { movies, favorites, setFavorites, setLocalStorage } = useContext(moviesContext)
    return (
        <div className="ps-4 mt-5">
            <h2>Movies list:</h2>
            {movies.length === 0 && <div className="empty-state mt-4 me-3">No movie in the list, use search to find movies.</div>}
            <div className="movies-list">
                <ul className="d-flex mt-3 p-0">
                    {movies.map(movie => (
                        <li className="me-3 img-btn img-container" key={movie.imdbID}>
                            <img src={movie.Poster} alt="movie poster" />
                            <div className="overlay d-flex justify-content-center align-items.center">
                                <AddFavorite movie={movie} favorites={favorites} setFavorites={setFavorites} setLocalStorage={setLocalStorage} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MoviesList;