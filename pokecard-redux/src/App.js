import React from 'react';
import Header from './components/Header';
import PokemonListing from './components/PokemonListing';
import PokemonDetail from './components/PokemonDetail';
import { GlobalStyle } from './components/StyteElements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      {/* LEARNED:  
        -<GlobalStyle></GlobalStyle> this won't work
    */}
      <GlobalStyle />

      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={PokemonListing} />
          <Route path='/pokemon/:pokemon_id' exact component={PokemonDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
