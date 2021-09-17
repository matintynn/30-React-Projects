import React from 'react';

const Coin = ({ img, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <>
            <div className="coin-row">
                <div className="coin">
                    <img src={img} alt={symbol} />
                    <p className='name'>{name}</p>
                    <p className='symbol'>{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0
                        ? <div className="priceChange red">{priceChange.toFixed(2)}%</div>
                        : <div className="priceChange green">{priceChange.toFixed(2)}%</div>
                    }
                    <p className="coin-marketcap">
                        Mtk Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Coin;