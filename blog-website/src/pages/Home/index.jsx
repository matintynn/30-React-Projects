import React from 'react'
import Header from '../../components/Header'
import SlideBar from '../../components/SlideBar'
import Posts from '../../components/posts/Posts'
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <SlideBar />
            </div>
        </>

    )
}

export default Home
