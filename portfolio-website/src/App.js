import React, { useState } from 'react'
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.scss';
import Menu from './components/Menu';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <Topbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Works /> */}
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}

export default App;
