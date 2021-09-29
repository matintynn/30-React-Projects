import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join our newsletter
                    </p>
                    <p className="footer-subscription-text">
                        Unsubscribe at any time
                    </p>
                    <div className="input-areas">
                        <form>
                            <input
                                type='email'
                                name='email'
                                placeholder='Your email'
                                className='footer-input'
                            />
                            <Button
                                buttonStyle='btn--outline'
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Company</h2>
                            <Link to='/'>About</Link>
                            <Link to='/'>How we works</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Contact</h2>
                            <Link to='/'>Email Us</Link>
                            <Link to='/'>Press</Link>
                            <Link to='/'>Affiliates</Link>
                            <Link to='/'>Partners</Link>
                            {/* <Link to='/'></Link> */}
                        </div>
                        <div className="footer-link-items">
                            <h2>Support</h2>
                            <Link to='/'>Hepl centre</Link>
                            <Link to='/'>Trust & Safety</Link>
                            <Link to='/'>Cancellation</Link>
                            <Link to='/'>FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-wrapper">
                <p className='copyright'>©2021 WANDERIFY.</p>
                <Link to='/'><FaTwitterSquare color='white' /></Link>
                <Link to='/'><FaFacebookSquare color='white' /></Link>
                <Link to='/'><FaInstagramSquare color='white' /></Link>
            </div>
        </>
    )
}

export default Footer
