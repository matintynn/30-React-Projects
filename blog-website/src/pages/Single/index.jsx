import React from 'react'
import './Single.css'
import SlideBar from '../../components/SlideBar'
import SinglePost from '../../components/SinglePost'

const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <SlideBar />
        </div>
    )
}

export default Single
