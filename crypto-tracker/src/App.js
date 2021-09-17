import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Coin from './components/Coin';
import { BiSearch } from 'react-icons/bi'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    const fetchCoins = () => {
      axios.get(url).then(res => {
        setCoins(res.data)
      }).catch(err => console.log(err))
    }

    fetchCoins()
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  console.log(filteredCoins)

  return (
    <div className="coins-app">
      <div className="app-container">
        <div className="coins-header">
          <h1 className='logo'>CRYPTO <span className='hightline'>TRACKER</span></h1>
          <div className="coins-search">
            <form>
              <div className="search-bar">
                <BiSearch />
                <input
                  type="text"
                  name="search"
                  value={search}
                  placeholder='Search coins...'
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        {/* showing coin */}
        <div className="main-container">
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                img={coin.image}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
