import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`

export const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-rows: 800px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    p{
        margin-bottom: 2rem;
    }
`

export const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`
