import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;