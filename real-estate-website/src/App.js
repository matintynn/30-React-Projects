import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InforSection from './components/InforSection.js';
import Navbar from './components/Navbar';
import { InfoData1 } from './data/InfoData';
import GlobalStyle from './globalStyle';

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero />
            <InforSection {...InfoData1} />
            <Footer />
        </>
    );
}

export default App;