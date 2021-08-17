import { createContext, useEffect, useReducer, useState } from "react";
import { moviesReducer } from "../reducers/moviesReducer";

export const moviesContext = createContext()

const MoviesContextProvider = (props) => {
    const [movies, dispatch] = useReducer(moviesReducer, [])
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState(() => {
        const localData = localStorage.getItem("favorite-movies-list")
        return localData ? JSON.parse(localData) : []
    })

    // setLocalStorage
    const setLocalStorage = (items) => {
        localStorage.setItem("favorite-movies-list", JSON.stringify(items))
    }

    // Fetch new api when searchValue is changed
    useEffect(() => {
        const fetchMovies = async () => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eefeb296`
            const res = await fetch(url)
            const data = await res.json()
            if (data.Search) {
                dispatch({
                    type: "SET_DATA", data
                })
            }
        }
        fetchMovies();
    }, [searchValue]);

    return (
        <moviesContext.Provider value={{ movies, searchValue, setSearchValue, favorites, setFavorites, setLocalStorage, dispatch }}>
            {props.children}
        </moviesContext.Provider>
    );
}

export default MoviesContextProvider;