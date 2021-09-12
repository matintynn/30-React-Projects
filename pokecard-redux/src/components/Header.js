import React from 'react';
import { HeaderSection } from './StyteElements';
import poke from '../assets/images/poke.svg'
import ball from '../assets/images/ball.svg'

const Header = () => {
    return (
        <HeaderSection>
            <img className='pokeText' src={poke} alt="poke word" />
            <img className='pokeBall' src={ball} alt="poke ball" />
        </HeaderSection>
    );
}

export default Header;