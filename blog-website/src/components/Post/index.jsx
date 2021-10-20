import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className='post'>
            <img
                className='postImg'
                src="https://images.pexels.com/photos/5227442/pexels-photo-5227442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
            <div className="postInfo">
                <div className="postCates">
                    <span className="postCate">Travel</span>
                    <span className="postCate">Life</span>
                </div>
                <div className="posttitle">
                    Lorem, ipsum dolor sit amet.
                </div>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima culpa quis exercitationem, sed libero sint aperiam dicta corrupti assumenda excepturi dolorum amet ut optio harum vel dolore ex provident! Enim minima culpa quis exercitationem, sed libero sint aperiam dicta corrupti assumenda excepturi dolorum amet ut optio harum vel dolore ex provident!</p>
        </div>
    )
}

export default Post
