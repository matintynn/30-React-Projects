import React from 'react'
import './SinglePost.css'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    src="https://images.pexels.com/photos/5227442/pexels-photo-5227442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className='singlePostImg'
                />
                <div className="title-container">
                    <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <div className="singlePostEdit">
                        <FaRegEdit size='18px' />
                        <FaRegTrashAlt />
                    </div>
                </div>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Josh Doe</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem hic aspernatur placeat provident explicabo maiores. Libero maxime excepturi magnam nesciunt aliquid accusantium fugit natus? Autem laudantium qui adipisci facere voluptate nostrum neque omnis, reprehenderit eos recusandae voluptatum consequatur, saepe error fuga nam sunt alias id inventore? Accusamus, iste ipsum? Quasi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem hic aspernatur placeat provident explicabo maiores. Libero maxime excepturi magnam nesciunt aliquid accusantium fugit natus? Autem laudantium qui adipisci facere voluptate nostrum neque omnis, reprehenderit eos recusandae voluptatum consequatur, saepe error fuga nam sunt alias id inventore? Accusamus, iste ipsum? Quasi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem hic aspernatur placeat provident explicabo maiores. Libero maxime excepturi magnam nesciunt aliquid accusantium fugit natus? Autem laudantium qui adipisci facere voluptate nostrum neque omnis, reprehenderit eos recusandae voluptatum consequatur, saepe error fuga nam sunt alias id inventore? Accusamus, iste ipsum? Quasi.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
