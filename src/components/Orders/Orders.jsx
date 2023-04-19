import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Reviewitems from "../Reviewitems/Reviewitems";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const sevedCart = useLoaderData()
    const [cart, setCart] = useState(sevedCart)

    const handleRemoveCart = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart();
    }


    return (
        <div className="flex">
            <div className="mx-auto mt-12 border-gray-900">
                {
                    cart.map(product => <Reviewitems
                    key={product.id}
                    product = {product}
                    handleRemoveCart={handleRemoveCart}
                    ></Reviewitems>)
                }
            </div>
            <div className="ml-auto">
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 >
                    <Link to="/checkout">
                        Chekout
                    </Link>
                 </Cart>
            </div>
        </div>
    )
}

export default Orders;