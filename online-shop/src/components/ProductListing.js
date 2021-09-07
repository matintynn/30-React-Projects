import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const url = 'https://fakestoreapi.com/products'
        const res = await axios.get(url).catch(err => {
            console.log(err)
        })
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetchProducts()
    })

    return (
        <div className="ui grid container ">
            <div className="product-display">
                <ProductComponent />
            </div>
        </div>
    );
}

export default ProductListing;