import React, { useState } from 'react'
import { homeObject1, homeObject2, homeObject3 } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import HeroSec from '../components/HeroSec'
import InfoSection from '../components/InfoSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSec />
            <InfoSection {...homeObject1} />
            <InfoSection {...homeObject3} />
            <Services />
            <InfoSection {...homeObject2} />
            <Footer />
        </>
    )
}

export default Home
