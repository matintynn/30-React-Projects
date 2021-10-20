import React from 'react'
import SlideBar from '../SlideBar'
import './Setting.css'
import { MdAddCircleOutline } from 'react-icons/md'

const Setting = () => {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="avatar"
                        />
                        <label htmlFor="fileInput">
                            <MdAddCircleOutline size='26px' />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label> Username</label>
                    <input type="text" placeholder='Joe' />
                    <label>Email</label>
                    <input type="email" placeholder='joe.doe@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">
                        Update
                    </button>
                </form>
            </div>
            <SlideBar />
        </div >
    )
}

export default Setting
