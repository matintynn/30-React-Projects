import React from 'react'
import './SlideBar.css'
import profileimg from '../../images/profile-img.png'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

const SlideBar = () => {
    return (
        <div className='slidebar'>
            <div className="slidebarItem">
                <span className="slibarTitle">ABOUT ME</span>
                <img
                    src={profileimg}
                    alt="my avatar"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque a voluptas accusantium labore eius. Voluptas, velit molestiae?</p>
            </div>
            <div className="slidebarItem">
                <div className="slibarTitle">CATEGORIES</div>
                <ul className="slidebarList">
                    <div className="slidebarListItem">Life</div>
                    <div className="slidebarListItem">Style</div>
                    <div className="slidebarListItem">Travel</div>
                    <div className="slidebarListItem">Music</div>
                    <div className="slidebarListItem">Tech</div>
                    <div className="slidebarListItem">Sport</div>
                </ul>
            </div>
            <div className="slidebarItem">
                <span className="slibarTitle">FOLLOW ME</span>
                <div className="slibarSocial">
                    <FaFacebookSquare size='22px' />
                    <FaInstagramSquare size='22px' />
                    <FaTwitterSquare size='22px' />
                    <FaYoutubeSquare size='22px' />
                </div>
            </div>
        </div>
    )
}

export default SlideBar
