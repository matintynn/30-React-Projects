import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { MdClose } from 'react-icons/md'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Cta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vmin;
  height: 40vh;
  background: white;
  border: 1px solid rgb(36, 36, 43);
  border-radius: 8px;
`

export const Header = styled.h2`
  font-size: 2.2em;
  text-align: center;
  color: rgb(36, 36, 43);
`

export const Button = styled.button`
  min-width: 100px;
  margin: 1em 0 0;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: rgb(69, 69, 219);
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover{
    background-color: rgb(41, 41, 173);
  }
`

// Style modal
export const ModalSectionBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  width: 95vmin;
  height: 70vmin;
  box-shadow: 0 4px 18px rgba(0,0,0,0.2);
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  z-index: 1000;
  border-radius: 10px;
  overflow: hidden;
`

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
  object-fit: cover;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: rgb(36, 36, 43);

  h2{
    font-size: 4.5vmin;
    text-align: center;
  }

  p {
    margin-bottom: 1em;
    font-size: 2.5vmin
  }

  button{
    padding: 12px 32px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: rgb(69, 69, 219);
    color: #fff;
    font-size: 3vmin;
    cursor: pointer;
  }
`

export const CloseModalBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  z-index: 1100;
`