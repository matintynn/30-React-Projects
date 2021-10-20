import React from 'react'
import './Write.css'
import { MdAddCircleOutline } from 'react-icons/md'

const Write = () => {
    return (
        <div className='write'>
            <img
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <MdAddCircleOutline size='26px' />
                    </label>
                    <input
                        type="file"
                        id='fileInput'
                        style={{ display: 'none' }}
                    />
                    <input
                        type="text"
                        placeholder='Title'
                        className='writeInput'
                        autoFocus={true}
                    />
                    <button className="writeSubmit" type='submit'>
                        Publish
                    </button>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className='writeInput writeText'
                        type='text'
                        placeholder='Your story...'

                    >
                    </textarea>
                </div>
                {/* <button className="writeSubmit" type='submit'>
                    Publish
                </button> */}
            </form>
        </div>
    )
}

export default Write
