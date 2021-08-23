import React, { useRef, useEffect } from 'react';
import { ModalSectionBackground, ModalContainer, ModalImg, ModalContent, CloseModalBtn } from '../styles-components/Styles'
import { useSpring, animated } from 'react-spring'

const Modal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
        config: {
            duration: 300
        },
        delay: 400,
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(prev => !prev)
        }
    }

    useEffect(() => {
        const listener = e => {
            if (e.key === 'Escape') {
                setShowModal(false)
            }
        }
        window.addEventListener('keydown', listener)
        return () => window.removeEventListener('key', listener)
    }, [setShowModal])

    return <>{showModal &&
        (
            <ModalSectionBackground
                ref={modalRef}
                onClick={e => closeModal(e)}
            >
                <animated.div style={animation}>
                    <ModalContainer>
                        <ModalImg src='https://images.unsplash.com/photo-1616004675303-ae5657c14af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='react image from Quinton Coetzee'
                        />
                        <ModalContent>
                            <h2>React Course 2021</h2>
                            <p>The best React course in 2021</p>
                            <button>Join</button>
                        </ModalContent>
                        <CloseModalBtn onClick={() => setShowModal(prev => !prev)} />
                    </ModalContainer>
                </animated.div>
            </ModalSectionBackground>
        )
    }</>
}

export default Modal;