import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector(state => state.productReducer.products)
    const renderProducts = products.filter(product => product.category !== 'electronics').map(product => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="ui grid container" >
            {renderProducts}
        </div>
    );
}

export default ProductComponent;