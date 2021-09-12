import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Cards } from './StyteElements';
import { Link } from 'react-router-dom'

const PokemonComponents = () => {
    const pokemons = useSelector(state => state.pokemonReducer.pokemons)

    return (
        <Cards>
            {pokemons.map(pokemon => {
                const { id, name, sprites, types } = pokemon
                const image = sprites.other.dream_world.front_default
                const type = types[0].type.name
                return (
                    <Link to={`/pokemon/${id}`}>
                        <Card key={id}>
                            <div className="img">
                                <img src={image} alt={name} />
                            </div>
                            <div className="infor">
                                <div className="name">{name}</div>
                                <p className='type'>Type: {type}</p>
                            </div>
                        </Card>
                    </Link>
                )
            })}

        </Cards>
    );
}

export default PokemonComponents;