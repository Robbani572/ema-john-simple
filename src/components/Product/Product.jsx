import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='relative w-80 h-auto border border-gray-700 rounded'>
            <img className='w-72 h-72 rounded m-2' src={img} alt="" />
            <div className='ml-3.5 mb-12'>
                <h4 className='mb-0 mt-0 font-bold font-3xl tracking-wide leading-8'>{name}</h4>
                <p className='font-semibold mt-1.5'>Price: ${price}</p>
                <p className='font-semibold mt-1.5'>Manufacturer: {seller}</p>
                <p className='font-semibold mt-1.5'>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='my-button'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;