import React from 'react';
import {useSelector} from 'react';
// import store from '../redux/store';

const ProductListing = () => {
    const products= useSelector(state => state.store);
    console.log(products);
    return (
        <div className="ui grid container">
            <h1> ProductListing </h1>
        </div>
    );
};

export default ProductListing;