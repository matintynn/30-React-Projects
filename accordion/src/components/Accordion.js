import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

    h1{
        color: #282838;
    }
`

const Container = styled.div`
    padding: 0 10px;
    width: 95vmin;
`

const Wrap = styled.div`
    background-color: #282838;
    border-bottom: 1px solid rgb(0, 241, 245);
    color: white;
    padding: 2px 20px;
    cursor: pointer;
    max-width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    h2{
        font-size: 3vmin;
        color: rgb(0, 241, 245)
    }
`

const Dropdown = styled.div`
    background-color: white;
    padding: 2px 20px;

    p{
        line-height: 1.5;
    }
`

const Accordion = () => {
    const [click, setClick] = useState(false)

    const toggle = index => {
        if (click === index) {
            return setClick(null)
        }
        setClick(index)
    }

    return (
        <IconContext.Provider value={{ color: 'rgb(0, 241, 245)', size: '28px' }}>
            <AccordionSection>
                <h1>REACT ACCORDION</h1>
                <Container>
                    {Data.map((content, index) => {
                        return (
                            <div key={content.id}>
                                <Wrap
                                    onClick={() => toggle(index)}
                                >
                                    <h2>{content.question}</h2>
                                    <span>{click === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {click === index ? (
                                    <Dropdown>
                                        <p>{content.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </div>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
}

export default Accordion;