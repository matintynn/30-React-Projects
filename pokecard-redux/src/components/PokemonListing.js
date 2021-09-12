import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp, nextUrl, prevUrl, setPokemon, setUrl } from '../redux/actions/pokemonActions';
import PokemonComponents from './PokemonComponents';
import { Container, Pagination } from './StyteElements';

const PokemonListing = () => {
    const url = useSelector(state => state.pokemonReducer.currentUrl)
    const nextURL = useSelector(state => state.pokemonReducer.nextUrl)
    const prevURL = useSelector(state => state.pokemonReducer.prevUrl)
    const dispatch = useDispatch()

    const [allPokemons, setAllPokemons] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancel;
        const fetchPokemons = async () => {
            const res = await axios.get(url, {
                cancelToken: new axios.CancelToken(c => cancel = c),
            }).catch(err => console.log(err))
            const pokemonArray = res.data.results;

            dispatch(nextUrl(res.data.next))
            dispatch(prevUrl(res.data.previous))

            const buildPokemonObj = function () {
                pokemonArray.map(async (pokemon) => {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).catch(err => console.log(err))
                    setAllPokemons(currentData => [...currentData, res.data])
                })
            }

            buildPokemonObj()
        }

        fetchPokemons()
        // clean up function, cancel old request
        return () => cancel()
    }, [url])

    useEffect(() => {
        setLoading(true)
        // if (allPokemons.length === 12) {
        //     // this setTimeOut() just for mock - up realworld fetching data
        //     setTimeout(() => {
        //         dispatch(setPokemon(allPokemons))
        //         setLoading(false)
        //     }, 1500)
        // }
        if (allPokemons.length === 12 || allPokemons.length === 24) {
            let filterData = allPokemons.splice(0, 12);
            dispatch(setPokemon(filterData))
            setLoading(false)
        }
    }, [allPokemons])

    const nextPageUrl = () => {
        dispatch(cleanUp())
        if (nextURL) {
            // place nextURL to currentUrl
            dispatch(setUrl(nextURL))
        }
    }

    const prevPageUrl = () => {
        if (prevURL) {
            // place prevURL to currentUrl
            dispatch(setUrl(prevURL))
        }
    }

    return (
        <Container>
            {loading
                ? <div style={{ color: '#fff', fontSize: 26 }}>Loading...</div>
                : (
                    <>
                        <PokemonComponents />
                        <Pagination>
                            {prevURL && <button onClick={prevPageUrl}>Previous</button>}
                            {nextURL && <button onClick={nextPageUrl}>Next</button>}
                        </Pagination>
                    </>
                )}
        </Container>
    );
}

export default PokemonListing;