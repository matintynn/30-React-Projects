import React from 'react';
import iceCreamImg from '../assets/ice-cream.svg'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCreamReducer.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div className="product_container">
            <img className='product' src={iceCreamImg} alt="ice-cream svg" />
            <p>Number of Ice-cream: <span>{numOfIceCream}</span></p>
            <button onClick={() => dispatch(buyIceCream())}>Buy</button>
        </div>
    );
}

export default IceCreamContainer;