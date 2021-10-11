import React, { useState } from 'react'
import './Contact.scss'
import contactImg from '../../images/img-1.svg'

const Contact = () => {
    const [mess, setMess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setMess(!mess)
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <div className="imgContainer">
                    <img src={contactImg} alt='contact' />
                </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder='Name...' />
                    <input type="email" placeholder='Email...' />
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder='Your message...'
                    >
                    </textarea>
                    <button type='submit'>Send</button>
                    {mess && <span>Thanks! I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
