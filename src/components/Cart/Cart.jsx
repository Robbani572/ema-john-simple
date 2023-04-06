import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='sticky top-0 bg-orange-400 p-4'>
            <h4 className='text-center mb-6 font-bold text-2xl'>Order Summary</h4>
            <p className='mb-4 font-semibold'>Selected Items: {quantity}</p>
            <p className='mb-4 font-semibold'>Total Price: ${totalPrice}</p>
            <p className='mb-4 font-semibold'>Shipping: ${totalShipping}</p>
            <p className='mb-4 font-semibold'>Tax: ${tax.toFixed(2)}</p>
            <h6 className='mb-4 font-bold'>Grand Total: ${grandTotal.toFixed(2)} </h6>
            <button className='bg-red-700 w-full rounded py-2 text-white font-semibold'>
                <Link>Clear Cart</Link>
            </button>
        </div>
    );
};

export default Cart;