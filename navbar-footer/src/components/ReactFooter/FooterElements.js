import styled from 'styled-components'

export const FooterContainer = styled.div`
   background-color: #5D5FEF;
   padding: 2rem 16px;
`

export const Container = styled.div`
   @media screen and (min-width: 768px) {
      padding: 0rem calc((100vw - 1000px) / 2);
    }
`

export const Row = styled.div`
  
  @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

export const Col = styled.div`
   color: white;
   text-align: center;
   margin: 1.5rem 0;

   h3, p{
      padding: 0;
      margin: 4px 0;
   }
`
// export const = styled