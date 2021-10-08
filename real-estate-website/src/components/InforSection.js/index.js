import React from 'react'
import { Button } from '../Button'
import { Section, Container, ColumnLeft, ColumnRight } from './InforSecElements'

const InforSection = ({ heading, para, paraTwo, btnLabel, reverse, image }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{para}</p>
                    <p>{paraTwo}</p>
                    <Button to='/properties' primary={true}>{btnLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InforSection
