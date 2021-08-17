import { useContext } from "react";
import { moviesContext } from "../contexts/context";
import RemoveFav from "./RemoveFav";

const Favorites = () => {
    const { favorites, setFavorites, setLocalStorage } = useContext(moviesContext)


    return (
        <div className="ps-4 mt-5">
            <h2>Favorite movies:</h2>
            {favorites.length === 0 && <div className="empty-state mt-4 me-3">There is no favorite movie in the list.</div>}
            <div className="movies-list">
                <ul className="d-flex mt-3 p-0">
                    {favorites.map(fav => (
                        <li className="me-3 img-btn img-container" key={fav.imdbID}>
                            <img src={fav.Poster} alt="movie poster" />
                            <div className="overlay d-flex justify-content-center align-items.center">
                                <RemoveFav fav={fav} setFavorites={setFavorites} favorites={favorites} setLocalStorage={setLocalStorage} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Favorites;