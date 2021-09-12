import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, PokemonDetailCard } from "./StyteElements";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedPokemon, selectedPokemon } from '../redux/actions/pokemonActions';

const PokemonDetail = () => {
    const { pokemon_id } = useParams()
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.selectedPokemonReducer);
    const { abilities, name, sprites, types, } = pokemon;
    const [loading, setLoading] = useState(true)
    let img = null;
    let type = null;
    let ability = null;

    useEffect(() => {
        const fetchPokemon = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;
            const res = await axios.get(url).catch(err => console.log(err))
            dispatch(selectedPokemon(res.data))
            setLoading(false)
        }

        if (pokemon_id && pokemon_id !== '') {
            fetchPokemon()
            // sprites.other.dream_world.front_default
            // type = types[0].type.name;
        }
        dispatch(removeSelectedPokemon());
    }, [pokemon_id])

    if (loading === false) {
        img = sprites.other.dream_world.front_default;
        type = types[0].type.name;
        ability = abilities[0].ability.name;
    }

    return (
        <Container>
            {loading
                ? <div style={{ color: '#fff', fontSize: 26 }}>Loading...</div>
                : (
                    <PokemonDetailCard>
                        <div className="img">
                            <img src={img} alt={name} />
                        </div>
                        <div className="infor-container">
                            <h1>{name}</h1>
                            <div className="infor">
                                <p><strong>Ability: </strong>{ability}</p>
                                <p><strong>Type: </strong>{type}</p>
                            </div>
                        </div>
                    </PokemonDetailCard>
                )
            }
        </Container>
    );
}

export default PokemonDetail;