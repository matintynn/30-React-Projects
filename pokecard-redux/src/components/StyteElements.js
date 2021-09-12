import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img{
        width: 100%;
    }

    body{
        background: #2D2D3E;
    }

    a{
        text-decoration: none;
        color: #000;
    }
`

export const Container = styled.div`
    max-width: 990px;
    margin: 0 auto;
    padding: 1em 20px ;
    /* min-height: 100vh; */
`

export const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
    position: relative;

    .pokeText{
        width: 30vw;
    }

    .pokeBall{
        width: 11vw;
    }

    @media screen and (min-width: 768px) {
        .pokeText{
            width: 350px;
        }

        .pokeBall{
            width: 110px;
            transform: translateY(10px);
            animation: float 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
            pointer-events: none;
            backface-visibility: hidden;
        }

        @keyframes float{
            0%{
                transform: translateY(-3px) translateZ(20px) rotate(-12deg);
            }
            100%{
                transform: translateY(12px) translateX(13px) translateZ(30px) rotate(15deg);
            }
        }
    }
`

export const Cards = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

export const Card = styled.div`
    height: 42vh;
    background: #fff;
    border-radius: 6px;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    .img {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        position: relative;
        background-color: #F5F5F5;
        width: 150px;
        height: 150px;
        border-radius: 50%;

        img{
            height: 20vh;
            transition: transform 500ms ease-out;
            &:hover{
                position: absolute;
                transform: scale(1.5) translateY(-8px) rotate(5deg);
            }
        }
    } 

    .infor{
        text-align: center;

        .name{
            font-weight: bold;
            font-size: 1.5rem;
            text-transform: uppercase
        }

        .type{
            font-size: 1.2rem;
            color: #999999;
        }
    }
`

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 4em 0 2em;
    gap: 20px;

    button{
        outline: none;
        border: none;
        border-radius: 4px;
        /* padding: 16px 26px; */
        width: 14vh;
        height: 5vh;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
    }
`

export const PokemonDetailCard = styled.div`
    height: 35vh;
    width: 50vmin;
    background: #fff;
    border-radius: 6px;
    margin: 10em auto 0;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
        .img{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                height: 30vh;
                position: absolute;
                transform:  translateY(-30px);
                
                &:hover{
                    position: absolute;
                    transform: scale(1.3) translateY(-40px) rotate(5deg);
                }
            }


        }

        .infor-container{
            h1{
                text-transform: uppercase;
                text-align: center;
                font-size: 5vmin;
            }

            .infor{
                margin-top: 1em;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
            }
        }
`

// export const Container = styled.div`

// `