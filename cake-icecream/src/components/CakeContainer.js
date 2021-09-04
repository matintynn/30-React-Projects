import React from 'react';
import { connect } from 'react-redux'
import cakeImg from '../assets/cake.svg'
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = (props) => {
    return (
        <div className="product_container">
            <img className='product' src={cakeImg} alt="cake svg" />
            <p>Number of Cake: <span>{props.numOfCakes}</span></p>
            <button onClick={props.buyCake}>Buy</button>
        </div>
    );
}

// How to use connect() method to retreive data
const mapStateToProp = state => {
    return {
        // bc we have muntiple reducers, so this how we access value of numOfCakes
        numOfCakes: state.cakeReducer.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(CakeContainer);