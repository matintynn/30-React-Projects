import React, { useState } from 'react';
import Modal from './components/Modal';
import { GlobalStyle, Container, Cta, Header, Button } from './styles-components/Styles'

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Cta>
          <Header>REACT MODAL</Header>
          <Button onClick={openModal}>
            Click me
          </Button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </Cta>
      </Container>
    </div>
  );
}

export default App;
