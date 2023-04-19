import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({ cart, handleClearCart, children }) => {
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
            <button onClick={handleClearCart} className='bg-red-700 w-full rounded py-2 text-white font-semibold flex items-center justify-center'>
                <Link>Clear Cart</Link>
                <TrashIcon className="h-6 w-6 text-white ml-4" />
            </button>
            <button className='bg-orange-600 w-full rounded py-2 text-white font-semibold mt-4'>
                {children}
            </button>
        </div>
    );
};

export default Cart;