import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, removeSelectProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const { product_id } = useParams();
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.selectedProductReducer)
    const { title, image, price, category, description } = productDetail;

    const fetchSingleProduct = async () => {
        const url = `https://fakestoreapi.com/products/${product_id}`
        const res = await axios.get(url).catch(err => err)
        // setProductDetail(res.data)
        dispatch(selectProduct(res.data))
    }

    useEffect(() => {
        if (product_id && product_id !== '') fetchSingleProduct()
        // clean up action, to remove the current product
        dispatch(removeSelectProduct())
    }, [product_id])

    return (
        <div className="ui grid container">
            {Object.keys(productDetail).length === 0 ? (
                <div className="product-detail">
                    <div>...Loading</div>
                </div>
            ) : (
                <div className="product-detail">
                    <div className="ui placeholder segment product-detail">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={image} alt={title} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <p className="ui yellow tag label">${price}</p>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;