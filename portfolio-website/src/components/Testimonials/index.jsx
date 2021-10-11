import React from 'react'
import './Testimonial.scss'
import { RiGlobalLine, RiLinkedinBoxFill } from 'react-icons/ri'

const Testimonials = () => {

    const userData = [
        {
            id: 1,
            name: 'Alex Cross',
            title: 'CEO of Earth',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem illo repudiandae porro officia esse culpa similique modi placeat.',
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 2,
            name: 'Lara Thompson',
            title: 'Project Manager',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem illo repudiandae porro officia esse culpa similique modi placeat.',
            img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 3,
            name: 'John Doe',
            title: 'CTO of Vacanzi',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem illo repudiandae porro officia esse culpa similique modi placeat.',
            img: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]

    return (
        <div className='testimonial' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {userData.map(data => (
                    <div className="card">
                        <div className="top">
                            <RiGlobalLine size='24px' />
                            <img src={data.img} alt={data.id} />
                            <RiLinkedinBoxFill size='24px' />
                        </div>
                        <div className="center">
                            {data.des}
                        </div>
                        <div className="bottom">
                            <h3>{data.name}</h3>
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
