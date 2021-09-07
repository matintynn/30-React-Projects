import React from 'react';
import { BiStore } from 'react-icons/bi'

const Header = () => {
    return (
        <div className="ui fixed menu navbar">
            <div className="ui container center">
                <div className='logo'>
                    <BiStore size="2em" />
                    <h2>Redux Store</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;