import React from 'react';
import wireframe from '../wireframe.svg'

const Home = () => {
    return (
        <div className="home-page">
            <h1>Home page</h1>
            <img src={wireframe} alt="wireframe" />
        </div>
    );
}

export default Home;